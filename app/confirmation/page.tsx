"use client"

import { useState, useEffect } from "react"
import Navbar from "@/components/navbar"
import { NordicButton } from "@/components/ui/nordic-button"
import Link from "next/link"
import { ArrowLeft, Home, CheckCircle, Building2, Mail, Calendar } from "lucide-react"
import { ActivationTimeline } from "@/components/ui/activation-timeline"
import { useRouter } from "next/navigation"

interface ActivationData {
  email: string
  techEmail: string
  agreementsSigned: {
    generalAgreement: boolean
    dataProcessingAgreement: boolean
  }
}

export default function ConfirmationPage() {
  const router = useRouter()
  const [isCreating, setIsCreating] = useState(false)
  const [activationData, setActivationData] = useState<ActivationData | null>(null)
  const [tenantCreated, setTenantCreated] = useState(false)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    // Load activation data and create tenant
    const loadDataAndCreateTenant = async () => {
      try {
        const stored = localStorage.getItem('activationData')
        if (!stored) {
          router.push('/activate')
          return
        }

        const data = JSON.parse(stored) as ActivationData
        setActivationData(data)

        // Verify agreements are signed
        if (!data.agreementsSigned?.generalAgreement || !data.agreementsSigned?.dataProcessingAgreement) {
          setError('Agreements must be signed to proceed')
          return
        }

        // Create tenant via API
        setIsCreating(true)
        const response = await fetch('/api/tenants', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            email: data.email,
            techEmail: data.techEmail,
            password: generateSecurePassword(), // Generate a secure password
            agreementsSigned: data.agreementsSigned
          })
        })

        if (response.ok) {
          const result = await response.json()
          console.log('Tenant created successfully:', result)
          setTenantCreated(true)
          // Clear stored data after successful creation
          localStorage.removeItem('activationData')
        } else {
          const errorData = await response.json()
          setError(errorData.error || 'Failed to create tenant')
        }
      } catch (error) {
        console.error('Error creating tenant:', error)
        setError('An unexpected error occurred')
      } finally {
        setIsCreating(false)
      }
    }

    loadDataAndCreateTenant()
  }, [router])

  const generateSecurePassword = () => {
    // Generate a secure random password
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*'
    let password = ''
    for (let i = 0; i < 16; i++) {
      password += chars.charAt(Math.floor(Math.random() * chars.length))
    }
    return password
  }

  if (isCreating) {
    return (
      <div className="min-h-screen bg-nordic-snow">
        <Navbar />
        <div className="container py-6 md:py-12 px-4">
          <ActivationTimeline currentStep={3} />
          <div className="max-w-2xl mx-auto text-center">
            <div className="bg-nordic-frost p-6 md:p-8 rounded-xl shadow-sm border border-nordic-cloud">
              <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-nordic-sage mx-auto mb-4"></div>
              <h1 className="text-h2 text-nordic-ink mb-4">Skapar din plattform...</h1>
              <p className="text-nordic-steel">Detta kan ta några sekunder.</p>
            </div>
          </div>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="min-h-screen bg-nordic-snow">
        <Navbar />
        <div className="container py-6 md:py-12 px-4">
          <ActivationTimeline currentStep={3} />
          <div className="max-w-2xl mx-auto text-center">
            <div className="bg-nordic-frost p-6 md:p-8 rounded-xl shadow-sm border border-nordic-cloud">
              <div className="text-red-500 text-4xl mb-4">⚠️</div>
              <h1 className="text-h2 text-nordic-ink mb-4">Ett fel uppstod</h1>
              <p className="text-nordic-steel mb-6">{error}</p>
              <NordicButton variant="primary" asChild>
                <Link href="/activate">Försök igen</Link>
              </NordicButton>
            </div>
          </div>
        </div>
      </div>
    )
  }
  return (
    <div className="min-h-screen bg-nordic-snow">
      <Navbar />

      <div className="container py-6 md:py-12 px-4">
        <ActivationTimeline currentStep={3} />
        
        <div className="max-w-2xl mx-auto text-center">
          <div className="bg-nordic-frost p-6 md:p-8 rounded-xl shadow-sm border border-nordic-cloud">
            <div className="mb-6">
              <div className="relative h-32 w-32 md:h-40 md:w-40 mx-auto mb-6">
                <div className="absolute inset-0 bg-gradient-to-br from-nordic-sage to-nordic-sage-light rounded-full flex items-center justify-center">
                  <CheckCircle className="h-16 w-16 md:h-20 md:w-20 text-white" />
                </div>
                <div className="absolute -inset-2 bg-nordic-sage/20 rounded-full animate-pulse"></div>
              </div>

              <h1 className="text-xl md:text-2xl font-bold mb-4 text-nordic-ink">Er plattform är nu aktiv!</h1>
            </div>

            <div className="bg-nordic-frost p-4 md:p-6 rounded-lg border border-nordic-cloud mb-6 text-left">
              <h2 className="text-lg font-semibold mb-4 text-nordic-ink flex items-center gap-2">
                <Building2 className="h-5 w-5 text-nordic-sage" />
                Organisationsdetaljer
              </h2>

              <div className="space-y-3 text-sm md:text-base">
                <div className="flex flex-col sm:flex-row sm:items-center gap-2">
                  <span className="font-medium text-nordic-ink min-w-[120px]">Organisation:</span>
                  <span className="text-nordic-steel">
                    {activationData?.email ? activationData.email.split('@')[1].split('.')[0] : 'Organisation'}
                  </span>
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center gap-2">
                  <span className="font-medium text-nordic-ink min-w-[120px]">Plattform:</span>
                  <span className="text-nordic-steel">Eneo - Generativ AI</span>
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center gap-2">
                  <span className="font-medium text-nordic-ink min-w-[120px]">Status:</span>
                  <span className="text-nordic-sage font-medium">Aktiv</span>
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center gap-2">
                  <span className="font-medium text-nordic-ink min-w-[120px]">Aktiverad:</span>
                  <span className="text-nordic-steel flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    {new Date().toLocaleDateString("sv-SE")}
                  </span>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 border border-blue-200 p-4 rounded-lg mb-6">
              <div className="flex items-start gap-2">
                <Mail className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                <div className="text-left">
                  <p className="text-sm md:text-base text-blue-800">
                    <strong>Nästa steg:</strong> Ett meddelande har skickats till era angivna e-postadresser 
                    ({activationData?.email}, {activationData?.techEmail}) med
                    inloggningsuppgifter och vidare instruktioner för att komma igång med plattformen.
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
              <NordicButton
                variant="outline"
                className="w-full sm:w-auto"
                asChild
              >
                <Link href="/">
                  <ArrowLeft className="h-4 w-4" />
                  Återgå till översikt
                </Link>
              </NordicButton>
              <NordicButton variant="primary" className="w-full sm:w-auto">
                <Home className="h-4 w-4" />
                Gå till plattformen
              </NordicButton>
            </div>
          </div>
        </div>
      </div>

      <footer className="container px-4 py-6 md:py-10 border-t border-nordic-cloud mt-6 md:mt-10">
        <div className="max-w-[960px] mx-auto">
          <div className="flex flex-col sm:flex-row flex-wrap justify-center items-center gap-4 md:gap-6 mb-4 md:mb-6">
            <Link
              href="#"
              className="text-nordic-steel text-sm md:text-base text-center hover:text-nordic-sage transition-colors"
            >
              Användarvillkor
            </Link>
            <Link
              href="#"
              className="text-nordic-steel text-sm md:text-base text-center hover:text-nordic-sage transition-colors"
            >
              Integritetspolicy
            </Link>
            <Link
              href="#"
              className="text-nordic-steel text-sm md:text-base text-center hover:text-nordic-sage transition-colors"
            >
              Kontakta oss
            </Link>
          </div>
          <div className="text-center">
            <p className="text-nordic-steel text-sm md:text-base">©2024 AI-verkstaden. Alla rättigheter förbehållna.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
