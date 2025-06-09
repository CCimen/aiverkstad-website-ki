import Link from "next/link"
import Image from "next/image"
import Navbar from "@/components/navbar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, ExternalLink, History, Users, Code, Shield, Globe, CheckCircle } from "lucide-react"

export default function EneoPage() {
  return (
    <div className="min-h-screen bg-[#F7FAFA]">
      <Navbar />

      <div className="container py-6 md:py-12 px-4">
        <div className="max-w-4xl mx-auto">
          {/* Hero Section with Logo */}
          <div className="text-center mb-8 md:mb-12">
            <div className="flex flex-col items-center gap-6 mb-6">
              <div className="relative w-24 h-24 md:w-32 md:h-32">
                <Image src="/images/eneo-logo.png" alt="Eneo logotyp" fill className="object-contain" />
              </div>
              <h1 className="text-3xl md:text-5xl font-black text-[#0F172A] tracking-tight">Historien bakom Eneo</h1>
            </div>
            <p className="text-lg md:text-xl text-[#334155] max-w-3xl mx-auto leading-relaxed">
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
                  <Card className="border-[#CBD5E1] shadow-sm hover:shadow-md transition-shadow">
                    <CardHeader>
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                        <CardTitle className="text-[#0F172A] text-lg md:text-xl">Våren 2023 - Hypotesen</CardTitle>
                        <span className="text-sm text-[#334155] font-medium bg-[#F1F5F9] px-3 py-1 rounded-full">
                          Sundsvalls kommun
                        </span>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-[#475569] mb-4 leading-relaxed">
                        Allt började våren 2023 med en hypotes inom Sundsvalls kommun, en hypotes om hur generativ AI
                        skulle kunna tillgängliggöras på ett långsiktigt hållbart sätt i hela offentliga Sverige.
                      </p>
                      <Button
                        variant="outline"
                        size="sm"
                        className="border-[#16A34A] text-[#16A34A] hover:bg-[#16A34A] hover:text-white transition-all"
                        asChild
                      >
                        <Link
                          href="https://utveckling.sundsvall.se/initiativ/exempel-fran-vardagen/2023-05-22-infrastruktur-for-ai-inom-kommuner"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Läs hypotesen <ExternalLink className="ml-2 h-3 w-3" />
                        </Link>
                      </Button>
                    </CardContent>
                  </Card>
                </div>

                {/* Innovation Process */}
                <div className="timeline-item">
                  <div className="timeline-icon">
                    <Users className="w-4 h-4 md:w-5 md:h-5 text-white" />
                  </div>
                  <Card className="border-[#CBD5E1] shadow-sm hover:shadow-md transition-shadow">
                    <CardHeader>
                      <CardTitle className="text-[#0F172A] text-lg md:text-xl">Innovationsprocessen</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-[#475569] mb-4 leading-relaxed">
                        Utifrån hypotesen startade vi en innovationsprocess, där vi avsåg att testa hypotesen
                        tillsammans med näringslivet. En process som möjliggjordes genom vårt tidigare ramavtal rörande
                        "Framåtlutad teknologi".
                      </p>
                      <Button
                        variant="outline"
                        size="sm"
                        className="border-[#16A34A] text-[#16A34A] hover:bg-[#16A34A] hover:text-white transition-all"
                        asChild
                      >
                        <Link
                          href="https://utveckling.sundsvall.se/inlagg/inlagg/2020-07-15-forutsattningar-for-att-nyttja-framatlutande-teknologier"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Framåtlutad teknologi <ExternalLink className="ml-2 h-3 w-3" />
                        </Link>
                      </Button>
                    </CardContent>
                  </Card>
                </div>

                {/* Intric Development */}
                <div className="timeline-item">
                  <div className="timeline-icon">
                    <Code className="w-4 h-4 md:w-5 md:h-5 text-white" />
                  </div>
                  <Card className="border-[#CBD5E1] shadow-sm hover:shadow-md transition-shadow">
                    <CardHeader>
                      <CardTitle className="text-[#0F172A] text-lg md:text-xl">Intric utvecklas</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-[#475569] mb-4 leading-relaxed">
                        Inom den innovationsprocessen utvecklades plattformen Intric, ett lyckat arbete som resulterade
                        i ett beslut om att skala upp plattformen som en ordinarie del i Sundsvalls kommuns och Ånge
                        kommuns infrastruktur.
                      </p>
                      <Button
                        variant="outline"
                        size="sm"
                        className="border-[#16A34A] text-[#16A34A] hover:bg-[#16A34A] hover:text-white transition-all"
                        asChild
                      >
                        <Link
                          href="https://utveckling.sundsvall.se/inlagg/inlagg/2023-12-06-nu-skalar-vi-upp-en-oppen-ai"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Läs beslutet <ExternalLink className="ml-2 h-3 w-3" />
                        </Link>
                      </Button>
                    </CardContent>
                  </Card>
                </div>

                {/* Open Source */}
                <div className="timeline-item">
                  <div className="timeline-icon">
                    <Globe className="w-4 h-4 md:w-5 md:h-5 text-white" />
                  </div>
                  <Card className="border-[#CBD5E1] shadow-sm hover:shadow-md transition-shadow">
                    <CardHeader>
                      <CardTitle className="text-[#0F172A] text-lg md:text-xl">2024 - Öppen källkod</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-[#475569] mb-4 leading-relaxed">
                        Efter detta beslut fortsatte vi att utveckla plattformen samtidigt som vi arbetade med att
                        tillgängliggöra den som öppen källkod tillsammans med våra partners i utvecklingen, då den öppna
                        källkoden för Intric publicerades i sin helhet.
                      </p>
                      <Button
                        variant="outline"
                        size="sm"
                        className="border-[#16A34A] text-[#16A34A] hover:bg-[#16A34A] hover:text-white transition-all"
                        asChild
                      >
                        <Link
                          href="https://utveckling.sundsvall.se/inlagg/inlagg/2024-11-18-ai-plattformen-intric-slappt-som-oppen-kallkod"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Läs om öppen källkod <ExternalLink className="ml-2 h-3 w-3" />
                        </Link>
                      </Button>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>

          {/* Why Eneo Section */}
          <div className="mb-8 md:mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-[#0F172A] mb-6 text-center">Varför skapades Eneo?</h2>

            <Card className="border-[#CBD5E1] shadow-sm mb-6">
              <CardHeader>
                <CardTitle className="text-[#0F172A] text-lg md:text-xl">Utmaningarna med Intric</CardTitle>
                <CardDescription className="text-[#475569]">
                  På grund av flera anledningar var vi tvungna att bryta ut från Intric och skapa Eneo:
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {[
                    "Att källkoden för Intric kontrollerades av ett enda företag",
                    "Att delar av källkoden behölls stängd och avsågs även framåt behållas stängd",
                    "Att konkurrensen begränsades genom att alla företag i näringslivet inte kunde konkurrera på samma villkor kring plattformen",
                    "Att företaget som kontrollerade källkoden bytte namn till Intric AB och därmed associerade företaget direkt till den öppna plattformen",
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-[#DC2626] rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-[#475569] text-sm md:text-base leading-relaxed">{item}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="border-[#16A34A] shadow-sm bg-gradient-to-br from-green-50 to-white">
              <CardHeader>
                <CardTitle className="text-[#0F172A] text-lg md:text-xl flex items-center gap-2">
                  <Shield className="h-5 w-5 text-[#16A34A]" />
                  Syftet med att skapa Eneo
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    "Att det offentliga sitter i förarsätet kring källkoden - så att vi gemensamt i en användarförening kan säkerställa att lösningen alltid sätter det offentliga, invånarna, företagarna först. En demokratisk AI.",
                    "Att vi säkerställer att all källkod finns tillgänglig för alla",
                    "Att öka konkurrensen inom näringslivet där alla företag kan delta och bidra på lika villkor",
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-[#16A34A] mt-0.5 flex-shrink-0" />
                      <p className="text-[#0F172A] text-sm md:text-base font-medium leading-relaxed">{item}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* FAQ Section */}
          <div className="mb-8 md:mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-[#0F172A] mb-6 text-center">Vanliga frågor om Eneo</h2>

            <div className="grid gap-4 md:gap-6">
              <Card className="border-[#CBD5E1] shadow-sm hover:shadow-md transition-shadow">
                <CardHeader>
                  <CardTitle className="text-[#0F172A] text-lg">Vem eller vilka kan använda Eneo?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-[#475569] leading-relaxed">
                    Vem som helst kan använda, utveckla eller erbjuda Eneo. Har du eller ditt företag kompetens inom det
                    teknikområde som Eneo rör så kan alla ta del av koden och bidra till utvecklingen på samma villkor.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-[#CBD5E1] shadow-sm hover:shadow-md transition-shadow">
                <CardHeader>
                  <CardTitle className="text-[#0F172A] text-lg">Finns det några begränsningar i användandet?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-[#475569] mb-4 leading-relaxed">
                    De enda begränsningar som finns är kring den licensform som finns för den öppna källkoden, där vi
                    väljer att publicera allt i AGPLv3 då det är den licens som tidigare kod för Intric var utgiven i
                    eller var kompatibel med.
                  </p>
                  <p className="text-[#475569] leading-relaxed">
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
            <Card className="border-[#16A34A] shadow-lg bg-gradient-to-br from-[#F7FAFA] to-green-50">
              <CardHeader>
                <CardTitle className="text-[#0F172A] text-xl md:text-2xl">Ta del av Eneo</CardTitle>
                <CardDescription className="text-[#475569] text-base">
                  Utforska plattformen och bli en del av den demokratiska AI-rörelsen
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <Button
                    className="bg-[#16A34A] hover:bg-[#15803D] text-white font-bold transition-all hover:shadow-md"
                    asChild
                  >
                    <Link href="/activate">
                      Aktivera plattformen
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  <Button
                    variant="outline"
                    className="border-[#16A34A] text-[#16A34A] hover:bg-[#16A34A] hover:text-white transition-all"
                    asChild
                  >
                    <Link href="https://github.com/sundsvallai/eneo" target="_blank" rel="noopener noreferrer">
                      Källkod <ExternalLink className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  <Button
                    variant="outline"
                    className="border-[#16A34A] text-[#16A34A] hover:bg-[#16A34A] hover:text-white transition-all"
                    asChild
                  >
                    <Link
                      href="https://github.com/sundsvallai/eneo/tree/main/docs"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Dokumentation <ExternalLink className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
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
