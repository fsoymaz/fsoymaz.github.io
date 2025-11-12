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
      {/* Banner 1: Hero ve About arası */}
      <AdSenseBanner
        clientId="ca-pub-2176285363097953"
        size="responsive"
        className="max-w-7xl mx-auto px-4"
      />
      <About />
      {/* Banner 2: About ve Projects arası */}
      <AdSenseInArticle
        clientId="ca-pub-2176285363097953"
        className="max-w-7xl mx-auto px-4"
      />
      <Projects />
      <Skills />
      {/* Banner 3: Skills ve Contact arası */}
      <AdSenseBanner
        clientId="ca-pub-2176285363097953"
        size="responsive"
        className="max-w-7xl mx-auto px-4"
      />
      <Contact />
      <Footer />
    </main>
  );
}
