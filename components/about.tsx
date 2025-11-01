import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Briefcase, GraduationCap, Code, CheckCircle2 } from "lucide-react";
import { DotsPattern, AnimatedBlobs } from "@/components/background-patterns";

export function About() {
  return (
    <section
      id="about"
      className="py-24 px-4 relative overflow-hidden bg-gradient-to-b from-background via-muted/20 to-background"
    >
      {/* Creative Background for About */}
      <AnimatedBlobs />
      <DotsPattern />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_hsl(var(--accent)/0.1),_transparent)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_hsl(var(--accent)/0.08),_transparent)]" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="space-y-12">
          <div className="space-y-4 text-center md:text-left">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-balance">
              Hakkımda
            </h2>
            <div className="h-1 w-24 bg-accent rounded-full mx-auto md:mx-0" />
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-6">
              <div className="space-y-6">
                <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                  42 Okulları'nda 2 yıl eğitim aldıktan sonra Hepsiburada'da 12
                  ay staj yaptım. Önce{" "}
                  <span className="text-foreground font-semibold">
                    Quality Assurance
                  </span>{" "}
                  tarafında manuel ve otomasyon (
                  <span className="text-foreground font-semibold">Cypress</span>
                  ) testleri geliştirdim; ardından backend alanına geçerek{" "}
                  <span className="text-foreground font-semibold">
                    .NET ile servis geliştirme
                  </span>{" "}
                  deneyimi kazandım.
                </p>
                <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                  Test süreçlerinde kalite odaklı yaklaşım benimsiyorum; API
                  tasarımında temiz mimari, dokümantasyon ve otomasyonla
                  sürdürülebilirliği önemsiyorum. Şu an .NET/C# ekosisteminde
                  derinleşirken, web teknolojileri ve ürün geliştirme
                  pratiklerine devam ediyorum.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-4 pt-4">
                <Card className="border-2 hover:border-accent/50 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 group relative overflow-hidden bg-card/80 backdrop-blur-sm">
                  <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                  <CardHeader className="pb-3 relative z-10">
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-accent/10 group-hover:bg-accent/20 transition-colors group-hover:scale-110 duration-300">
                        <Code className="h-5 w-5 text-accent" />
                      </div>
                      <CardTitle className="text-lg group-hover:text-accent transition-colors">
                        Backend Geliştirme
                      </CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="relative z-10">
                    <p className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                      .NET ve C# ile ölçeklenebilir API'ler ve servisler
                      geliştiriyorum.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-2 hover:border-accent/50 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 group relative overflow-hidden bg-card/80 backdrop-blur-sm">
                  <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                  <CardHeader className="pb-3 relative z-10">
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-accent/10 group-hover:bg-accent/20 transition-colors group-hover:scale-110 duration-300">
                        <CheckCircle2 className="h-5 w-5 text-accent" />
                      </div>
                      <CardTitle className="text-lg group-hover:text-accent transition-colors">
                        Kalite Güvencesi
                      </CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="relative z-10">
                    <p className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                      Cypress ile E2E test otomasyonu ve manuel test süreçleri
                      yürütüyorum.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Timeline */}
            <div className="space-y-8">
              <Card className="border-2 hover:border-accent/50 transition-all duration-300 hover:shadow-xl group sticky top-24 bg-card/90 backdrop-blur-sm relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                <CardHeader className="relative z-10">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-accent/10 group-hover:bg-accent/20 transition-colors group-hover:scale-110 duration-300">
                      <Briefcase className="h-5 w-5 text-accent" />
                    </div>
                    <CardTitle className="text-xl group-hover:text-accent transition-colors">
                      Deneyim
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="relative z-10">
                  <div className="space-y-4">
                    <div className="relative pl-6 pb-6 border-l-2 border-accent group-hover:border-accent/80 transition-colors">
                      <div className="absolute -left-[9px] top-0 h-4 w-4 rounded-full bg-accent border-2 border-background group-hover:scale-125 transition-transform" />
                      <p className="font-semibold text-base group-hover:text-accent transition-colors">
                        Stajyer • Quality Assurance → Backend (.NET)
                      </p>
                      <p className="text-sm text-muted-foreground mt-1 group-hover:text-foreground transition-colors">
                        Hepsiburada
                      </p>
                      <p className="text-xs text-muted-foreground mt-1">
                        12 Ay
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 hover:border-accent/50 transition-all duration-300 hover:shadow-xl group bg-card/90 backdrop-blur-sm relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                <CardHeader className="relative z-10">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-accent/10 group-hover:bg-accent/20 transition-colors group-hover:scale-110 duration-300">
                      <GraduationCap className="h-5 w-5 text-accent" />
                    </div>
                    <CardTitle className="text-xl group-hover:text-accent transition-colors">
                      Eğitim
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="relative z-10">
                  <div className="space-y-4">
                    <div className="relative pl-6 border-l-2 border-accent group-hover:border-accent/80 transition-colors">
                      <div className="absolute -left-[9px] top-0 h-4 w-4 rounded-full bg-accent border-2 border-background group-hover:scale-125 transition-transform" />
                      <p className="font-semibold text-base group-hover:text-accent transition-colors">
                        42 Okulları
                      </p>
                      <p className="text-sm text-muted-foreground mt-1 group-hover:text-foreground transition-colors">
                        Yazılım ve Problem Çözme
                      </p>
                      <p className="text-xs text-muted-foreground mt-1">
                        2 Yıl
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
