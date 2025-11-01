"use client";

import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, ArrowDown, Code2 } from "lucide-react";
import { ThreeBg } from "@/components/three-bg";
import { useEffect, useRef } from "react";

export function Hero() {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    // Animate elements on mount
    if (titleRef.current) {
      titleRef.current.style.opacity = "0";
      titleRef.current.style.transform = "translateY(20px)";
      setTimeout(() => {
        if (titleRef.current) {
          titleRef.current.style.transition =
            "opacity 0.8s ease, transform 0.8s ease";
          titleRef.current.style.opacity = "1";
          titleRef.current.style.transform = "translateY(0)";
        }
      }, 100);
    }
    if (subtitleRef.current) {
      subtitleRef.current.style.opacity = "0";
      subtitleRef.current.style.transform = "translateY(20px)";
      setTimeout(() => {
        if (subtitleRef.current) {
          subtitleRef.current.style.transition =
            "opacity 0.8s ease 0.2s, transform 0.8s ease 0.2s";
          subtitleRef.current.style.opacity = "1";
          subtitleRef.current.style.transform = "translateY(0)";
        }
      }, 100);
    }
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-20 relative overflow-hidden pt-32 md:pt-40">
      <ThreeBg className="absolute inset-0" />
      <div className="max-w-7xl w-full relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="flex items-center gap-3 text-sm text-muted-foreground mb-2">
                <Code2 className="h-4 w-4 text-accent" />
                <span>Full Stack Developer</span>
              </div>
              <h1
                ref={titleRef}
                className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-balance leading-tight"
              >
                Merhaba, Ben{" "}
                <span className="text-accent bg-gradient-to-r from-accent to-accent/60 bg-clip-text text-transparent">
                  Fatih Soymaz
                </span>
              </h1>
              <p
                ref={subtitleRef}
                className="text-xl md:text-2xl lg:text-3xl text-muted-foreground font-light"
              >
                Backend & Frontend Geliştirici
              </p>
            </div>

            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl">
              Hepsiburada'da QA olarak manuel ve Cypress ile otomasyon testleri
              geliştirdim, ardından{" "}
              <span className="text-foreground font-medium">
                .NET ile backend servisleri
              </span>{" "}
              üzerinde çalıştım. Kalite odaklı, ölçeklenebilir ve bakımı kolay
              servisler üretmeye odaklanıyorum. Ayrıca{" "}
              <span className="text-foreground font-medium">
                React ve Next.js
              </span>{" "}
              ile modern frontend arayüzleri geliştiriyorum.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <Button size="lg" className="gap-2 h-12 px-8 text-base" asChild>
                <a href="#contact">
                  <Mail className="h-4 w-4" />
                  İletişime Geç
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="gap-2 bg-transparent h-12 px-8 text-base"
                asChild
              >
                <a href="#projects">
                  Projelerimi Gör
                  <ArrowDown className="h-4 w-4" />
                </a>
              </Button>
            </div>

            <div className="flex gap-6 pt-8">
              <a
                href="https://github.com/fsoymaz"
                target="_blank"
                rel="noopener noreferrer"
                className="group text-muted-foreground hover:text-foreground transition-all hover:scale-110"
                aria-label="GitHub"
              >
                <Github className="h-6 w-6" />
              </a>
              <a
                href="https://www.linkedin.com/in/fatih-soymaz/"
                target="_blank"
                rel="noopener noreferrer"
                className="group text-muted-foreground hover:text-foreground transition-all hover:scale-110"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-6 w-6" />
              </a>
              <a
                href="mailto:fthsymz60@gmail.com"
                className="group text-muted-foreground hover:text-foreground transition-all hover:scale-110"
                aria-label="Email"
              >
                <Mail className="h-6 w-6" />
              </a>
            </div>
          </div>

          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-br from-accent/30 to-accent/10 rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-500" />
            <div className="relative aspect-square rounded-3xl bg-gradient-to-br from-accent/20 to-accent/5 flex items-center justify-center overflow-hidden shadow-2xl">
              <img
                src="/professional-developer-portrait.jpeg"
                alt="Fatih Soymaz"
                className="rounded-3xl object-cover w-full h-full group-hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
