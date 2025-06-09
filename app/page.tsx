"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { FileText, Edit3, ImageIcon, Code, MessageCircle, Bot, Mic, Globe, ArrowRight } from "lucide-react"
import Navbar from "@/components/navbar"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"

// Service card data
const aiServices = [
  {
    id: "text-generation",
    title: "Textgenerering",
    description: "Generera kreativ och engagerande textinnehåll.",
    icon: FileText,
    details:
      "Textgenerering använder avancerade språkmodeller för att skapa högkvalitativt innehåll för olika ändamål. Tjänsten kan användas för att skriva allt från rapporter och sammanfattningar till kreativa texter och innehåll för webbplatser.",
  },
  {
    id: "text-editing",
    title: "Textredigering",
    description: "Redigera och förfina befintlig text för tydlighet och effekt.",
    icon: Edit3,
    details:
      "Textredigeringstjänsten hjälper till att förbättra kvaliteten på befintliga texter genom att korrigera grammatik, förbättra läsbarhet och anpassa tonen efter målgruppen. Perfekt för att säkerställa professionell kommunikation.",
  },
  {
    id: "image-generation",
    title: "Bildgenerering",
    description: "Skapa fantastiska bilder från textbeskrivningar.",
    icon: ImageIcon,
    details:
      "Bildgenerering omvandlar textbeskrivningar till visuellt innehåll. Tjänsten kan användas för att skapa illustrationer, konceptbilder och grafiskt material för kommunikation och presentationer.",
  },
  {
    id: "code-generation",
    title: "Kodgenerering",
    description: "Generera kodavsnitt och kompletta program.",
    icon: Code,
    details:
      "Kodgenerering hjälper utvecklare att snabbt skapa kodavsnitt och programstrukturer baserat på beskrivningar. Tjänsten stödjer flera programmeringsspråk och kan användas för att påskynda utvecklingsprocessen.",
  },
  {
    id: "chatbot",
    title: "Chatbot",
    description: "Bygg konversationsgränssnitt med AI-drivna chatbots.",
    icon: MessageCircle,
    details:
      "Chatbottjänsten möjliggör skapandet av interaktiva konversationsgränssnitt för att svara på frågor, ge vägledning och automatisera kundtjänst. Kan anpassas för specifika användningsområden inom kommunal verksamhet.",
  },
  {
    id: "ai-agent",
    title: "AI-agent",
    description: "Automatisera uppgifter och arbetsflöden med intelligenta AI-agenter.",
    icon: Bot,
    details:
      "AI-agenter kan automatisera komplexa arbetsflöden och processer genom att kombinera flera AI-förmågor. De kan utföra uppgifter självständigt och interagera med andra system för att effektivisera verksamheten.",
  },
  {
    id: "speech-to-text",
    title: "Tal till text",
    description: "Konvertera talat språk till skriven text med hög precision.",
    icon: Mic,
    details:
      "Tal till text-tjänsten omvandlar ljudinspelningar till text med hög noggrannhet. Perfekt för transkribering av möten, intervjuer och andra talade källor, vilket sparar tid och förbättrar tillgängligheten.",
  },
  {
    id: "digital-translator",
    title: "Digital tolk",
    description: "Översätt innehåll mellan olika språk i realtid.",
    icon: Globe,
    details:
      "Den digitala tolktjänsten erbjuder översättning mellan flera språk i realtid. Tjänsten kan användas för att göra information tillgänglig på olika språk och underlätta kommunikation med medborgare med olika språkbakgrund.",
  },
]

export default function Home() {
  const [activeService, setActiveService] = useState(null)

  return (
    <div className="min-h-screen bg-[#F7FAFA]">
      <Navbar />

      {/* Hero Section */}
      <section className="relative">
        <div className="container px-4 py-3 md:py-5">
          <div className="max-w-[960px] mx-auto">
            <div className="relative h-[300px] md:h-[480px] rounded-xl overflow-hidden">
              <div
                className="absolute inset-0 bg-gradient-to-r from-black/10 to-black/40"
                style={{
                  backgroundImage:
                    "linear-gradient(90deg, rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.4) 100%), url('/placeholder.svg?height=480&width=928')",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
                aria-hidden="true"
              />
              <div className="absolute left-[20px] md:left-[40px] top-[60px] md:top-[182px] max-w-[calc(100%-40px)] md:max-w-[848px]">
                <div className="space-y-2">
                  <h1 className="text-white text-2xl md:text-5xl font-black leading-tight md:leading-[60px] tracking-[-1px] md:tracking-[-2px]">
                    Utforska och aktivera AI-tjänster
                  </h1>
                  <p className="text-white text-sm md:text-base leading-5 md:leading-6 max-w-full md:max-w-[848px]">
                    Välkommen till AI-verkstaden, observera att detta inte är en officiell sida eller källa utan enbart
                    en demosida som syftar till att inspirera och visa hur en framtida AI-verkstad skulle kunna fungera
                    mot kommuner, regioner och statliga myndigheter.
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-3 mt-4 md:mt-8">
                  <Button
                    className="bg-[#16A34A] hover:bg-[#15803D] text-white font-bold px-4 md:px-5 py-2 md:py-3 h-10 md:h-12 rounded-xl transition-all hover:shadow-lg text-sm md:text-base"
                    asChild
                  >
                    <Link href="/platform">Läs mer om plattformen</Link>
                  </Button>
                  <Button
                    className="bg-white hover:bg-gray-100 text-[#0F172A] font-bold px-4 md:px-5 py-2 md:py-3 h-10 md:h-12 rounded-xl transition-all hover:shadow-lg text-sm md:text-base"
                    asChild
                  >
                    <Link href="/activate">Kom igång nu</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="container px-4">
        <div className="max-w-[960px] mx-auto">
          {/* Section Title */}
          <div className="py-3 md:py-5 px-2 md:px-4">
            <h2 className="text-[#0F172A] text-lg md:text-[22px] font-bold leading-6 md:leading-7">
              Tillgängliga AI-tjänster
            </h2>
          </div>

          {/* Tabs */}
          <div className="px-2 md:px-4 pb-3">
            <div className="border-b border-[#CBD5E1]">
              <Tabs defaultValue="national" className="w-full">
                <TabsList className="bg-transparent h-auto p-0 flex flex-col sm:flex-row sm:space-x-8 space-y-2 sm:space-y-0 w-full sm:w-auto">
                  <TabsTrigger
                    value="national"
                    className="bg-transparent border-b-3 border-transparent data-[state=active]:border-[#52946B] data-[state=active]:bg-transparent rounded-none px-0 py-3 md:py-4 text-xs md:text-sm font-bold text-[#52946B] data-[state=active]:text-[#52946B] data-[state=inactive]:text-[#0D1A12] transition-all hover:text-[#38E078] w-full sm:w-auto text-center"
                  >
                    Nationella delade AI-tjänster
                  </TabsTrigger>
                  <TabsTrigger
                    value="platforms"
                    className="bg-transparent border-b-3 border-transparent data-[state=active]:border-[#52946B] data-[state=active]:bg-transparent rounded-none px-0 py-3 md:py-4 text-xs md:text-sm font-bold text-[#0D1A12] data-[state=active]:text-[#52946B] transition-all hover:text-[#38E078] w-full sm:w-auto text-center"
                  >
                    Nationella delade AI-plattformar
                  </TabsTrigger>
                </TabsList>

                <TabsContent value="national" className="mt-0">
                  <div className="py-3 md:py-5 px-2 md:px-4">
                    <h3 className="text-[#0F172A] text-lg md:text-[22px] font-bold leading-6 md:leading-7 mb-3 md:mb-5">
                      Nationella delade AI-tjänster
                    </h3>

                    {/* Service Cards Grid */}
                    <div className="space-y-3">
                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                        {aiServices.map((service) => (
                          <Dialog key={service.id}>
                            <DialogTrigger asChild>
                              <Card className="bg-[#F7FAFA] border-[#CBD5E1] rounded-lg p-3 md:p-4 cursor-pointer transition-all hover:shadow-md hover:border-[#16A34A] hover:scale-[1.02] group">
                                <CardHeader className="p-0 pb-2 md:pb-3">
                                  <service.icon className="h-5 w-5 md:h-6 md:w-6 text-[#0F172A] group-hover:text-[#16A34A] transition-colors" />
                                </CardHeader>
                                <CardContent className="p-0 space-y-1">
                                  <CardTitle className="text-[#0F172A] text-sm md:text-base font-bold leading-4 md:leading-5 group-hover:text-[#16A34A] transition-colors">
                                    {service.title}
                                  </CardTitle>
                                  <CardDescription className="text-[#475569] text-xs md:text-sm leading-4 md:leading-[21px]">
                                    {service.description}
                                  </CardDescription>
                                </CardContent>
                              </Card>
                            </DialogTrigger>
                            <DialogContent className="sm:max-w-[500px] mx-4">
                              <DialogHeader>
                                <DialogTitle className="flex items-center gap-2 text-lg md:text-xl">
                                  <service.icon className="h-5 w-5 md:h-6 md:w-6 text-[#16A34A]" />
                                  {service.title}
                                </DialogTitle>
                              </DialogHeader>
                              <div className="py-4">
                                <div className="relative w-full h-[150px] md:h-[200px] mb-4 rounded-md overflow-hidden">
                                  <Image
                                    src="/placeholder.svg?height=200&width=450"
                                    alt={`Illustration av ${service.title}`}
                                    fill
                                    className="object-cover"
                                  />
                                </div>
                                <p className="text-[#0F172A] mb-4 text-sm md:text-base">{service.details}</p>
                                <div className="flex justify-end">
                                  <Button className="bg-[#16A34A] hover:bg-[#15803D] text-white font-bold transition-all hover:shadow-md text-sm md:text-base">
                                    Läs mer <ArrowRight className="ml-2 h-4 w-4" />
                                  </Button>
                                </div>
                              </div>
                            </DialogContent>
                          </Dialog>
                        ))}
                      </div>
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="platforms" className="mt-0">
                  <div className="py-3 md:py-5 px-2 md:px-4">
                    <h3 className="text-[#0F172A] text-lg md:text-[22px] font-bold leading-6 md:leading-7 mb-3 md:mb-5">
                      Nationella delade AI-plattformar
                    </h3>

                    <Card className="bg-[#F7FAFA] border-[#CBD5E1] rounded-lg p-4 md:p-6 transition-all hover:shadow-md hover:border-[#16A34A]">
                      <CardHeader className="p-0 pb-3 md:pb-4">
                        <CardTitle className="text-[#0F172A] text-lg md:text-xl font-bold">
                          Eneo – En öppen plattform för generativ AI
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="p-0">
                        <CardDescription className="text-[#475569] text-sm md:text-base leading-5 md:leading-6 mb-4 md:mb-6">
                          Eneo är en plattform för organisationer att bygga, använda och dela AI-tillämpningar inom
                          generativ AI. Den erbjuder tillgång till ett nationellt bibliotek av AI-tjänster och
                          möjligheten att utveckla och dela egna AI-tjänster med andra offentliga myndigheter.
                        </CardDescription>
                        <div className="flex flex-col sm:flex-row gap-3">
                          <Button
                            className="bg-[#16A34A] hover:bg-[#15803D] text-white font-bold transition-all hover:shadow-md flex items-center gap-2 text-sm md:text-base"
                            asChild
                          >
                            <Link href="/platform">
                              Läs mer om plattformen
                              <ArrowRight className="h-4 w-4" />
                            </Link>
                          </Button>
                          <Button
                            variant="outline"
                            className="border-[#16A34A] text-[#16A34A] hover:bg-[#16A34A] hover:text-white transition-all flex items-center gap-2 text-sm md:text-base"
                            asChild
                          >
                            <Link href="/eneo">
                              Om Eneo
                              <ArrowRight className="h-4 w-4" />
                            </Link>
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="container px-4 py-6 md:py-10">
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
