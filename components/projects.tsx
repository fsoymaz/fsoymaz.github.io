"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink, ArrowRight } from "lucide-react";
import { useState } from "react";

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
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section
      id="projects"
      className="py-24 px-4 bg-gradient-to-b from-background to-muted/20"
    >
      <div className="max-w-7xl mx-auto">
        <div className="space-y-12">
          <div className="space-y-4 text-center md:text-left">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-balance">
              Projelerim
            </h2>
            <div className="h-1 w-24 bg-accent rounded-full mx-auto md:mx-0" />
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto md:mx-0 pt-4">
              Üzerinde çalıştığım ve tamamladığım bazı projeler. Her biri farklı
              teknolojiler ve yaklaşımlar kullanılarak geliştirildi.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="overflow-hidden group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-2 hover:border-accent/50 bg-card"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <div className="aspect-video overflow-hidden bg-muted relative">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  {hoveredIndex === index && (
                    <div className="absolute inset-0 flex items-center justify-center gap-4 z-20">
                      {project.github && (
                        <Button
                          variant="secondary"
                          size="sm"
                          className="gap-2 bg-background/90 backdrop-blur-sm hover:bg-background"
                          asChild
                        >
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                          >
                            <Github className="h-4 w-4" />
                            Kod
                          </a>
                        </Button>
                      )}
                      {project.demo !== "#" && project.demo && (
                        <Button
                          variant="secondary"
                          size="sm"
                          className="gap-2 bg-background/90 backdrop-blur-sm hover:bg-background"
                          asChild
                        >
                          <a
                            href={project.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                          >
                            <ExternalLink className="h-4 w-4" />
                            Demo
                          </a>
                        </Button>
                      )}
                    </div>
                  )}
                </div>
                <CardHeader className="pb-3">
                  <CardTitle className="text-2xl group-hover:text-accent transition-colors">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-base leading-relaxed pt-2">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <Badge
                        key={tagIndex}
                        variant="secondary"
                        className="text-xs font-medium"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex items-center justify-between pt-4 border-t">
                    <div className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                      Projeyi İncele
                    </div>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="gap-2 group-hover:translate-x-1 transition-transform"
                      asChild
                    >
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ArrowRight className="h-4 w-4" />
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
