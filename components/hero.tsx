import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Twitter } from "lucide-react";
import { ThreeBg } from "@/components/three-bg";

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-20 relative overflow-hidden">
      <ThreeBg className="absolute inset-0" />
      <div className="max-w-6xl w-full relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-balance">
                Merhaba, Ben <span className="text-accent">Fatih Soymaz</span>
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground">
                Full Stack Developer
              </p>
            </div>

            <p className="text-lg text-muted-foreground leading-relaxed">
              Hepsiburada'da QA olarak manuel ve Cypress ile otomasyon testleri
              geliştirdim, ardından .NET ile backend servisleri üzerinde
              çalıştım. Kalite odaklı, ölçeklenebilir ve bakımı kolay servisler
              üretmeye odaklanıyorum. Ayrıca React ve Next.js ile modern
              frontend arayüzleri geliştiriyorum.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="gap-2" asChild>
                <a href="#contact">
                  <Mail className="h-4 w-4" />
                  İletişime Geç
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="gap-2 bg-transparent"
                asChild
              >
                <a href="#projects">Projelerimi Gör</a>
              </Button>
            </div>

            <div className="flex gap-4 pt-4">
              <a
                href="https://github.com/fsoymaz"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <Github className="h-6 w-6" />
                <span className="sr-only">GitHub</span>
              </a>
              <a
                href="https://www.linkedin.com/in/fatih-soymaz/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <Linkedin className="h-6 w-6" />
                <span className="sr-only">LinkedIn</span>
              </a>
              <a
                href="mailto:fthsymz60@gmail.com"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <Mail className="h-6 w-6" />
                <span className="sr-only">Email</span>
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-square rounded-2xl bg-gradient-to-br from-accent/20 to-accent/5 flex items-center justify-center">
              <img
                src="/professional-developer-portrait.jpeg"
                alt="Fatih Soymaz"
                className="rounded-2xl object-cover w-full h-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
