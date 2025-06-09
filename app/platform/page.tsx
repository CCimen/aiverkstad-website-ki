import Link from "next/link"
import Navbar from "@/components/navbar"
import { Button } from "@/components/ui/button"
import { ArrowRight, CheckCircle, Info } from "lucide-react"

export default function PlatformPage() {
  return (
    <div className="min-h-screen bg-[#F7FAFA]">
      <Navbar />

      <div className="container py-12">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold mb-6 text-[#0F172A]">Generativ AI-plattform</h1>

          <div className="prose max-w-none">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-[#CBD5E1] mb-8">
              <p className="text-lg mb-6 text-[#0F172A]">
                Aktivera plattformen Eneo för hela din organisation. Eneo är en plattform där din organisation (kommun,
                region eller statlig myndighet) kan bygga, använda och dela AI-tillämpningar inom området generativ AI.
                Genom Eneo får du tillgång till ett nationellt bibliotek av AI-tjänster inom området generativ AI som
                tagits fram i samverkan mellan fler offentliga myndigheter, eller så kan ni innovera och utveckla era
                egna lokala AI-tjänster och även dela dessa med andra offentliga organisationer!
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Button
                  variant="outline"
                  className="border-[#16A34A] text-[#16A34A] hover:bg-[#16A34A] hover:text-white transition-all flex items-center gap-2"
                  asChild
                >
                  <Link href="/eneo">
                    <Info className="h-4 w-4" />
                    Läs om historien bakom Eneo
                  </Link>
                </Button>
              </div>
            </div>

            <h2 className="text-xl font-semibold mb-4 text-[#0F172A]">Vad är den Generativa AI-Plattformen?</h2>
            <p className="mb-6 text-[#0F172A]">
              Den generativa AI-plattformen är en miljö där offentliga organisationer kan utveckla, dela och använda
              AI-lösningar. Plattformen erbjuder en säker och etisk grund för att utforska möjligheterna med generativ
              AI inom offentlig sektor.
            </p>

            <h2 className="text-xl font-semibold mb-4 text-[#0F172A]">
              Vad kan du göra med den Generativa AI-Plattformen?
            </h2>
            <p className="mb-4 text-[#0F172A]">Med vår plattform kan du bland annat:</p>
            <ul className="list-none pl-0 mb-6 space-y-2">
              {[
                "Skapa och anpassa AI-modeller för specifika behov inom din organisation",
                "Få tillgång till förtränade modeller som redan är optimerade för offentlig sektor",
                "Samarbeta med andra myndigheter för att utveckla gemensamma lösningar",
                "Dela framgångsrika implementeringar med andra organisationer",
                "Säkerställa att alla AI-lösningar följer gällande regelverk och etiska riktlinjer",
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-2 text-[#0F172A]">
                  <CheckCircle className="h-5 w-5 text-[#16A34A] mt-0.5 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <h2 className="text-xl font-semibold mb-4 text-[#0F172A]">Krav för att kunna aktivera plattformen</h2>
            <p className="mb-4 text-[#0F172A]">För att aktivera plattformen för din organisation krävs följande:</p>
            <ul className="list-none pl-0 mb-8 space-y-2">
              {[
                "Att du har en officiell e-postadress som är knuten till din offentliga organisation",
                "Att du är behörig firmatecknare för din offentliga organisation",
                "Att du har utsett en tekniskt ansvarig för plattformen i din organisation",
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-2 text-[#0F172A]">
                  <CheckCircle className="h-5 w-5 text-[#16A34A] mt-0.5 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8 flex justify-center">
              <Button
                size="lg"
                className="bg-[#16A34A] hover:bg-[#15803D] text-white font-bold px-6 py-6 h-auto rounded-xl transition-all hover:shadow-lg flex items-center gap-2"
                asChild
              >
                <Link href="/activate">
                  Aktivera plattformen
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
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
