import { ExternalLink } from "lucide-react";

const experiences = [
  {
    role: "Desarrollador FullStack Jr.",
    company: "Vasak Group",
    period: "Marzo 2024 — Febrero 2026",
    description:
      "Desarrollé interfaces de usuario interactivas utilizando Vue y React. Implementé diseños responsivos con Bootstrap, integré APIs para datos dinámicos, utilicé Next.js para aplicaciones web, y configuré WordPress según los requisitos del proyecto. También desarrollé funciones personalizadas y conecté aplicaciones front-end con back-end mediante llamadas a API.",
    technologies: ["Vue", "React", "Next.js", "WordPress", "Bootstrap", "APIs"],
  },
  {
    role: "Desarrollador FullStack",
    company: "Blue Latam",
    period: "Febrero 2024 — Abril 2024",
    description:
      "Durante un período de prácticas de tres meses, participé en el desarrollo de una aplicación diseñada para atender las necesidades específicas de los usuarios según su perfil. Mi responsabilidad principal consistió en la implementación y mejora continua de las funcionalidades del sistema, incluyendo la creación de componentes reutilizables y la identificación y solución de código mal estructurado.",
    technologies: ["React", "NestJS", "TypeScript", "SQL", "HTML", "CSS"],
  },
];

export function Experience() {
  return (
    <section id="experiencia" className="py-24 px-6 bg-muted/30">
      <div className="mx-auto max-w-5xl">
        <div className="grid md:grid-cols-[1fr,2fr] gap-12 md:gap-16">
          {/* Section Title */}
          <div>
            <h2 className="font-serif text-3xl font-semibold text-foreground mb-2 sticky top-24">
              Experiencia
            </h2>
            <div className="w-16 h-0.5 bg-primary" />
          </div>

          {/* Timeline */}
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <article
                key={index}
                className="relative pl-8 border-l-2 border-border"
              >
                <div className="absolute left-0 top-0 w-3 h-3 -translate-x-1.75 rounded-full bg-primary" />

                <div className="space-y-4">
                  <div>
                    <p className="text-sm text-primary font-medium tracking-wide mb-1">
                      {exp.period}
                    </p>
                    <h3 className="font-serif text-xl font-semibold text-foreground">
                      {exp.role}
                    </h3>
                    <p className="text-muted-foreground flex items-center gap-1">
                      {exp.company}
                      <ExternalLink size={14} className="opacity-50" />
                    </p>
                  </div>

                  <p className="text-muted-foreground leading-relaxed">
                    {exp.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-xs font-semibold bg-primary/10 text-primary rounded-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
