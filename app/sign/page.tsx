"use client"

import type React from "react"

import { useState, useEffect, Suspense } from "react"
import Navbar from "@/components/navbar"
import { NordicButton } from "@/components/ui/nordic-button"
import { Checkbox } from "@/components/ui/checkbox"
import Link from "next/link"
import { useRouter, useSearchParams } from "next/navigation"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, FileText, Shield, Eye, CheckCircle } from "lucide-react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { ScrollArea } from "@/components/ui/scroll-area"
import { ActivationTimeline } from "@/components/ui/activation-timeline"

const GeneralAgreement = () => (
  <div className="space-y-4 text-sm leading-relaxed">
    <h3 className="text-lg font-semibold text-nordic-ink">Generellt avtal för Eneo-plattformen</h3>

    <section>
      <h4 className="font-semibold text-nordic-ink mb-2">1. Allmänna bestämmelser</h4>
      <p className="text-nordic-steel mb-3">
        Detta avtal reglerar din organisations användning av Eneo-plattformen för generativ AI. Genom att acceptera detta avtal 
        förbinder sig organisationen att använda plattformen i enlighet med gällande lagar och förordningar samt de riktlinjer 
        som fastställts av AI-verkstaden.
      </p>
      <p className="text-nordic-steel mb-3">
        Plattformen tillhandahålls för att stödja offentliga organisationer i deras digitala transformation genom säker 
        och transparent användning av AI-teknologi inom ramen för offentlig sektor.
      </p>
    </section>

    <section>
      <h4 className="font-semibold text-nordic-ink mb-2">2. Plattformens syfte och omfattning</h4>
      <p className="text-nordic-steel mb-3">
        Eneo-plattformen syftar till att erbjuda en säker, skalbar och etisk miljö för utveckling och användning av 
        generativ AI inom offentlig sektor. Plattformen möjliggör samverkan mellan organisationer och främjar 
        innovation inom AI-området.
      </p>
      <ul className="list-disc pl-6 text-nordic-steel space-y-1 mb-3">
        <li>Tillhandahålla nationella delade AI-tjänster för offentliga organisationer</li>
        <li>Erbjuda verktyg för utveckling av organisationsspecifika AI-lösningar</li>
        <li>Säkerställa efterlevnad av gällande regelverk och etiska riktlinjer</li>
        <li>Främja kunskapsdelning och samverkan mellan offentliga aktörer</li>
      </ul>
    </section>

    <section>
      <h4 className="font-semibold text-nordic-ink mb-2">3. Användarens rättigheter och skyldigheter</h4>
      <p className="text-nordic-steel mb-3">
        At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque
        corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.
      </p>
      <ul className="list-disc pl-6 text-nordic-steel space-y-1 mb-3">
        <li>Similique sunt in culpa qui officia deserunt mollitia animi</li>
        <li>Id est laborum et dolorum fuga et harum quidem rerum facilis</li>
        <li>Est et expedita distinctio nam libero tempore cum soluta nobis</li>
        <li>Est eligendi optio cumque nihil impedit quo minus id quod maxime</li>
      </ul>
    </section>

    <section>
      <h4 className="font-semibold text-nordic-ink mb-2">4. Leverantörens ansvar</h4>
      <p className="text-nordic-steel mb-3">
        Placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et
        aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non
        recusandae.
      </p>
      <p className="text-nordic-steel mb-3">
        Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut
        perferendis doloribus asperiores repellat. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </p>
    </section>

    <section>
      <h4 className="font-semibold text-nordic-ink mb-2">5. Support och underhåll</h4>
      <p className="text-nordic-steel mb-3">
        Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
        exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
        voluptate velit esse cillum dolore eu fugiat nulla pariatur.
      </p>
      <p className="text-nordic-steel mb-3">
        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem
        aperiam.
      </p>
    </section>

    <section>
      <h4 className="font-semibold text-nordic-ink mb-2">6. Avgifter och betalning</h4>
      <p className="text-nordic-steel mb-3">
        Eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim
        ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui
        ratione voluptatem sequi nesciunt.
      </p>
    </section>

    <section>
      <h4 className="font-semibold text-nordic-ink mb-2">7. Avtalets giltighet</h4>
      <p className="text-nordic-steel mb-3">
        Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non
        numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima
        veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam.
      </p>
      <p className="text-nordic-steel mb-3">
        Nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse
        quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur.
      </p>
    </section>

    <section>
      <h4 className="font-semibold text-nordic-ink mb-2">8. Ytterligare villkor</h4>
      <p className="text-nordic-steel mb-3">
        At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque
        corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in
        culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.
      </p>
      <p className="text-nordic-steel mb-3">
        Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi
        optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis
        dolor repellendus.
      </p>
    </section>
  </div>
)

const DataProcessingAgreement = () => (
  <div className="space-y-4 text-sm leading-relaxed">
    <h3 className="text-lg font-semibold text-nordic-ink">Personuppgiftsbiträdesavtal (PUB)</h3>

    <section>
      <h4 className="font-semibold text-nordic-ink mb-2">1. Bakgrund och syfte</h4>
      <p className="text-nordic-steel mb-3">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        consequat.
      </p>
      <p className="text-nordic-steel mb-3">
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
        sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </p>
    </section>

    <section>
      <h4 className="font-semibold text-nordic-ink mb-2">2. Roller och ansvar</h4>
      <p className="text-nordic-steel mb-3">
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem
        aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
      </p>
      <p className="text-nordic-steel mb-3">
        Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
        eos qui ratione voluptatem sequi nesciunt.
      </p>
    </section>

    <section>
      <h4 className="font-semibold text-nordic-ink mb-2">3. Kategorier av personuppgifter</h4>
      <p className="text-nordic-steel mb-3">Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet:</p>
      <ul className="list-disc pl-6 text-nordic-steel space-y-1 mb-3">
        <li>Consectetur, adipisci velit, sed quia non numquam eius modi tempora</li>
        <li>Incidunt ut labore et dolore magnam aliquam quaerat voluptatem</li>
        <li>Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis</li>
        <li>Suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur</li>
      </ul>
    </section>

    <section>
      <h4 className="font-semibold text-nordic-ink mb-2">4. Ändamål med behandlingen</h4>
      <p className="text-nordic-steel mb-3">
        Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum
        qui dolorem eum fugiat quo voluptas nulla pariatur. At vero eos et accusamus et iusto odio dignissimos ducimus.
      </p>
      <p className="text-nordic-steel mb-3">
        Qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint
        occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi.
      </p>
    </section>

    <section>
      <h4 className="font-semibold text-nordic-ink mb-2">5. Säkerhetsåtgärder</h4>
      <p className="text-nordic-steel mb-3">
        Id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore,
        cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus.
      </p>
      <p className="text-nordic-steel mb-3">
        Omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut
        rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae.
      </p>
    </section>

    <section>
      <h4 className="font-semibold text-nordic-ink mb-2">6. Dataöverföring</h4>
      <p className="text-nordic-steel mb-3">
        Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut
        perferendis doloribus asperiores repellat. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </p>
    </section>

    <section>
      <h4 className="font-semibold text-nordic-ink mb-2">7. Registrerades rättigheter</h4>
      <p className="text-nordic-steel mb-3">
        Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
        exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
        voluptate.
      </p>
      <p className="text-nordic-steel mb-3">
        Velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa
        qui officia deserunt mollit anim id est laborum.
      </p>
    </section>

    <section>
      <h4 className="font-semibold text-nordic-ink mb-2">8. Incidenthantering</h4>
      <p className="text-nordic-steel mb-3">
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem
        aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
      </p>
      <p className="text-nordic-steel mb-3">
        Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
        eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet.
      </p>
    </section>

    <section>
      <h4 className="font-semibold text-nordic-ink mb-2">9. Avslutande bestämmelser</h4>
      <p className="text-nordic-steel mb-3">
        Consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam
        quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam.
      </p>
      <p className="text-nordic-steel mb-3">
        Nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse
        quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur.
      </p>
    </section>
  </div>
)

function SignPageContent() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const [agreed, setAgreed] = useState(false)
  const [hasReadGeneral, setHasReadGeneral] = useState(false)
  const [hasReadDataProcessing, setHasReadDataProcessing] = useState(false)
  const [formData, setFormData] = useState<{
    email: string
    techEmail: string
    orgName: string
  } | null>(null)

  useEffect(() => {
    // Load form data from localStorage or URL params
    try {
      const stored = localStorage.getItem('activationData')
      if (stored) {
        setFormData(JSON.parse(stored))
      } else {
        // Fallback to URL params
        const email = searchParams.get('email')
        const techEmail = searchParams.get('techEmail')
        const orgName = searchParams.get('orgName')
        if (email && techEmail && orgName) {
          setFormData({ email, techEmail, orgName })
        }
      }
    } catch (error) {
      console.error('Error loading form data:', error)
      // Redirect back to start if no data available
      router.push('/activate')
    }
  }, [searchParams, router])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!formData) {
      alert('Form data is missing. Please start over.')
      router.push('/activate')
      return
    }

    try {
      const response = await fetch("/api/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: formData.email,
          techEmail: formData.techEmail,
          orgName: formData.orgName
        })
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || "Något gick fel")
      }

      // Pass credentials via URL params to confirmation page
      const params = new URLSearchParams({
        email: data.email,
        orgName: data.orgName,
        isNewTenant: String(data.isNewTenant)
      })

      router.push(`/confirmation?${params.toString()}`)
    } catch (error: any) {
      alert(error.message || "Ett fel uppstod. Försök igen.")
    }
  }

  const handleScroll = (event: React.UIEvent<HTMLDivElement>, setHasRead: (read: boolean) => void) => {
    const { scrollTop, scrollHeight, clientHeight } = event.currentTarget
    const progress = scrollTop / (scrollHeight - clientHeight)

    if (progress > 0.8) {
      setHasRead(true)
    }
  }

  return (
    <div className="min-h-screen bg-nordic-snow">
      <Navbar />

      <div className="container py-6 md:py-12 px-4">
        <ActivationTimeline currentStep={2} />
        
        <div className="max-w-2xl mx-auto">
          <h1 className="text-xl md:text-2xl font-bold mb-4 md:mb-6 text-nordic-ink">Godkänn och signera avtal</h1>

          <p className="mb-6 text-nordic-ink text-sm md:text-base">
            För att använda plattformen behöver din organisation signera följande:
          </p>

          <div className="space-y-4 md:space-y-6 mb-6 md:mb-8">
            {/* General Agreement Card */}
            <Card className="border-nordic-cloud shadow-sm transition-all hover:shadow-md hover:border-nordic-sage">
              <CardHeader className="flex flex-row items-start space-y-0 gap-3 pb-3">
                <FileText className="h-6 w-6 text-nordic-sage mt-1 flex-shrink-0" />
                <div className="flex-1 min-w-0">
                  <CardTitle className="text-nordic-ink text-base md:text-lg">Generellt avtal</CardTitle>
                  <CardDescription className="text-nordic-steel text-sm">
                    Avtal som reglerar er användning av plattformen och tjänsten
                  </CardDescription>
                </div>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="flex items-center justify-between">
                  <Dialog>
                    <DialogTrigger asChild>
                      <NordicButton
                        variant="outline"
                        size="sm"
                        className="flex items-center gap-2"
                      >
                        <Eye className="h-4 w-4" />
                        Läs avtalet
                      </NordicButton>
                    </DialogTrigger>
                    <DialogContent className="max-w-2xl max-h-[80vh] p-0">
                      <DialogHeader className="p-6 pb-0">
                        <DialogTitle className="flex items-center gap-2 text-xl">
                          <FileText className="h-6 w-6 text-nordic-sage" />
                          Generellt avtal
                        </DialogTitle>
                      </DialogHeader>
                      <div className="px-6">
                        <p className="text-sm text-nordic-steel mb-4">Scrolla ner för att läsa hela dokumentet.</p>
                      </div>
                      <ScrollArea
                        className="h-[400px] px-6 pb-6"
                        onScrollCapture={(e) => handleScroll(e, setHasReadGeneral)}
                      >
                        <GeneralAgreement />
                      </ScrollArea>
                    </DialogContent>
                  </Dialog>
                  {hasReadGeneral && (
                    <div className="flex items-center gap-2 text-nordic-sage">
                      <CheckCircle className="h-4 w-4" />
                      <span className="text-xs font-medium">Läst</span>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>

            {/* Data Processing Agreement Card */}
            <Card className="border-nordic-cloud shadow-sm transition-all hover:shadow-md hover:border-nordic-sage">
              <CardHeader className="flex flex-row items-start space-y-0 gap-3 pb-3">
                <Shield className="h-6 w-6 text-nordic-sage mt-1 flex-shrink-0" />
                <div className="flex-1 min-w-0">
                  <CardTitle className="text-nordic-ink text-base md:text-lg">Personuppgiftsbiträdesavtal</CardTitle>
                  <CardDescription className="text-nordic-steel text-sm">
                    Avtal som reglerar hantering av personuppgifter
                  </CardDescription>
                </div>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="flex items-center justify-between">
                  <Dialog>
                    <DialogTrigger asChild>
                      <NordicButton
                        variant="outline"
                        size="sm"
                        className="flex items-center gap-2"
                      >
                        <Eye className="h-4 w-4" />
                        Läs avtalet
                      </NordicButton>
                    </DialogTrigger>
                    <DialogContent className="max-w-2xl max-h-[80vh] p-0">
                      <DialogHeader className="p-6 pb-0">
                        <DialogTitle className="flex items-center gap-2 text-xl">
                          <Shield className="h-6 w-6 text-nordic-sage" />
                          Personuppgiftsbiträdesavtal
                        </DialogTitle>
                      </DialogHeader>
                      <div className="px-6">
                        <p className="text-sm text-nordic-steel mb-4">Scrolla ner för att läsa hela dokumentet.</p>
                      </div>
                      <ScrollArea
                        className="h-[400px] px-6 pb-6"
                        onScrollCapture={(e) => handleScroll(e, setHasReadDataProcessing)}
                      >
                        <DataProcessingAgreement />
                      </ScrollArea>
                    </DialogContent>
                  </Dialog>
                  {hasReadDataProcessing && (
                    <div className="flex items-center gap-2 text-nordic-sage">
                      <CheckCircle className="h-4 w-4" />
                      <span className="text-xs font-medium">Läst</span>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="bg-white p-4 rounded-lg border border-nordic-cloud shadow-sm">
              <div className="flex items-start space-x-3">
                <Checkbox
                  id="agreement"
                  checked={agreed}
                  onCheckedChange={(checked) => setAgreed(checked as boolean)}
                  className="border-nordic-steel data-[state=checked]:bg-nordic-sage data-[state=checked]:border-nordic-sage mt-1"
                />
                <div className="flex-1">
                  <label
                    htmlFor="agreement"
                    className="text-sm font-medium leading-relaxed cursor-pointer text-nordic-ink"
                  >
                    Vi godkänner avtalen och bekräftar att vi har läst och förstått villkoren
                  </label>
                </div>
              </div>
            </div>

            {!agreed && (
              <div className="mb-4 p-3 bg-amber-50 border border-amber-200 rounded-lg">
                <p className="text-sm text-amber-800">
                  <strong>För att fortsätta måste du:</strong>
                </p>
                <ul className="text-xs text-amber-700 mt-1 space-y-1">
                  <li>• Kryssa i att ni godkänner avtalen</li>
                </ul>
              </div>
            )}

            <div className="flex justify-center">
              <NordicButton
                type="submit"
                variant="primary"
                className="w-full sm:w-auto"
                disabled={!agreed}
              >
                Signera och aktivera plattform
                <ArrowRight className="ml-2 h-5 w-5" />
              </NordicButton>
            </div>
          </form>
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

export default function SignPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-nordic-snow">
        <Navbar />
        <div className="container py-6 md:py-12 px-4">
          <ActivationTimeline currentStep={2} />
          <div className="max-w-2xl mx-auto text-center">
            <div className="bg-nordic-frost p-6 md:p-8 rounded-xl shadow-sm border border-nordic-cloud">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-nordic-sage mx-auto mb-4"></div>
              <p className="text-nordic-steel">Laddar...</p>
            </div>
          </div>
        </div>
      </div>
    }>
      <SignPageContent />
    </Suspense>
  )
}
