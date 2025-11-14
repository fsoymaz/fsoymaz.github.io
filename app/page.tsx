import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { Projects } from "@/components/projects";
import { Skills } from "@/components/skills";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";
import { AdSenseBanner, AdSenseInArticle } from "@/components/google-adsense";

export default function Home() {
  return (
    <main className="min-h-screen scroll-smooth">
      <Navbar />
      <Hero />
      {/* Hero sonrası reklam kaldırıldı - AdSense politikası: yeterince içerik olmayan sayfalarda reklam gösterilemez */}
      <About />
      {/* Banner 1: About sonrası - İçerikli bölümden sonra */}
      <AdSenseInArticle
        clientId="ca-pub-2176285363097953"
        slot="6985877060"
        className="max-w-7xl mx-auto px-4"
      />
      <Projects />
      {/* Banner 2: Projects sonrası - İçerikli bölümden sonra */}
      <AdSenseBanner
        clientId="ca-pub-2176285363097953"
        slot="6985877060"
        size="responsive"
        className="max-w-7xl mx-auto px-4"
      />
      <Skills />
      {/* Banner 3: Skills sonrası - İçerikli bölümden sonra */}
      <AdSenseBanner
        clientId="ca-pub-2176285363097953"
        slot="6985877060"
        size="responsive"
        className="max-w-7xl mx-auto px-4"
      />
      <Contact />
      {/* Contact sonrası reklam kaldırıldı - AdSense politikası: form/davranışsal amaçlı sayfalarda reklam gösterilemez */}
      <Footer />
    </main>
  );
}
