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
import { Github, ExternalLink, ArrowRight, Folder } from "lucide-react";
import { useState } from "react";
import {
  GridPattern,
  AnimatedMeshGradient,
  CodePattern,
} from "@/components/background-patterns";

const projects = [
  {
    title: "Restoran Projesi",
    description:
      "Django REST Framework ile geliştirilmiş backend API, PostgreSQL veritabanı ve Next.js frontend ile oluşturulmuş full-stack restoran yönetim sistemi. Menü yönetimi, sipariş takibi ve rezervasyon modülleri içerir. Django ORM ile veritabanı işlemleri optimize edildi.",
    image: "/restoranprojesi.png",
    tags: [
      "Django",
      "Django REST",
      "PostgreSQL",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
    ],
    github: "https://github.com/fsoymaz/restoran-Projesi",
    demo: "#",
  },
  {
    title: "Sigara Bırakma Uygulaması",
    description:
      "Go (Golang) ve Gin framework ile yüksek performanslı REST API backend geliştirildi. PostgreSQL veritabanı ve Redis cache ile optimize edilmiş veri erişimi sağlandı. Go'nun goroutine ve channel özellikleri ile concurrent işlemler yönetildi. Next.js ile modern frontend arayüzü geliştirildi.",
    image: "/sigarasitesi.png",
    tags: ["Go", "Gin", "PostgreSQL", "Redis", "Next.js", "TypeScript"],
    github: "https://github.com/fsoymaz/quit-smoking-site",
    demo: "#",
  },
  {
    title: "Coffee Satış Sitesi",
    description:
      "ASP.NET Core Web API ile backend servisleri geliştirildi. Entity Framework Core ile SQL Server veritabanı işlemleri yapıldı. RESTful API mimarisi ile ürün yönetimi, sepet işlemleri ve sipariş takibi modülleri oluşturuldu. Next.js ile responsive e-ticaret arayüzü geliştirildi.",
    image: "/coffee.png",
    tags: ["ASP.NET Core", "C#", "SQL Server", "Entity Framework", "Next.js"],
    github: "https://github.com/fsoymaz/coffeFrontend",
    demo: "#",
  },
  {
    title: "Rent A Car Sitesi",
    description:
      "ASP.NET Core Web API ile RESTful backend servisleri geliştirildi. SQL Server veritabanı, Entity Framework Core ORM ile yönetildi. Araç yönetimi, rezervasyon, fiyatlandırma ve müşteri modülleri oluşturuldu. SOLID prensipleri ve Clean Architecture yaklaşımı uygulandı. React ile frontend arayüzü geliştirildi.",
    image: "/rentacar.png",
    tags: [
      "ASP.NET Core",
      "C#",
      "SQL Server",
      "Entity Framework",
      "REST API",
      "React",
    ],
    github: "https://github.com/fsoymaz/Car-Rental",
    demo: "#",
  },
];

export function Projects() {
  const [selectedIndex, setSelectedIndex] = useState<number>(0);

  return (
    <section
      id="projects"
      className="py-24 px-4 relative overflow-hidden bg-gradient-to-b from-background via-muted/30 to-background"
      style={{ perspective: "1000px" }}
    >
      {/* Creative Background Patterns */}
      <AnimatedMeshGradient />
      <GridPattern className="opacity-40" />
      <CodePattern className="opacity-30" />
      <div className="absolute inset-0 bg-gradient-to-r from-accent/5 via-transparent to-accent/5" />

      <div className="max-w-7xl mx-auto relative z-10">
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

          {/* macOS-style Tab Design */}
          <div className="grid lg:grid-cols-[320px_1fr] gap-8 lg:gap-10 mt-12">
            {/* Left Sidebar - Enhanced Tab Design */}
            <div className="flex flex-row lg:flex-col gap-4 overflow-x-auto lg:overflow-visible pb-2 lg:pb-0">
              {projects.map((project, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedIndex(index)}
                  className={`
                    group relative flex flex-col lg:flex-row items-start lg:items-center gap-3 px-4 py-4 rounded-xl
                    transition-all duration-400 ease-out
                    min-w-[260px] lg:min-w-0 overflow-visible
                    ${
                      selectedIndex === index
                        ? "bg-gradient-to-br from-card via-card to-card/90 border-2 border-accent/60 shadow-2xl scale-[1.02] lg:scale-100 lg:shadow-2xl lg:translate-x-3 backdrop-blur-sm"
                        : "bg-card/60 border-2 border-border/40 hover:border-accent/40 hover:bg-card/80 lg:hover:translate-x-2 hover:shadow-lg backdrop-blur-sm"
                    }
                  `}
                  style={{
                    transformStyle: "preserve-3d",
                    perspective: "1000px",
                  }}
                >
                  {/* Active indicator - Enhanced */}
                  {selectedIndex === index && (
                    <>
                      <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-gradient-to-b from-accent via-accent to-accent/80 rounded-l-xl z-10 shadow-lg shadow-accent/50" />
                      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-3 h-12 bg-accent/20 blur-md rounded-r-full -z-0" />
                    </>
                  )}

                  {/* Enhanced Diagonal Project Image Preview */}
                  <div
                    className={`
                      relative w-24 h-20 lg:w-28 lg:h-20 rounded-xl overflow-hidden
                      transition-all duration-400
                      ${
                        selectedIndex === index
                          ? "shadow-2xl scale-110 ring-2 ring-accent/30"
                          : "shadow-lg group-hover:scale-105 group-hover:ring-1 group-hover:ring-accent/20"
                      }
                    `}
                    style={{
                      transform:
                        selectedIndex === index
                          ? "perspective(1200px) rotateY(-12deg) rotateZ(-2deg) translateZ(15px)"
                          : "perspective(1200px) rotateY(-18deg) rotateZ(-4deg) translateZ(0px)",
                      transformStyle: "preserve-3d",
                    }}
                  >
                    {/* Image */}
                    <img
                      src={project.image || "/placeholder.svg"}
                      alt={`${project.title} - Proje ekran görüntüsü`}
                      width={400}
                      height={300}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />

                    {/* Enhanced Overlay gradient */}
                    <div
                      className={`absolute inset-0 bg-gradient-to-br transition-all duration-400 ${
                        selectedIndex === index
                          ? "from-accent/30 via-accent/10 to-transparent"
                          : "from-black/30 via-black/10 to-transparent group-hover:from-accent/15 group-hover:via-accent/5"
                      }`}
                    />

                    {/* Shine effect */}
                    {selectedIndex === index && (
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-pulse" />
                    )}

                    {/* Enhanced Shadow behind image */}
                    <div
                      className="absolute -inset-3 bg-black/30 blur-xl rounded-xl -z-10 transition-all duration-400"
                      style={{
                        transform:
                          selectedIndex === index
                            ? "translateZ(-15px) scale(1.1)"
                            : "translateZ(-10px) scale(1)",
                        opacity: selectedIndex === index ? 0.6 : 0.3,
                      }}
                    />
                  </div>

                  <div className="flex-1 text-left min-w-0 space-y-1.5">
                    <div
                      className={`
                        font-bold text-base transition-all duration-300
                        ${
                          selectedIndex === index
                            ? "text-foreground drop-shadow-sm"
                            : "text-muted-foreground group-hover:text-foreground"
                        }
                      `}
                    >
                      {project.title}
                    </div>
                    <div className="flex items-center gap-2 flex-wrap">
                      {project.tags.slice(0, 2).map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className={`
                            text-xs px-2 py-0.5 rounded-md font-medium transition-all duration-300
                            ${
                              selectedIndex === index
                                ? "bg-accent/20 text-accent border border-accent/30"
                                : "bg-muted/50 text-muted-foreground group-hover:bg-accent/10 group-hover:text-accent/80 border border-border/50"
                            }
                          `}
                        >
                          {tag}
                        </span>
                      ))}
                      {project.tags.length > 2 && (
                        <span
                          className={`
                            text-xs px-2 py-0.5 rounded-md font-medium transition-all duration-300
                            ${
                              selectedIndex === index
                                ? "text-muted-foreground"
                                : "text-muted-foreground/70"
                            }
                          `}
                        >
                          +{project.tags.length - 2}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Enhanced Hover glow effect */}
                  <div
                    className={`
                      absolute inset-0 rounded-xl opacity-0 transition-opacity duration-400
                      bg-gradient-to-r from-accent/10 via-accent/5 to-transparent
                      ${
                        selectedIndex === index
                          ? "opacity-100"
                          : "group-hover:opacity-60"
                      }
                    `}
                  />

                  {/* Enhanced 3D Depth Shadow & Glow */}
                  {selectedIndex === index && (
                    <>
                      <div
                        className="absolute -inset-2 bg-accent/20 blur-2xl rounded-xl opacity-60 -z-10 animate-pulse"
                        style={{
                          transform: "translateZ(-25px)",
                        }}
                      />
                      <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-accent/5 via-transparent to-transparent pointer-events-none" />
                    </>
                  )}

                  {/* Corner accent on active */}
                  {selectedIndex === index && (
                    <div className="absolute top-2 right-2 w-2 h-2 rounded-full bg-accent shadow-lg shadow-accent/50 animate-pulse" />
                  )}
                </button>
              ))}
            </div>

            {/* Right Side - 3D Card Preview */}
            <div
              className="relative"
              style={{
                perspective: "1200px",
                transformStyle: "preserve-3d",
              }}
            >
              <div
                key={selectedIndex}
                className="relative h-full"
                style={{
                  animation: "flipIn 0.6s ease-out",
                  transformStyle: "preserve-3d",
                }}
              >
                <Card className="overflow-hidden group border-2 border-accent/50 bg-card/90 backdrop-blur-sm shadow-2xl relative h-full">
                  {/* 3D gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-accent/10 via-transparent to-accent/5 pointer-events-none" />

                  {/* Project Image */}
                  <div className="aspect-video overflow-hidden bg-muted relative">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent z-10" />
                    <img
                      src={projects[selectedIndex].image || "/placeholder.svg"}
                      alt={`${projects[selectedIndex].title} - Detaylı proje ekran görüntüsü ve açıklama`}
                      width={1200}
                      height={675}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 flex items-center justify-center gap-4 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {projects[selectedIndex].github && (
                        <Button
                          variant="secondary"
                          size="sm"
                          className="gap-2 bg-background/90 backdrop-blur-sm hover:bg-background shadow-lg"
                          asChild
                        >
                          <a
                            href={projects[selectedIndex].github}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <Github className="h-4 w-4" />
                            Kod
                          </a>
                        </Button>
                      )}
                      {projects[selectedIndex].demo !== "#" &&
                        projects[selectedIndex].demo && (
                          <Button
                            variant="secondary"
                            size="sm"
                            className="gap-2 bg-background/90 backdrop-blur-sm hover:bg-background shadow-lg"
                            asChild
                          >
                            <a
                              href={projects[selectedIndex].demo}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <ExternalLink className="h-4 w-4" />
                              Demo
                            </a>
                          </Button>
                        )}
                    </div>
                  </div>

                  <CardHeader className="pb-3 relative z-10">
                    <CardTitle className="text-3xl text-accent mb-2">
                      {projects[selectedIndex].title}
                    </CardTitle>
                    <CardDescription className="text-base leading-relaxed pt-2">
                      {projects[selectedIndex].description}
                    </CardDescription>
                  </CardHeader>

                  <CardContent className="space-y-6 relative z-10">
                    <div className="flex flex-wrap gap-2">
                      {projects[selectedIndex].tags.map((tag, tagIndex) => (
                        <Badge
                          key={tagIndex}
                          variant="secondary"
                          className="text-xs font-medium bg-accent/10 text-accent border-accent/20"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>

                    <div className="flex items-center justify-end pt-4 border-t border-border/50">
                      <div className="flex gap-3">
                        {projects[selectedIndex].github && (
                          <Button
                            variant="outline"
                            size="sm"
                            className="gap-2 hover:bg-accent hover:text-accent-foreground transition-colors"
                            asChild
                          >
                            <a
                              href={projects[selectedIndex].github}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <Github className="h-4 w-4" />
                              GitHub
                            </a>
                          </Button>
                        )}
                        {projects[selectedIndex].demo !== "#" &&
                          projects[selectedIndex].demo && (
                            <Button
                              size="sm"
                              className="gap-2 bg-accent hover:bg-accent/90"
                              asChild
                            >
                              <a
                                href={projects[selectedIndex].demo}
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                <ExternalLink className="h-4 w-4" />
                                Canlı Demo
                              </a>
                            </Button>
                          )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
