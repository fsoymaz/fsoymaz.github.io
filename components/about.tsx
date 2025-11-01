import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Briefcase, GraduationCap, Code, CheckCircle2 } from "lucide-react";

export function About() {
  return (
    <section
      id="about"
      className="py-24 px-4 bg-gradient-to-b from-muted/30 to-background"
    >
      <div className="max-w-7xl mx-auto">
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
                <Card className="border-2 hover:border-accent/50 transition-colors">
                  <CardHeader className="pb-3">
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-accent/10">
                        <Code className="h-5 w-5 text-accent" />
                      </div>
                      <CardTitle className="text-lg">
                        Backend Geliştirme
                      </CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      .NET ve C# ile ölçeklenebilir API'ler ve servisler
                      geliştiriyorum.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-2 hover:border-accent/50 transition-colors">
                  <CardHeader className="pb-3">
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-accent/10">
                        <CheckCircle2 className="h-5 w-5 text-accent" />
                      </div>
                      <CardTitle className="text-lg">
                        Kalite Güvencesi
                      </CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      Cypress ile E2E test otomasyonu ve manuel test süreçleri
                      yürütüyorum.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Timeline */}
            <div className="space-y-8">
              <Card className="border-2 hover:border-accent/50 transition-colors sticky top-24">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-accent/10">
                      <Briefcase className="h-5 w-5 text-accent" />
                    </div>
                    <CardTitle className="text-xl">Deneyim</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="relative pl-6 pb-6 border-l-2 border-accent">
                      <div className="absolute -left-[9px] top-0 h-4 w-4 rounded-full bg-accent border-2 border-background" />
                      <p className="font-semibold text-base">
                        Stajyer • Quality Assurance → Backend (.NET)
                      </p>
                      <p className="text-sm text-muted-foreground mt-1">
                        Hepsiburada
                      </p>
                      <p className="text-xs text-muted-foreground mt-1">
                        12 Ay
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 hover:border-accent/50 transition-colors">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-accent/10">
                      <GraduationCap className="h-5 w-5 text-accent" />
                    </div>
                    <CardTitle className="text-xl">Eğitim</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="relative pl-6 border-l-2 border-accent">
                      <div className="absolute -left-[9px] top-0 h-4 w-4 rounded-full bg-accent border-2 border-background" />
                      <p className="font-semibold text-base">42 Okulları</p>
                      <p className="text-sm text-muted-foreground mt-1">
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
