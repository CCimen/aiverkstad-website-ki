"use client"

import Link from "next/link"
import Image from "next/image"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { FileText, Edit3, ImageIcon, Code, MessageCircle, Bot, Mic, Globe, ArrowRight } from "lucide-react"
import Navbar from "@/components/navbar"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { NordicButton } from "@/components/ui/nordic-button"

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

  return (
    <div className="min-h-screen bg-nordic-snow">
      <Navbar />

      {/* Hero Section - Nordic Design */}
      <section className="relative min-h-[90vh] flex items-center" suppressHydrationWarning>
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat md:bg-fixed"
          style={{
            backgroundImage: "url('/bakgrund.png')"
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-black/40 to-black/20" />
        
        <div className="container relative z-10 px-4 text-center">
          <h1 className="text-hero text-white mb-6 drop-shadow-lg">
            AI för hela offentliga sektorn
          </h1>
          <p className="text-h3 text-white/90 mb-8 max-w-2xl mx-auto drop-shadow-md">
            Demokratisk AI som sätter säkerhet och transparens först
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <NordicButton variant="primary" className="shadow-lg hover:shadow-xl transition-all" asChild>
              <Link href="/eneo">Kom igång med Eneo</Link>
            </NordicButton>
            <NordicButton variant="outline" className="bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20 hover:text-white shadow-lg hover:shadow-xl transition-all" asChild>
              <Link href="/platform">Läs mer om plattformen</Link>
            </NordicButton>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="container px-4">
        <div className="max-w-[960px] mx-auto">

          {/* Tabs */}
          <div className="px-2 md:px-4 pb-3">
            <div className="border-b border-nordic-cloud">
              <Tabs defaultValue="national" className="w-full">
                <TabsList className="bg-transparent h-auto p-0 flex flex-col sm:flex-row sm:space-x-8 space-y-2 sm:space-y-0 w-full sm:w-auto">
                  <TabsTrigger
                    value="national"
                    className="bg-transparent border-b-3 border-transparent data-[state=active]:border-nordic-sage data-[state=active]:bg-transparent rounded-none px-0 py-3 md:py-4 text-xs md:text-sm font-bold text-nordic-sage data-[state=active]:text-nordic-sage data-[state=inactive]:text-nordic-ink transition-all hover:text-nordic-sage-light w-full sm:w-auto text-center"
                  >
                    Nationella delade AI-tjänster
                  </TabsTrigger>
                  <TabsTrigger
                    value="platforms"
                    className="bg-transparent border-b-3 border-transparent data-[state=active]:border-nordic-sage data-[state=active]:bg-transparent rounded-none px-0 py-3 md:py-4 text-xs md:text-sm font-bold text-nordic-ink data-[state=active]:text-nordic-sage transition-all hover:text-nordic-sage-light w-full sm:w-auto text-center"
                  >
                    Nationella delade AI-plattformar
                  </TabsTrigger>
                </TabsList>

                <TabsContent value="national" className="mt-0">
                  <div className="py-3 md:py-5 px-2 md:px-4">
                    <h3 className="text-h2 text-nordic-ink mb-3 md:mb-5">
                      Nationella delade AI-tjänster
                    </h3>

                    {/* Service Cards Grid */}
                    <div className="space-y-3">
                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                        {aiServices.map((service) => (
                          <Dialog key={service.id}>
                            <DialogTrigger asChild>
                              <Card className="bg-nordic-frost border-nordic-cloud rounded-lg p-3 md:p-4 cursor-pointer transition-all hover:shadow-xl hover:border-nordic-sage hover:-translate-y-1 group">
                                <CardHeader className="p-0 pb-2 md:pb-3">
                                  <service.icon className="h-5 w-5 md:h-6 md:w-6 text-nordic-ink group-hover:text-nordic-forest transition-all duration-300 group-hover:scale-110" />
                                </CardHeader>
                                <CardContent className="p-0 space-y-1">
                                  <CardTitle className="text-nordic-ink text-sm md:text-base font-bold leading-4 md:leading-5 group-hover:text-nordic-forest transition-colors">
                                    {service.title}
                                  </CardTitle>
                                  <CardDescription className="text-nordic-steel text-xs md:text-sm leading-4 md:leading-[21px]">
                                    {service.description}
                                  </CardDescription>
                                </CardContent>
                              </Card>
                            </DialogTrigger>
                            <DialogContent className="sm:max-w-[500px] mx-4">
                              <DialogHeader>
                                <DialogTitle className="flex items-center gap-2 text-lg md:text-xl">
                                  <service.icon className="h-5 w-5 md:h-6 md:w-6 text-nordic-forest" />
                                  {service.title}
                                </DialogTitle>
                              </DialogHeader>
                              <div className="py-4">
                                <div className="relative w-full h-[150px] md:h-[200px] mb-4 rounded-md overflow-hidden">
                                  <Image
                                    src="/placeholder.svg"
                                    alt={`Illustration av ${service.title}`}
                                    fill
                                    className="object-cover"
                                  />
                                </div>
                                <p className="text-nordic-ink mb-4 text-sm md:text-base">{service.details}</p>
                                <div className="flex justify-end">
                                  <NordicButton variant="primary">
                                    Läs mer <ArrowRight className="ml-2 h-4 w-4" />
                                  </NordicButton>
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
                    <h3 className="text-h2 text-nordic-ink mb-3 md:mb-5">
                      Nationella delade AI-plattformar
                    </h3>

                    <Card className="bg-nordic-frost border-nordic-cloud rounded-lg p-4 md:p-6 transition-all hover:shadow-xl hover:border-nordic-sage hover:-translate-y-1">
                      <CardHeader className="p-0 pb-3 md:pb-4">
                        <CardTitle className="text-h3 text-nordic-ink">
                          Eneo – En öppen plattform för generativ AI
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="p-0">
                        <CardDescription className="text-nordic-steel text-sm md:text-base leading-5 md:leading-6 mb-4 md:mb-6">
                          Eneo är en plattform för organisationer att bygga, använda och dela AI-tillämpningar inom
                          generativ AI. Den erbjuder tillgång till ett nationellt bibliotek av AI-tjänster och
                          möjligheten att utveckla och dela egna AI-tjänster med andra offentliga myndigheter.
                        </CardDescription>
                        <div className="flex flex-col sm:flex-row gap-3">
                          <NordicButton
                            variant="primary"
                            asChild
                          >
                            <Link href="/platform">
                              Läs mer om plattformen
                              <ArrowRight className="h-4 w-4" />
                            </Link>
                          </NordicButton>
                          <NordicButton
                            variant="secondary"
                            asChild
                          >
                            <Link href="/eneo">
                              Om Eneo
                              <ArrowRight className="h-4 w-4" />
                            </Link>
                          </NordicButton>
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

    </div>
  )
}
