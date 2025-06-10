import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'

// Configuration constants
const ENEO_BACKEND_URL = process.env.ENEO_BACKEND_URL as string
const ENEO_SUPER_API_KEY = process.env.ENEO_SUPER_API_KEY as string
const ENEO_API_KEY_HEADER_NAME = process.env.ENEO_API_KEY_HEADER_NAME as string
const ENEO_PREDEFINED_OWNER_ROLE_ID = process.env.ENEO_PREDEFINED_OWNER_ROLE_ID as string

// Define the schema for tenant creation
const createTenantSchema = z.object({
  name: z.string().min(1, 'Organization name is required'),
  email: z.string().email('Valid email is required'),
  techEmail: z.string().email('Valid email is required'),
  password: z.string().min(8, 'Password must be at least 6 characters long'),
  agreementsSigned: z.object({
    generalAgreement: z.boolean(),
    dataProcessingAgreement: z.boolean(),
  }),
})

export type CreateTenantRequest = z.infer<typeof createTenantSchema>

export interface TenantResponse {
  id: string
  email: string
  createdAt: string
  updatedAt: string
}

// Predefined roles configuration
const PREDEFINED_ROLES = [
  {
    "id": ENEO_PREDEFINED_OWNER_ROLE_ID
  }
]

async function getEneoTenantByName(name: string) {
  const url = `${ENEO_BACKEND_URL}/api/v1/sysadmin/tenants`
  const headers = {
    'accept': 'application/json',
    [ENEO_API_KEY_HEADER_NAME]: ENEO_SUPER_API_KEY,
  }

  const response = await fetch(url, {
    method: 'GET',
    headers,
  })

  const tenantsResponse = await response.json()
  return tenantsResponse.items.find((tenant: any) => tenant.name === name)
}

async function createEneoTenant(name: string, displayName: string) {
  const url = `${ENEO_BACKEND_URL}/api/v1/sysadmin/tenants/`
  const headers = {
    'accept': 'application/json',
    [ENEO_API_KEY_HEADER_NAME]: ENEO_SUPER_API_KEY,
    'Content-Type': 'application/json'
  }

  const data = {
    name: name,
    display_name: displayName,
    quota_limit: 1073741824, // 1GB in bytes
    provisioning: true,
    state: "active",
    security_enabled: false
  }

  const response = await fetch(url, {
    method: 'POST',
    headers,
    body: JSON.stringify(data)
  })

  if (response.status === 400) {
    const errorText = await response.text()
    const errorJson = JSON.parse(errorText)
    if (errorJson.intric_error_code === 9009) {
      // Find tenant by name
      const tenant = await getEneoTenantByName(name)
      console.log("Tenant already exists:", tenant)
      if (tenant) {
        return tenant
      }
    }
  }
  else if (!response.ok) {
    const errorText = await response.text()
    throw new Error(`Failed to create tenant. Status: ${response.status}, Response: ${errorText}`)
  }

  return await response.json()
}

async function createEneoUser(email: string, password: string, tenantId: string) {
  const url = `${ENEO_BACKEND_URL}/api/v1/sysadmin/users/`
  const headers = {
    'accept': 'application/json',
    [ENEO_API_KEY_HEADER_NAME]: ENEO_SUPER_API_KEY,
    'Content-Type': 'application/json'
  }

  const data = {
    email: email,
    password: password, // TODO: Generate secure password or use email verification flow
    quota_limit: 1073741824, // 1GB in bytes
    roles: [],
    predefined_roles: PREDEFINED_ROLES,
    tenant_id: tenantId
  }

  const response = await fetch(url, {
    method: 'POST',
    headers,
    body: JSON.stringify(data)
  })
  if (response.status === 400) {
    const errorText = await response.text()
    const errorJson = JSON.parse(errorText)
    if (errorJson.intric_error_code === 9004) {
      throw new Error(`User ${email} already exists.`)
    }
  }
  else if (!response.ok) {
    const errorText = await response.text()
    throw new Error(`Failed to create user. Status: ${response.status}, Response: ${errorText}`)
  }

  return await response.json()
}

export async function POST(request: NextRequest) {
  try {
    // Parse and validate the request body
    const body = await request.json()
    const validatedData = createTenantSchema.parse(body)

    // Check if both agreements are signed
    if (!validatedData.agreementsSigned.generalAgreement || !validatedData.agreementsSigned.dataProcessingAgreement) {
      return NextResponse.json(
        {
          error: 'Both general agreement and data processing agreement must be signed',
          code: 'AGREEMENTS_NOT_SIGNED'
        },
        { status: 400 }
      )
    }

    // Generate tenant name from email domain (without TLD suffix)
    const emailDomain = validatedData.email.split('@')[1]
    const domainParts = emailDomain.split('.')
    // Take the main domain part (before the TLD)
    const mainDomain = domainParts.length > 1 ? domainParts[0] : emailDomain
    const tenantName = mainDomain
      .toLowerCase()
      .replace(/[^a-z0-9-]/g, '')
      .replace(/-+/g, '-')
      .replace(/^-|-$/g, '')

    try {
      // Create tenant in backend
      console.log(`Creating tenant: ${tenantName}`)
      const tenantResponse = await createEneoTenant(tenantName, tenantName)
      console.log(`Tenant ${tenantResponse.name} created successfully.`)

      // Create user in backend
      console.log(`Creating user: ${validatedData.email}`)
      const userResponse = await createEneoUser(validatedData.email, validatedData.password, tenantResponse.id)
      console.log(`User ${userResponse.username} created successfully.`)

      // Return successful response
      const responseData: TenantResponse = {
        id: tenantResponse.id,
        email: validatedData.email,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      }

      return NextResponse.json(
        {
          message: 'Tenant and user created successfully',
          tenant: responseData,
          user: {
            id: userResponse.id,
            username: userResponse.username,
            email: userResponse.email
          }
        },
        { status: 201 }
      )

    } catch (backendError) {
      console.error('Backend API error:', backendError)

      return NextResponse.json(
        {
          error: 'Failed to create tenant in backend system',
          code: 'BACKEND_ERROR',
          details: backendError instanceof Error ? backendError.message : 'Unknown backend error'
        },
        { status: 500 }
      )
    }

  } catch (error) {
    // Handle validation errors
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        {
          error: 'Invalid request data',
          code: 'VALIDATION_ERROR',
          details: error.errors,
        },
        { status: 400 }
      )
    }

    // Handle JSON parsing errors
    if (error instanceof SyntaxError) {
      return NextResponse.json(
        {
          error: 'Invalid JSON in request body',
          code: 'INVALID_JSON',
        },
        { status: 400 }
      )
    }

    // Handle unexpected errors
    console.error('Error creating tenant:', error)
    return NextResponse.json(
      {
        error: 'Internal server error',
        code: 'INTERNAL_ERROR',
      },
      { status: 500 }
    )
  }
}
