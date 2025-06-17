"use client"

import type React from "react"

import { useState } from "react"
import Navbar from "@/components/navbar"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, Mail } from "lucide-react"

export default function AgreementPage() {
  const router = useRouter()
  const [email, setEmail] = useState("")
  const [isHoveringSubmit, setIsHoveringSubmit] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    router.push("/sign")
  }

  return (
    <div className="min-h-screen bg-[#F7FAFA]">
      <Navbar />

      <div className="container py-12">
        <div className="max-w-xl mx-auto">
          <h1 className="text-2xl font-bold mb-6 text-center text-[#0F172A]">
            Endast behöriga personer kan signera avtal
          </h1>

          <Card className="mb-8 border-[#CBD5E1] shadow-sm">
            <CardHeader>
              <CardTitle className="text-[#0F172A]">Verifiera din behörighet</CardTitle>
              <CardDescription className="text-[#475569]">
                Vänligen ange din e-postadress för att verifiera din behörighet att signera avtal för din organisation.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-[#475569]" />
                    <Input
                      type="email"
                      placeholder="namn@organisation.se"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="pl-10 border-[#CBD5E1] focus:border-[#16A34A] focus:ring-[#16A34A] transition-all"
                      required
                    />
                  </div>
                </div>

                <Button
                  type="submit"
                  className={`bg-[#16A34A] hover:bg-[#15803D] text-[#0F172A] font-bold transition-all hover:shadow-md flex items-center gap-2 ${
                    isHoveringSubmit ? "translate-x-1" : ""
                  }`}
                  onMouseEnter={() => setIsHoveringSubmit(true)}
                  onMouseLeave={() => setIsHoveringSubmit(false)}
                >
                  Verifiera
                  <ArrowRight className={`h-5 w-5 transition-transform ${isHoveringSubmit ? "translate-x-1" : ""}`} />
                </Button>
              </form>
            </CardContent>
          </Card>
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
            <p className="text-[#475569] text-base">©2024 Kommuna. Alla rättigheter förbehållna.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
