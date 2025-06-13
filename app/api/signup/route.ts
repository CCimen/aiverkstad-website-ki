import { NextRequest, NextResponse } from "next/server"
import { Resend } from "resend"
import { isValidGovEmail } from "@/lib/municipality-validator"

// Initialize Resend conditionally to avoid build-time errors
const getResend = () => new Resend(process.env.RESEND_API_KEY)

// Remove in-memory tracking - use database as source of truth

export async function POST(request: NextRequest) {
  const { email, techEmail, orgName } = await request.json()

  // Validate government email
  if (!isValidGovEmail(email) || !isValidGovEmail(techEmail)) {
    return NextResponse.json(
      { error: "Endast svenska myndigheter och kommuner kan registrera sig" },
      { status: 400 }
    )
  }
  
  try {
    // 1. Get all tenants to find available pool tenant
    const tenantsRes = await fetch(
      `${process.env.ENEO_BACKEND_URL}/api/v1/sysadmin/tenants/`,
      {
        headers: {
          [process.env.ENEO_API_KEY_HEADER_NAME!]: process.env.ENEO_SUPER_API_KEY!
        }
      }
    )
    const tenantsData = await tenantsRes.json()
    const tenants = tenantsData.items || tenantsData
    
    // 2. Check if org already has a tenant (case-insensitive)
    const existingTenant = tenants.find((t: any) => 
      t.display_name && t.display_name.toLowerCase() === orgName.toLowerCase()
    )
    
    let tenant
    let isNewTenant = false
    
    if (existingTenant) {
      tenant = existingTenant
    } else {
      // Find truly available pool tenant (database-based)
      tenant = tenants.find((t: any) => 
        t.name.startsWith('demo-pool-') && 
        (!t.display_name || t.display_name.startsWith('Demo Pool '))
      )
      
      if (!tenant) {
        return NextResponse.json(
          { error: "Demo-kapacitet uppnådd. Vänligen kontakta oss." },
          { status: 503 }
        )
      }
      
      isNewTenant = true
      
      // 3. Update tenant display name
      await fetch(
        `${process.env.ENEO_BACKEND_URL}/api/v1/sysadmin/tenants/${tenant.id}/`,
        {
          method: 'POST',
          headers: {
            [process.env.ENEO_API_KEY_HEADER_NAME!]: process.env.ENEO_SUPER_API_KEY!,
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            display_name: orgName
          })
        }
      )
    }
    
    // 4. Generate secure password
    const password = generateSecurePassword()
    
    // 5. Create user
    const userRes = await fetch(
      `${process.env.ENEO_BACKEND_URL}/api/v1/sysadmin/users/`,
      {
        method: 'POST',
        headers: {
          [process.env.ENEO_API_KEY_HEADER_NAME!]: process.env.ENEO_SUPER_API_KEY!,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email,
          password,
          username: email.split('@')[0],
          tenant_id: tenant.id,
          quota_limit: 1000,
          roles: [],
          predefined_roles: [
            {
              id: process.env.ENEO_PREDEFINED_OWNER_ROLE_ID
            }
          ]
        })
      }
    )
    
    if (!userRes.ok) {
      const error = await userRes.json()
      // User might already exist
      if (error.detail?.includes('already exists')) {
        return NextResponse.json({
          tenantId: tenant.id,
          email,
          orgName,
          existingUser: true
        })
      }
      throw new Error('Failed to create user')
    }

    // 6. Send email with credentials
    try {
      const resend = getResend()
      await resend.emails.send({
        from: process.env.RESEND_FROM_EMAIL!,
        to: process.env.RESEND_RECIPIENT!,
        subject: `Välkommen till Eneo - ${orgName}`,
        html: `
          <h2>Välkommen till Eneo!</h2>
          <p>Din organisation "${orgName}" har nu tillgång till AI-plattformen Eneo.</p>

          <h3>Inloggningsuppgifter:</h3>
          <p><strong>URL:</strong> https://plattform.aiverkstad.se</p>
          <p><strong>E-post:</strong> ${email}</p>
          <p><strong>Lösenord:</strong> ${password}</p>

          <p>Vi rekommenderar att du byter lösenord vid första inloggningen.</p>

          <h3>Nästa steg:</h3>
          <ol>
            <li>Logga in på plattformen</li>
            <li>Utforska AI-assistenter</li>
            <li>Skapa din första egna assistent</li>
            <li>Bjud in kollegor från ${orgName}</li>
          </ol>

          <p>Vid frågor, kontakta aiverkstad@sundsvall.se</p>

          <hr>
          <p><small>Detta är en demonstrationsversion med begränsad kapacitet.</small></p>
        `
      })
      console.log('Email sent successfully to:', process.env.RESEND_RECIPIENT)
      console.log('Email sent successfully from:', process.env.RESEND_FROM_EMAIL)
    } catch (emailError) {
      console.error('Email send failed:', emailError)
      // Continue - we'll show credentials on web anyway
    }

    // Return success with credentials for web display
    return NextResponse.json({
      success: true,
      tenantId: tenant.id,
      email,
      password, // Include for web display
      orgName,
      isNewTenant
    })
    
  } catch (error) {
    console.error('Signup error:', error)
    return NextResponse.json(
      { error: "Ett fel uppstod. Försök igen." },
      { status: 500 }
    )
  }
}

function generateSecurePassword(): string {
  const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz23456789!@#$'
  let password = ''
  for (let i = 0; i < 12; i++) {
    password += chars.charAt(Math.floor(Math.random() * chars.length))
  }
  return password
}
