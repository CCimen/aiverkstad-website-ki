"use client"

import type React from "react"

import { useState } from "react"
import Navbar from "@/components/navbar"
import { NordicButton } from "@/components/ui/nordic-button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { ActivationTimeline } from "@/components/ui/activation-timeline"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { ArrowRight, Mail, Building } from "lucide-react"

export default function ActivatePage() {
  const router = useRouter()
  const [email, setEmail] = useState("")
  const [techEmail, setTechEmail] = useState("")
  const [orgName, setOrgName] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    
    try {
      const response = await fetch("/api/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, techEmail, orgName })
      })
      
      const data = await response.json()
      
      if (!response.ok) {
        throw new Error(data.error || "Något gick fel")
      }
      
      // Pass credentials via URL params to confirmation page
      const params = new URLSearchParams({
        email: data.email,
        password: data.password || '', // Empty if existing user
        orgName: data.orgName,
        isNewTenant: String(data.isNewTenant)
      })
      
      router.push(`/confirmation?${params.toString()}`)
    } catch (error: any) {
      alert(error.message || "Ett fel uppstod. Försök igen.")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-nordic-snow">
      <Navbar />

      <div className="container py-6 md:py-12 px-4">
        <ActivationTimeline currentStep={1} />

        <div className="max-w-lg mx-auto">
          <div className="bg-nordic-frost p-4 md:p-8 rounded-xl shadow-sm border border-nordic-cloud">
            <h1 className="text-xl md:text-2xl lg:text-3xl font-bold text-nordic-ink mb-4 md:mb-6">Kontaktuppgifter</h1>

            <p className="mb-4 md:mb-6 text-sm md:text-base text-nordic-ink">
              Ange följande uppgifter för att få tillgång till en testversion av plattformen.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
              <div className="space-y-2">
                <Label htmlFor="email" className="text-sm md:text-base font-medium text-nordic-ink">
                  Din e-postadress
                </Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-nordic-steel" />
                  <Input
                    id="email"
                    type="email"
                    placeholder="namn@organisation.se"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="pl-10 border-nordic-cloud focus:border-nordic-sage focus:ring-nordic-sage transition-all min-h-[44px] md:min-h-[48px] text-sm md:text-base"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="tech-email" className="text-sm md:text-base font-medium text-nordic-ink">
                  E-postadress till teknisk kontaktperson i din organisation
                </Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-nordic-steel" />
                  <Input
                    id="tech-email"
                    type="email"
                    placeholder="teknisk@organisation.se"
                    value={techEmail}
                    onChange={(e) => setTechEmail(e.target.value)}
                    className="pl-10 border-nordic-cloud focus:border-nordic-sage focus:ring-nordic-sage transition-all min-h-[44px] md:min-h-[48px] text-sm md:text-base"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="orgName" className="text-sm md:text-base font-medium text-nordic-ink">
                  Organisation
                </Label>
                <div className="relative">
                  <Building className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-nordic-steel" />
                  <Input
                    id="orgName"
                    type="text"
                    placeholder="Organisationens namn"
                    value={orgName}
                    onChange={(e) => setOrgName(e.target.value)}
                    className="pl-10 border-nordic-cloud focus:border-nordic-sage focus:ring-nordic-sage transition-all min-h-[44px] md:min-h-[48px] text-sm md:text-base"
                    required
                  />
                </div>
              </div>

              <NordicButton
                type="submit"
                variant="primary"
                className="w-full min-h-[48px] md:min-h-[52px] text-base md:text-lg font-semibold px-6 py-3 mt-6 md:mt-8"
                disabled={isLoading}
              >
                {isLoading ? "Skickar..." : "Skicka intresseanmälan"}
                <ArrowRight className="ml-2 h-5 w-5" />
              </NordicButton>
            </form>
          </div>
        </div>
      </div>

      <footer className="container px-4 py-6 md:py-10 border-t border-nordic-cloud mt-6 md:mt-10">
        <div className="max-w-[960px] mx-auto">
          <div className="text-center">
            <p className="text-nordic-steel text-xs md:text-base">©2024 AI-verkstaden. Alla rättigheter förbehållna.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
