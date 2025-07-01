import Link from "next/link"
import Navbar from "@/components/navbar"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { NordicButton } from "@/components/ui/nordic-button"
import { ArrowRight, Target, Users, TrendingUp, AlertCircle } from "lucide-react"

export default function EneoPage() {
  return (
    <div className="min-h-screen bg-nordic-snow">
      <Navbar />

      <div className="container py-6 md:py-12 px-4">
        <div className="max-w-4xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-8 md:mb-12">
            <h1 className="text-3xl md:text-5xl font-black text-nordic-ink tracking-tight mb-6">
              Tanken med kommuna.se
            </h1>
            <p className="text-lg md:text-xl text-nordic-graphite max-w-3xl mx-auto leading-relaxed">
              Kommuna.se är ett sätt att visualisera ett nytt sätt att uppnå en mer likvärdig digital välfärd i hela Sverige, där det är enkelt att börja använda nationella tjänster samt där mindre offentliga aktörer har möjlighet att ge sig tillgång till verktyg som krävs för att innovera och utveckla på lokal nivå.
            </p>
          </div>

          {/* Main Content Sections */}
          <div className="space-y-8 md:space-y-12">

            {/* Utmaningen Section */}
            <Card className="border-nordic-cloud shadow-lg hover:shadow-xl hover:border-nordic-sage hover:-translate-y-1 transition-all duration-300 bg-gradient-to-br from-nordic-frost to-nordic-cloud/30">
              <CardHeader className="pb-4">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 bg-gradient-to-br from-red-500 to-red-600 rounded-lg flex items-center justify-center">
                    <AlertCircle className="h-5 w-5 text-white" />
                  </div>
                  <CardTitle className="text-nordic-ink text-xl md:text-2xl">Utmaningen</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4 text-nordic-steel leading-relaxed">
                  <p>
                    Den grundläggnade utmaningen inom kommunsektorn är att varje kommun förväntas leverera en likvärdig digital välfärd, fastän förutsättningarna mellan kommuner skiljer sig oerhört mycket.
                  </p>
                  <p>
                    Skillnaden mellan de minsta kommunerna och de största är enorma, det är som två helt olika typer av organisationer. Men i grunden ska de leverera lika många olika välfärdsrelaterade tjänster, det är bara volymen som skiljer.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Olika storlekar Section */}
            <Card className="border-nordic-sage shadow-lg hover:shadow-xl hover:border-nordic-sage-light hover:-translate-y-1 transition-all duration-300 bg-gradient-to-br from-nordic-mint to-nordic-frost relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-nordic-sage/10 rounded-bl-full -mr-16 -mt-16"></div>
              <CardHeader className="relative z-10 pb-4">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 bg-gradient-to-br from-nordic-sage to-nordic-sage-light rounded-lg flex items-center justify-center">
                    <Users className="h-5 w-5 text-white" />
                  </div>
                  <CardTitle className="text-nordic-ink text-xl md:text-2xl">
                    Olika storlekar ger olika fördelar
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent className="relative z-10">
                <div className="space-y-4 text-nordic-steel leading-relaxed">
                  <p>
                    Samtidigt ska det sägas att det inte bara finns fördelar av att vara en större kommun, de är ofta rätt långsamma i sin förändringstakt medan en mindre kommun inte har råd med det utan behöver kunna ställa om snabbare.
                  </p>
                  <p>
                    Om vi samgjorde mer mellan kommuner i olika storlekar skulle vi kunna dra nytta av detta, där mindre kommuner kan vara innovations- och testbäddar för nästa generations AI- eller digitala tjänst. Medan större kommuner kan bidra i att utveckla och sprida en skalbar version av densamma.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Gör vi inget Section */}
            <Card className="border-nordic-forest shadow-lg hover:shadow-xl hover:border-nordic-forest/80 hover:-translate-y-1 transition-all duration-300 bg-gradient-to-br from-nordic-snow to-nordic-mint/30 relative overflow-hidden">
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-nordic-forest/5 rounded-tr-full -ml-12 -mb-12"></div>
              <CardHeader className="relative z-10 pb-4">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 bg-gradient-to-br from-nordic-forest to-nordic-graphite rounded-lg flex items-center justify-center">
                    <TrendingUp className="h-5 w-5 text-white" />
                  </div>
                  <CardTitle className="text-nordic-ink text-xl md:text-2xl">
                    Gör vi inget kommer det inte bli någon skillnad
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent className="relative z-10">
                <div className="space-y-4 text-nordic-steel leading-relaxed">
                  <p>
                    Det enda vi vet är att om vi inte agerar alls så kommer det inte heller bli någon skillnad, snarare kommer den digitala välfärdsklyftan sannolikt att öka och vi fortsätter att utveckla i stuprör vilket också innebär att skattemedel inte används så effektivt som möjligt.
                  </p>
                  <p className="font-medium text-nordic-ink bg-white/70 p-4 rounded-lg border border-nordic-sage/20">
                    Inom kommuna.se är tanken att dela på kostnader istället för att gångra dom, att en tjänst utvecklas på en plats och återanvänds 289 gånger ser vi är en bättre värld än att den utvecklas 290 gånger. 1/289 är mycket bättre än 1*289.
                  </p>
                </div>
              </CardContent>
            </Card>

          </div>

          {/* Call to Action */}
          <div className="text-center mt-8 md:mt-12">
            <Card className="border-nordic-sage shadow-lg bg-gradient-to-br from-nordic-snow to-nordic-mint">
              <CardHeader>
                <CardTitle className="text-nordic-ink text-xl md:text-2xl">Testa visionen</CardTitle>
                <CardDescription className="text-nordic-steel text-base">
                  Utforska hur delade digitala tjänster skulle kunna fungera i praktiken
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <NordicButton
                    variant="primary"
                    asChild
                  >
                    <Link href="/#delade-tjanster">
                      Se delade tjänster
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </NordicButton>
                  <NordicButton
                    variant="secondary"
                    asChild
                  >
                    <Link href="/activate">
                      Kom igång
                      <ArrowRight className="ml-2 h-4 w-4" />
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