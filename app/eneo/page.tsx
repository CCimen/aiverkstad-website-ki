import Link from "next/link"
import Image from "next/image"
import Navbar from "@/components/navbar"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { NordicButton } from "@/components/ui/nordic-button"
import { ArrowRight, ExternalLink, History, Users, Code, Shield, Globe, CheckCircle } from "lucide-react"

export default function EneoPage() {
  return (
    <div className="min-h-screen bg-nordic-snow">
      <Navbar />

      <div className="container py-6 md:py-12 px-4">
        <div className="max-w-4xl mx-auto">
          {/* Hero Section with Logo */}
          <div className="text-center mb-8 md:mb-12">
            <div className="flex flex-col items-center gap-6 mb-6">
              <div className="relative w-24 h-24 md:w-32 md:h-32">
                <Image src="/images/eneo-logo.png" alt="Eneo logotyp" fill className="object-contain" />
              </div>
              <h1 className="text-3xl md:text-5xl font-black text-nordic-ink tracking-tight">Historien bakom Eneo</h1>
            </div>
            <p className="text-lg md:text-xl text-nordic-graphite max-w-3xl mx-auto leading-relaxed">
              Från hypotes till verklighet - berättelsen om hur en vision om demokratisk AI blev till Eneo-plattformen
            </p>
          </div>

          {/* Timeline Section */}
          <div className="mb-8 md:mb-12">
            <div className="relative">
              {/* Timeline line */}
              <div className="timeline-line"></div>

              {/* Timeline items */}
              <div className="space-y-8 md:space-y-12">
                {/* Spring 2023 */}
                <div className="timeline-item">
                  <div className="timeline-icon">
                    <History className="w-4 h-4 md:w-5 md:h-5 text-white" />
                  </div>
                  <Card className="border-nordic-cloud shadow-sm hover:shadow-xl hover:border-nordic-sage hover:-translate-y-1 transition-all duration-300">
                    <CardHeader>
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                        <CardTitle className="text-nordic-ink text-lg md:text-xl">Våren 2023 - Hypotesen</CardTitle>
                        <span className="text-sm text-nordic-graphite font-medium bg-nordic-frost px-3 py-1 rounded-full">
                          Sundsvalls kommun
                        </span>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-nordic-steel mb-4 leading-relaxed">
                        Allt började våren 2023 med en hypotes inom Sundsvalls kommun, en hypotes om hur generativ AI
                        skulle kunna tillgängliggöras på ett långsiktigt hållbart sätt i hela offentliga Sverige.
                      </p>
                      <NordicButton
                        variant="secondary"
                        size="sm"
                        asChild
                      >
                        <Link
                          href="https://utveckling.sundsvall.se/initiativ/exempel-fran-vardagen/2023-05-22-infrastruktur-for-ai-inom-kommuner"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Läs hypotesen <ExternalLink className="ml-2 h-3 w-3" />
                        </Link>
                      </NordicButton>
                    </CardContent>
                  </Card>
                </div>

                {/* Innovation Process */}
                <div className="timeline-item">
                  <div className="timeline-icon">
                    <Users className="w-4 h-4 md:w-5 md:h-5 text-white" />
                  </div>
                  <Card className="border-nordic-cloud shadow-sm hover:shadow-xl hover:border-nordic-sage hover:-translate-y-1 transition-all duration-300">
                    <CardHeader>
                      <CardTitle className="text-nordic-ink text-lg md:text-xl">Innovationsprocessen</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-nordic-steel mb-4 leading-relaxed">
                        Utifrån hypotesen startade vi en innovationsprocess, där vi avsåg att testa hypotesen
                        tillsammans med näringslivet. En process som möjliggjordes genom vårt tidigare ramavtal rörande
                        "Framåtlutad teknologi".
                      </p>
                      <NordicButton
                        variant="secondary"
                        size="sm"
                        asChild
                      >
                        <Link
                          href="https://utveckling.sundsvall.se/inlagg/inlagg/2020-07-15-forutsattningar-for-att-nyttja-framatlutande-teknologier"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Framåtlutad teknologi <ExternalLink className="ml-2 h-3 w-3" />
                        </Link>
                      </NordicButton>
                    </CardContent>
                  </Card>
                </div>

                {/* Intric Development */}
                <div className="timeline-item">
                  <div className="timeline-icon">
                    <Code className="w-4 h-4 md:w-5 md:h-5 text-white" />
                  </div>
                  <Card className="border-nordic-cloud shadow-sm hover:shadow-xl hover:border-nordic-sage hover:-translate-y-1 transition-all duration-300">
                    <CardHeader>
                      <CardTitle className="text-nordic-ink text-lg md:text-xl">Intric utvecklas</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-nordic-steel mb-4 leading-relaxed">
                        Inom den innovationsprocessen utvecklades plattformen Intric, ett lyckat arbete som resulterade
                        i ett beslut om att skala upp plattformen som en ordinarie del i Sundsvalls kommuns och Ånge
                        kommuns infrastruktur.
                      </p>
                      <NordicButton
                        variant="secondary"
                        size="sm"
                        asChild
                      >
                        <Link
                          href="https://utveckling.sundsvall.se/inlagg/inlagg/2023-12-06-nu-skalar-vi-upp-en-oppen-ai"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Läs beslutet <ExternalLink className="ml-2 h-3 w-3" />
                        </Link>
                      </NordicButton>
                    </CardContent>
                  </Card>
                </div>

                {/* Open Source */}
                <div className="timeline-item">
                  <div className="timeline-icon">
                    <Globe className="w-4 h-4 md:w-5 md:h-5 text-white" />
                  </div>
                  <Card className="border-nordic-cloud shadow-sm hover:shadow-xl hover:border-nordic-sage hover:-translate-y-1 transition-all duration-300">
                    <CardHeader>
                      <CardTitle className="text-nordic-ink text-lg md:text-xl">2024 - Öppen källkod</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-nordic-steel mb-4 leading-relaxed">
                        Efter detta beslut fortsatte vi att utveckla plattformen samtidigt som vi arbetade med att
                        tillgängliggöra den som öppen källkod tillsammans med våra partners i utvecklingen, då den öppna
                        källkoden för Intric publicerades i sin helhet.
                      </p>
                      <NordicButton
                        variant="secondary"
                        size="sm"
                        asChild
                      >
                        <Link
                          href="https://utveckling.sundsvall.se/inlagg/inlagg/2024-11-18-ai-plattformen-intric-slappt-som-oppen-kallkod"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Läs om öppen källkod <ExternalLink className="ml-2 h-3 w-3" />
                        </Link>
                      </NordicButton>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>

          {/* Why Eneo Section */}
          <div className="mb-8 md:mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-nordic-ink mb-6 text-center">Varför skapades Eneo?</h2>

            <Card className="border-nordic-cloud shadow-lg hover:shadow-xl hover:border-nordic-forest hover:-translate-y-1 transition-all duration-300 mb-6 bg-gradient-to-br from-nordic-frost to-nordic-cloud/30">
              <CardHeader className="pb-4">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 bg-nordic-forest rounded-lg flex items-center justify-center">
                    <Shield className="h-5 w-5 text-white" />
                  </div>
                  <CardTitle className="text-nordic-ink text-lg md:text-xl">Utmaningarna med Intric</CardTitle>
                </div>
                <CardDescription className="text-nordic-steel text-base leading-relaxed">
                  På grund av flera kritiska anledningar var vi tvungna att bryta ut från Intric och skapa Eneo:
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    "Att källkoden för Intric kontrollerades av ett enda företag",
                    "Att delar av källkoden behölls stängd och avsågs även framåt behållas stängd",
                    "Att konkurrensen begränsades genom att alla företag i näringslivet inte kunde konkurrera på samma villkor kring plattformen",
                    "Att företaget som kontrollerade källkoden bytte namn till Intric AB och därmed associerade företaget direkt till den öppna plattformen",
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-4 p-3 rounded-lg bg-white/50 border border-nordic-cloud/50 hover:bg-white/80 transition-colors">
                      <div className="w-3 h-3 bg-red-500 rounded-full mt-2 flex-shrink-0 ring-2 ring-red-200"></div>
                      <p className="text-nordic-ink text-sm md:text-base leading-relaxed font-medium">{item}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="border-nordic-sage shadow-lg hover:shadow-xl hover:border-nordic-sage-light hover:-translate-y-1 transition-all duration-300 bg-gradient-to-br from-nordic-mint to-nordic-frost relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-nordic-sage/10 rounded-bl-full -mr-16 -mt-16"></div>
              <CardHeader className="relative z-10 pb-4">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 bg-gradient-to-br from-nordic-sage to-nordic-sage-light rounded-lg flex items-center justify-center">
                    <CheckCircle className="h-5 w-5 text-white" />
                  </div>
                  <CardTitle className="text-nordic-ink text-lg md:text-xl">
                    Syftet med att skapa Eneo
                  </CardTitle>
                </div>
                <CardDescription className="text-nordic-steel text-base leading-relaxed">
                  Eneo skapades med en tydlig vision om demokratisk AI och öppen utveckling:
                </CardDescription>
              </CardHeader>
              <CardContent className="relative z-10">
                <div className="space-y-4">
                  {[
                    "Att det offentliga sitter i förarsätet kring källkoden - så att vi gemensamt i en användarförening kan säkerställa att lösningen alltid sätter det offentliga, invånarna, företagarna först. En demokratisk AI.",
                    "Att vi säkerställer att all källkod finns tillgänglig för alla",
                    "Att öka konkurrensen inom näringslivet där alla företag kan delta och bidra på lika villkor",
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-4 p-4 rounded-lg bg-white/70 border border-nordic-sage/20 hover:bg-white/90 hover:border-nordic-sage/40 transition-all duration-200 backdrop-blur-sm">
                      <div className="w-6 h-6 bg-gradient-to-br from-nordic-sage to-nordic-sage-light rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <CheckCircle className="h-4 w-4 text-white" />
                      </div>
                      <p className="text-nordic-ink text-sm md:text-base font-medium leading-relaxed">{item}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* FAQ Section */}
          <div className="mb-8 md:mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-nordic-ink mb-6 text-center">Vanliga frågor om Eneo</h2>

            <div className="grid gap-4 md:gap-6">
              <Card className="border-nordic-cloud shadow-sm hover:shadow-xl hover:border-nordic-sage hover:-translate-y-1 transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-nordic-ink text-lg">Vem eller vilka kan använda Eneo?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-nordic-steel leading-relaxed">
                    Vem som helst kan använda, utveckla eller erbjuda Eneo. Har du eller ditt företag kompetens inom det
                    teknikområde som Eneo rör så kan alla ta del av koden och bidra till utvecklingen på samma villkor.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-nordic-cloud shadow-sm hover:shadow-xl hover:border-nordic-sage hover:-translate-y-1 transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-nordic-ink text-lg">Finns det några begränsningar i användandet?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-nordic-steel mb-4 leading-relaxed">
                    De enda begränsningar som finns är kring den licensform som finns för den öppna källkoden, där vi
                    väljer att publicera allt i AGPLv3 då det är den licens som tidigare kod för Intric var utgiven i
                    eller var kompatibel med.
                  </p>
                  <p className="text-nordic-steel leading-relaxed">
                    Valet av licensform grundar sig i en vilja att alla som bidrar till utvecklingen och användningen
                    även delar med sig av sin kod till andra, så att t ex inte en aktör utvecklar en massa intressant
                    funktion som denne sedan håller för sig själv för att skapa ett försprång till andra. Demokratisk AI
                    handlar inte bara om transparens och insyn, utan även att vi kan använda och utveckla den på lika
                    villkor.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center">
            <Card className="border-nordic-sage shadow-lg bg-gradient-to-br from-nordic-snow to-nordic-mint">
              <CardHeader>
                <CardTitle className="text-nordic-ink text-xl md:text-2xl">Ta del av Eneo</CardTitle>
                <CardDescription className="text-nordic-steel text-base">
                  Utforska plattformen och bli en del av den demokratiska AI-rörelsen
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <NordicButton
                    variant="primary"
                    asChild
                  >
                    <Link href="/activate">
                      Testa plattformen
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </NordicButton>
                  <NordicButton
                    variant="secondary"
                    asChild
                  >
                    <Link href="https://github.com/sundsvallai/eneo" target="_blank" rel="noopener noreferrer">
                      Källkod <ExternalLink className="ml-2 h-4 w-4" />
                    </Link>
                  </NordicButton>
                  <NordicButton
                    variant="secondary"
                    asChild
                  >
                    <Link
                      href="https://github.com/sundsvallai/eneo/tree/main/docs"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Dokumentation <ExternalLink className="ml-2 h-4 w-4" />
                    </Link>
                  </NordicButton>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

    </div>
  )
}
