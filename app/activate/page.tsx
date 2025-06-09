"use client"

import type React from "react"

import { useState } from "react"
import Navbar from "@/components/navbar"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { ArrowRight, Mail } from "lucide-react"

export default function ActivatePage() {
  const router = useRouter()
  const [email, setEmail] = useState("")
  const [techEmail, setTechEmail] = useState("")
  const [isHoveringSubmit, setIsHoveringSubmit] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    router.push("/agreement")
  }

  return (
    <div className="min-h-screen bg-[#F7FAFA]">
      <Navbar />

      <div className="container py-12">
        <div className="max-w-md mx-auto">
          <div className="bg-white p-8 rounded-xl shadow-sm border border-[#CBD5E1]">
            <h1 className="text-2xl font-bold mb-6 text-[#0F172A]">Kontaktuppgifter</h1>

            <p className="mb-6 text-[#0F172A]">
              Ange följande uppgifter för att aktivera din organisations instans av plattformen:
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="email" className="text-[#0F172A]">
                  Din e-postadress
                </Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-[#475569]" />
                  <Input
                    id="email"
                    type="email"
                    placeholder="namn@organisation.se"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="pl-10 border-[#CBD5E1] focus:border-[#16A34A] focus:ring-[#16A34A] transition-all"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="tech-email" className="text-[#0F172A]">
                  E-postadress till teknisk kontaktperson i din organisation
                </Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-[#475569]" />
                  <Input
                    id="tech-email"
                    type="email"
                    placeholder="teknisk@organisation.se"
                    value={techEmail}
                    onChange={(e) => setTechEmail(e.target.value)}
                    className="pl-10 border-[#CBD5E1] focus:border-[#16A34A] focus:ring-[#16A34A] transition-all"
                    required
                  />
                </div>
              </div>

              <Button
                type="submit"
                className={`w-full bg-[#16A34A] hover:bg-[#15803D] text-[#0F172A] font-bold transition-all hover:shadow-md flex items-center justify-center gap-2 ${
                  isHoveringSubmit ? "translate-x-1" : ""
                }`}
                onMouseEnter={() => setIsHoveringSubmit(true)}
                onMouseLeave={() => setIsHoveringSubmit(false)}
              >
                Gå vidare till signering
                <ArrowRight className={`h-5 w-5 transition-transform ${isHoveringSubmit ? "translate-x-1" : ""}`} />
              </Button>
            </form>
          </div>
        </div>
      </div>

      <footer className="container px-4 py-10 border-t border-[#CBD5E1] mt-10">
        <div className="max-w-[960px] mx-auto">
          <div className="flex flex-wrap justify-center items-center gap-6 mb-6">
            <Link
              href="#"
              className="text-[#475569] text-base text-center min-w-[160px] hover:text-[#16A34A] transition-colors"
            >
              Användarvillkor
            </Link>
            <Link
              href="#"
              className="text-[#475569] text-base text-center min-w-[160px] hover:text-[#16A34A] transition-colors"
            >
              Integritetspolicy
            </Link>
            <Link
              href="#"
              className="text-[#475569] text-base text-center min-w-[160px] hover:text-[#16A34A] transition-colors"
            >
              Kontakta oss
            </Link>
          </div>
          <div className="text-center">
            <p className="text-[#475569] text-base">©2024 AI-verkstaden. Alla rättigheter förbehållna.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
