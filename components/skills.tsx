import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Code2, Database, Layout, Smartphone } from "lucide-react";

const skillCategories = [
  {
    title: "Frontend",
    icon: Layout,
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "HTML/CSS"],
  },
  {
    title: "Backend",
    icon: Code2,
    skills: [
      ".NET",
      "C#",
      "ASP.NET Core",
      "REST API",
      "Entity Framework",
      "Node.js",
    ],
  },
  {
    title: "Database",
    icon: Database,
    skills: ["SQL Server", "PostgreSQL", "MongoDB", "Redis"],
  },
  {
    title: "Mobile & Diğer",
    icon: Smartphone,
    skills: ["Cypress", "Manuel Test", "Postman", "Git", "Docker", "CI/CD"],
  },
];

export function Skills() {
  return (
    <section
      id="skills"
      className="py-24 px-4 bg-gradient-to-b from-background to-muted/30"
    >
      <div className="max-w-7xl mx-auto">
        <div className="space-y-12">
          <div className="space-y-4 text-center md:text-left">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-balance">
              Yetenekler
            </h2>
            <div className="h-1 w-24 bg-accent rounded-full mx-auto md:mx-0" />
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto md:mx-0 pt-4">
              Kullandığım teknolojiler ve araçlar. Sürekli öğrenmeye ve kendimi
              geliştirmeye devam ediyorum.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skillCategories.map((category, index) => {
              const Icon = category.icon;
              return (
                <Card
                  key={index}
                  className="hover:shadow-xl hover:border-accent/50 transition-all duration-300 hover:-translate-y-1 border-2 group"
                >
                  <CardHeader className="pb-4">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-3 rounded-xl bg-accent/10 group-hover:bg-accent/20 transition-colors">
                        <Icon className="h-6 w-6 text-accent" />
                      </div>
                      <CardTitle className="text-xl">
                        {category.title}
                      </CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {category.skills.map((skill, skillIndex) => (
                        <li
                          key={skillIndex}
                          className="text-sm md:text-base text-muted-foreground flex items-center gap-3 group-hover:text-foreground transition-colors"
                        >
                          <div className="h-2 w-2 rounded-full bg-accent flex-shrink-0 group-hover:scale-125 transition-transform" />
                          {skill}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
