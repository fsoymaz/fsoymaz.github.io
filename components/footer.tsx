import {
  Mail,
  MapPin,
  Phone,
  Clock,
  ArrowRight,
  Github,
  Linkedin,
  Twitter,
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export function Footer() {
  return (
    <footer className="mt-24 bg-gradient-to-b from-[#2a2a2a] to-[#1f1f1f] text-white border-t border-white/10 shadow-inner">
      <div className="max-w-6xl mx-auto px-4 py-16 grid gap-10 md:grid-cols-2 lg:grid-cols-4">
        {/* Brand + intro */}
        <div className="space-y-4 text-white">
          <div className="text-2xl font-semibold tracking-tight text-white">
            Fatih Soymaz
          </div>
          <p className="text-sm leading-6 text-white/80">
            .NET backend, Cypress test otomasyonu ve React/Next.js ile modern
            web uygulamaları geliştiriyorum.
          </p>
          <div className="text-xs uppercase tracking-wider text-white/90 font-semibold">
            Bizi Takip Edin
          </div>
          <div className="flex gap-3">
            <a
              href="https://github.com/fsoymaz"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="inline-flex h-9 w-9 items-center justify-center rounded-md bg-white/10 hover:bg-white/20 transition-colors"
            >
              <Github className="size-4 text-white" />
            </a>
            <a
              href="https://www.linkedin.com/in/fatih-soymaz/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="inline-flex h-9 w-9 items-center justify-center rounded-md bg-white/10 hover:bg-white/20 transition-colors"
            >
              <Linkedin className="size-4 text-white" />
            </a>
            <a
              href="https://twitter.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
              className="inline-flex h-9 w-9 items-center justify-center rounded-md bg-white/10 hover:bg-white/20 transition-colors"
            >
              <Twitter className="size-4 text-white" />
            </a>
          </div>
        </div>

        {/* Quick links */}
        <div className="space-y-4">
          <div className="text-white font-semibold">Hızlı Linkler</div>
          <ul className="space-y-3 text-sm text-white/80">
            <li>
              <a className="hover:text-accent transition-colors" href="#">
                Ana Sayfa
              </a>
            </li>
            <li>
              <a
                className="hover:text-accent transition-colors"
                href="#projects"
              >
                Projeler
              </a>
            </li>
            <li>
              <a className="hover:text-accent transition-colors" href="#skills">
                Yetenekler
              </a>
            </li>
            <li>
              <a className="hover:text-accent transition-colors" href="#about">
                Hakkımda
              </a>
            </li>
            <li>
              <a
                className="hover:text-accent transition-colors"
                href="#contact"
              >
                İletişim
              </a>
            </li>
          </ul>
        </div>

        {/* Services */}
        <div className="space-y-4">
          <div className="text-white font-semibold">Hizmetler</div>
          <ul className="space-y-3 text-sm text-white/80">
            <li>Web API (ASP.NET)</li>
            <li>Frontend (React/Next.js)</li>
            <li>E2E Test (Cypress)</li>
            <li>Bulut & CI/CD</li>
          </ul>
        </div>

        {/* Contact + newsletter */}
        <div className="space-y-4">
          <div className="text-white font-semibold">İletişim</div>
          <div className="space-y-3 text-sm text-white/80">
            <div className="flex items-center gap-2">
              <MapPin className="size-4 text-white/80" /> İstanbul, Türkiye
            </div>
            <a
              href="mailto:fthsymz60@gmail.com"
              className="flex items-center gap-2 hover:text-accent transition-colors"
            >
              <Mail className="size-4 text-white/80" /> fthsymz60@gmail.com
            </a>
            <a
              href="tel:+905551402602"
              className="flex items-center gap-2 hover:text-accent transition-colors"
            >
              <Phone className="size-4 text-white/80" /> +90 555 140 26 02
            </a>
            <div className="flex items-center gap-2">
              <Clock className="size-4 text-white/80" /> Pzt–Cum: 09:00 – 18:00
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-6xl mx-auto px-4">
        <div className="h-px w-full bg-foreground/20" />
      </div>
      <div className="max-w-6xl mx-auto px-4 py-6 text-xs flex flex-col md:flex-row items-center justify-between gap-2 text-white/80">
        <div>
          © {new Date().getFullYear()} Fatih Soymaz. Tüm hakları saklıdır.
        </div>
        <div className="flex items-center gap-4">
          <a
            href="#"
            className="text-white hover:text-accent hover:underline underline-offset-4"
          >
            Kullanım Koşulları
          </a>
          <span className="opacity-30">•</span>
          <a
            href="#"
            className="text-white hover:text-accent hover:underline underline-offset-4"
          >
            Gizlilik
          </a>
          <span className="opacity-30">•</span>
          <a
            href="#"
            className="text-white hover:text-accent hover:underline underline-offset-4"
          >
            Çerezler
          </a>
        </div>
      </div>
    </footer>
  );
}
