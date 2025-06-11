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
import { ArrowRight, Mail } from "lucide-react"

export default function ActivatePage() {
  const router = useRouter()
  const [email, setEmail] = useState("")
  const [techEmail, setTechEmail] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    // Store form data in localStorage for later steps
    const formData = {
      email,
      techEmail
    }
    localStorage.setItem('activationData', JSON.stringify(formData))
    
    // Navigate to next step with data in URL params as backup
    const params = new URLSearchParams({
      email,
      techEmail
    })
    router.push(`/sign?${params.toString()}`)
  }

  return (
    <div className="min-h-screen bg-nordic-snow">
      <Navbar />

      <div className="container py-12">
        <ActivationTimeline currentStep={1} />
        
        <div className="max-w-md mx-auto">
          <div className="bg-nordic-frost p-8 rounded-xl shadow-sm border border-nordic-cloud">
            <h1 className="text-h2 text-nordic-ink mb-6">Kontaktuppgifter</h1>

            <p className="mb-6 text-nordic-ink">
              Ange följande uppgifter för att aktivera din organisations instans av plattformen:
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="email" className="text-nordic-ink">
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
                    className="pl-10 border-nordic-cloud focus:border-nordic-sage focus:ring-nordic-sage transition-all"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="tech-email" className="text-nordic-ink">
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
                    className="pl-10 border-nordic-cloud focus:border-nordic-sage focus:ring-nordic-sage transition-all"
                    required
                  />
                </div>
              </div>

              <NordicButton
                type="submit"
                variant="primary"
                className="w-full"
              >
                Gå vidare till signering
                <ArrowRight className="ml-2 h-5 w-5" />
              </NordicButton>
            </form>
          </div>
        </div>
      </div>

      <footer className="container px-4 py-10 border-t border-nordic-cloud mt-10">
        <div className="max-w-[960px] mx-auto">
          <div className="flex flex-wrap justify-center items-center gap-6 mb-6">
            <Link
              href="#"
              className="text-nordic-steel text-base text-center min-w-[160px] hover:text-nordic-sage transition-colors"
            >
              Användarvillkor
            </Link>
            <Link
              href="#"
              className="text-nordic-steel text-base text-center min-w-[160px] hover:text-nordic-sage transition-colors"
            >
              Integritetspolicy
            </Link>
            <Link
              href="#"
              className="text-nordic-steel text-base text-center min-w-[160px] hover:text-nordic-sage transition-colors"
            >
              Kontakta oss
            </Link>
          </div>
          <div className="text-center">
            <p className="text-nordic-steel text-base">©2024 AI-verkstaden. Alla rättigheter förbehållna.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
