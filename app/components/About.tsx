export function About() {
  const technologies = [
    "HTML",
    "CSS",
    "JavaScript",
    "TypeScript",
    "React",
    "React Native",
    "Vue",
    "Next.js",
    "NestJS",
    "Node.js",
    "Tailwind CSS",
    "MongoDB",
    "SQLite",
    "Git",
    "GitHub",
    "Postman",
  ];
  const languages = [
    //{ language: "Español", level: "Nativo" },
    { language: "Inglés", level: "B1" },
  ];
  return (
    <section id="sobre-mi" className="py-24 px-6">
      <div className="mx-auto max-w-5xl">
        <div className="grid md:grid-cols-[1fr,2fr] gap-12 md:gap-16">
          {/* Section Title */}
          <div>
            <h2 className="font-serif text-3xl font-semibold text-foreground mb-2 sticky top-24">
              Sobre mí
            </h2>
            <div className="w-16 h-0.5 bg-primary" />
          </div>

          {/* Content */}
          <div className="space-y-8">
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-500 leading-relaxed text-lg">
                Soy desarrollador web freelance, egresado de varios cursos
                online y del bootcamp de Mindhub. Me apasiona transformar ideas
                en realidad y colaborar en equipos para alcanzar objetivos
                comunes.
              </p>
              <p className="text-gray-500 leading-relaxed text-lg">
                Mi enfoque se centra en crear soluciones innovadoras con un
                desarrollo FullStack completo, desde interfaces de usuario
                elegantes hasta arquitecturas de backend robustas. Siempre estoy
                en busca de nuevos desafíos y aprendizajes.
              </p>
            </div>

            {/* Languages */}
            <div>
              <h3 className="font-serif text-xl font-medium text-foreground mb-4">
                Idiomas
              </h3>
              <div className="flex flex-wrap gap-4">
                {languages.map((lang) => (
                  <div
                    key={lang.language}
                    className="px-4 py-2 bg-muted rounded-sm"
                  >
                    <span className="text-foreground font-medium">
                      {lang.language}
                    </span>
                    <span className="text-gray-500"> — {lang.level}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Technologies */}
            <div>
              <h3 className="font-serif text-xl font-medium text-foreground mb-4">
                Tecnologías
              </h3>
              <div className="flex flex-wrap gap-2">
                {technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1.5 text-sm bg-muted text-gray-500 hover:text-primary hover:bg-primary/10 rounded-sm transition-colors duration-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
