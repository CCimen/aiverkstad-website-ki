"use client"

import { useSearchParams } from "next/navigation"
import { useState } from "react"
import { CheckCircle, Copy, ExternalLink } from "lucide-react"
import Navbar from "@/components/navbar"
import { NordicButton } from "@/components/ui/nordic-button"
import { ActivationTimeline } from "@/components/ui/activation-timeline"
import Link from "next/link"

export default function ConfirmationPage() {
  const searchParams = useSearchParams()
  const [copied, setCopied] = useState(false)
  
  // Get credentials from URL params (passed from activate page)
  const email = searchParams.get('email')
  const password = searchParams.get('password')
  const orgName = searchParams.get('orgName')
  const isNewTenant = searchParams.get('isNewTenant') === 'true'
  
  const handleCopyPassword = () => {
    if (password) {
      navigator.clipboard.writeText(password)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    }
  }
  
  if (!email || !orgName) {
    return (
      <div className="min-h-screen bg-nordic-snow">
        <Navbar />
        <div className="container py-12">
          <div className="max-w-md mx-auto text-center">
            <p className="text-nordic-ink">Något gick fel. Vänligen försök igen.</p>
            <Link href="/activate">
              <NordicButton variant="primary" className="mt-4">
                Tillbaka till aktivering
              </NordicButton>
            </Link>
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
        
        <div className="max-w-2xl mx-auto">
          <div className="bg-white p-4 md:p-8 rounded-xl shadow-sm border border-nordic-cloud">
            <div className="text-center mb-6 md:mb-8">
              <CheckCircle className="h-12 w-12 md:h-16 md:w-16 text-green-500 mx-auto mb-4" />
              <h1 className="text-xl md:text-2xl lg:text-3xl font-bold text-nordic-ink mb-2">
                {isNewTenant ? 'Aktivering genomförd!' : 'Välkommen tillbaka!'}
              </h1>
              <p className="text-base md:text-lg text-nordic-steel">
                {orgName} har nu tillgång till Eneo
              </p>
            </div>
            
            {password && (
              <div className="bg-nordic-frost p-4 md:p-6 rounded-lg mb-6">
                <h2 className="text-lg md:text-xl font-semibold text-nordic-ink mb-4">Dina inloggningsuppgifter</h2>
                
                <div className="space-y-4">
                  <div>
                    <p className="text-sm md:text-base text-nordic-steel font-medium mb-1">Plattform URL</p>
                    <p className="font-mono text-sm md:text-base break-all">https://plattform.aiverkstad.se</p>
                  </div>
                  
                  <div>
                    <p className="text-sm md:text-base text-nordic-steel font-medium mb-1">E-post</p>
                    <p className="font-mono text-sm md:text-base break-all">{email}</p>
                  </div>
                  
                  <div>
                    <p className="text-sm md:text-base text-nordic-steel font-medium mb-1">Lösenord</p>
                    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
                      <p className="font-mono text-sm md:text-base flex-1 break-all bg-white px-3 py-2 rounded border">{password}</p>
                      <button
                        onClick={handleCopyPassword}
                        className="min-h-[44px] px-4 py-2 text-sm md:text-base font-medium text-white bg-nordic-sage hover:bg-nordic-forest rounded-lg transition-colors flex items-center gap-2 w-full sm:w-auto justify-center"
                        aria-label="Kopiera lösenord"
                      >
                        {copied ? 'Kopierat!' : 'Kopiera'}
                        <Copy className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                </div>
                
                <p className="text-sm md:text-base text-nordic-steel mt-4">
                  ✉️ En kopia av dessa uppgifter har skickats till {email}
                </p>
              </div>
            )}
            
            <div className="bg-blue-50 p-4 md:p-6 rounded-lg mb-6">
              <h3 className="text-lg md:text-xl font-semibold mb-3">Nästa steg:</h3>
              <ol className="list-decimal list-inside space-y-2 text-sm md:text-base">
                <li>Logga in på plattformen med uppgifterna ovan</li>
                <li>Byt lösenord vid första inloggningen</li>
                <li>Utforska befintliga AI-assistenter</li>
                <li>Skapa din första egna assistent</li>
                <li>Bjud in kollegor från {orgName}</li>
              </ol>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://plattform.aiverkstad.se"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 order-1 sm:order-1"
              >
                <NordicButton variant="primary" className="w-full min-h-[48px] md:min-h-[52px] text-base md:text-lg font-semibold px-6 py-3">
                  Gå till plattformen
                  <ExternalLink className="ml-2 h-5 w-5" />
                </NordicButton>
              </a>
              
              <Link href="/" className="flex-1 order-2 sm:order-2">
                <NordicButton variant="outline" className="w-full min-h-[48px] md:min-h-[52px] text-base md:text-lg font-semibold px-6 py-3">
                  Tillbaka till startsidan
                </NordicButton>
              </Link>
            </div>
          </div>
          
          <div className="mt-6 md:mt-8 text-center text-sm md:text-base text-nordic-steel px-4">
            <p>Har du problem? Kontakta support@aiverkstad.se</p>
            <p className="mt-2">Detta är en demonstrationsversion med begränsad kapacitet.</p>
          </div>
        </div>
      </div>
    </div>
  )
}
