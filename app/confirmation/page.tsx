import Navbar from "@/components/navbar"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowLeft, Home, CheckCircle, Building2, Mail, Calendar } from "lucide-react"

export default function ConfirmationPage() {
  return (
    <div className="min-h-screen bg-[#F7FAFA]">
      <Navbar />

      <div className="container py-6 md:py-12 px-4">
        <div className="max-w-2xl mx-auto text-center">
          <div className="bg-white p-6 md:p-8 rounded-xl shadow-sm border border-[#CBD5E1]">
            <div className="mb-6">
              <div className="relative h-32 w-32 md:h-40 md:w-40 mx-auto mb-6">
                <div className="absolute inset-0 bg-gradient-to-br from-[#38E078] to-[#2BC965] rounded-full flex items-center justify-center">
                  <CheckCircle className="h-16 w-16 md:h-20 md:w-20 text-white" />
                </div>
                <div className="absolute -inset-2 bg-[#38E078]/20 rounded-full animate-pulse"></div>
              </div>

              <h1 className="text-xl md:text-2xl font-bold mb-4 text-[#0F172A]">Er plattform är nu aktiv!</h1>
            </div>

            <div className="bg-[#F7FAFA] p-4 md:p-6 rounded-lg border border-[#CBD5E1] mb-6 text-left">
              <h2 className="text-lg font-semibold mb-4 text-[#0F172A] flex items-center gap-2">
                <Building2 className="h-5 w-5 text-[#16A34A]" />
                Organisationsdetaljer
              </h2>

              <div className="space-y-3 text-sm md:text-base">
                <div className="flex flex-col sm:flex-row sm:items-center gap-2">
                  <span className="font-medium text-[#0F172A] min-w-[120px]">Organisation:</span>
                  <span className="text-[#475569]">Kommuna kommun</span>
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center gap-2">
                  <span className="font-medium text-[#0F172A] min-w-[120px]">Plattform:</span>
                  <span className="text-[#475569]">Eneo - Generativ AI</span>
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center gap-2">
                  <span className="font-medium text-[#0F172A] min-w-[120px]">Status:</span>
                  <span className="text-[#16A34A] font-medium">Aktiv</span>
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center gap-2">
                  <span className="font-medium text-[#0F172A] min-w-[120px]">Aktiverad:</span>
                  <span className="text-[#475569] flex items-center gap-1">
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
                    <strong>Nästa steg:</strong> Ett meddelande har skickats till era angivna e-postadresser med
                    inloggningsuppgifter och vidare instruktioner för att komma igång med plattformen.
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
              <Button
                variant="outline"
                className="border-[#CBD5E1] text-[#475569] hover:text-[#16A34A] hover:border-[#16A34A] transition-all flex items-center justify-center gap-2 w-full sm:w-auto"
                asChild
              >
                <Link href="/">
                  <ArrowLeft className="h-4 w-4" />
                  Återgå till översikt
                </Link>
              </Button>
              <Button className="bg-[#16A34A] hover:bg-[#15803D] text-[#0F172A] font-bold transition-all hover:shadow-md flex items-center justify-center gap-2 w-full sm:w-auto">
                <Home className="h-4 w-4" />
                Gå till plattformen
              </Button>
            </div>
          </div>
        </div>
      </div>

      <footer className="container px-4 py-6 md:py-10 border-t border-[#CBD5E1] mt-6 md:mt-10">
        <div className="max-w-[960px] mx-auto">
          <div className="flex flex-col sm:flex-row flex-wrap justify-center items-center gap-4 md:gap-6 mb-4 md:mb-6">
            <Link
              href="#"
              className="text-[#475569] text-sm md:text-base text-center hover:text-[#16A34A] transition-colors"
            >
              Användarvillkor
            </Link>
            <Link
              href="#"
              className="text-[#475569] text-sm md:text-base text-center hover:text-[#16A34A] transition-colors"
            >
              Integritetspolicy
            </Link>
            <Link
              href="#"
              className="text-[#475569] text-sm md:text-base text-center hover:text-[#16A34A] transition-colors"
            >
              Kontakta oss
            </Link>
          </div>
          <div className="text-center">
            <p className="text-[#475569] text-sm md:text-base">©2024 AI-verkstaden. Alla rättigheter förbehållna.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
