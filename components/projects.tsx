import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github } from "lucide-react";

const projects = [
  {
    title: "Restoran Projesi",
    description:
      "Menü yönetimi, sipariş akışı ve rezervasyonları yöneten modern restoran uygulaması.",
    image: "/restoranprojesi.png",
    tags: ["Next.js", "TypeScript", "Tailwind CSS"],
    github: "https://github.com/fsoymaz/restoran-Projesi",
    demo: "#",
  },
  {
    title: "Sigara Bırakma Uygulaması",
    description:
      "Günlük takip, hedefler ve bildirimlerle sigara bırakma sürecini destekleyen uygulama.",
    image: "/sigarasitesi.png",
    tags: ["Next.js", "TypeScript", "Supabase"],
    github: "https://github.com/fsoymaz/quit-smoking-site",
    demo: "#",
  },
  {
    title: "Coffee Satış Sitesi",
    description:
      "Ürün listeleme, sepet ve ödeme akışlarıyla kahve satışına odaklı e-ticaret sitesi.",
    image: "/coffee.png",
    tags: ["Next.js", "Stripe", "Tailwind CSS"],
    github: "https://github.com/fsoymaz/coffeFrontend",
    demo: "#",
  },
  {
    title: "Rent A Car Sitesi",
    description:
      "Araç arama, rezervasyon ve fiyatlandırma modülleriyle araç kiralama platformu.",
    image: "/rentacar.png",
    tags: ["ASP.NET Core", "C#", "SQL Server", "React"],
    github: "https://github.com/fsoymaz/Car-Rental",
    demo: "#",
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="space-y-8">
          <div className="space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold text-balance">
              Projelerim
            </h2>
            <div className="h-1 w-20 bg-accent rounded-full" />
            <p className="text-lg text-muted-foreground max-w-2xl">
              Üzerinde çalıştığım ve tamamladığım bazı projeler. Her biri farklı
              teknolojiler ve yaklaşımlar kullanılarak geliştirildi.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="overflow-hidden group hover:shadow-lg transition-all [transform-style:preserve-3d] hover:-translate-y-1 duration-300"
                style={{ perspective: 1000 }}
              >
                <div className="aspect-video overflow-hidden bg-muted">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 will-change-transform"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-xl">{project.title}</CardTitle>
                  <CardDescription className="text-base">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <Badge key={tagIndex} variant="secondary">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex items-center pt-3 border-t">
                    <Button
                      variant="outline"
                      size="sm"
                      className="gap-2 bg-transparent ml-auto"
                      asChild
                    >
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github className="h-4 w-4" />
                        Kod
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
