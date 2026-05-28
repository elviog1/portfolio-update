"use client";

import { useState } from "react";
import {
  ExternalLink,
  Smartphone,
  ChevronDown,
  ChevronUp,
  Download,
  Shield,
  Settings,
  CheckCircle2,
} from "lucide-react";
import Image from "next/image";
import { FaGithub } from "react-icons/fa";

interface Project {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
  isMobile?: boolean;
  apkUrl?: string;
}

const projects: Project[] = [
  {
    title: "Login App",
    description:
      "Aplicación con autenticación segura que permite a los usuarios crear, gestionar y visualizar árboles genealógicos interactivos. Diseñada con foco en data modeling, user experience y visualización dinámica, ofrece una interfaz intuitiva para organizar información familiar y explorar conexiones entre generaciones.",
    image: "/images/tree.png",
    technologies: [
      "React Native",
      "Expo",
      "Appwrite",
      "TypeScript",
      "Tailwind CSS",
    ],
    isMobile: true,
    apkUrl: "/apk/login-app.apk",
  },
  {
    title: "Marking App",
    description:
      "Herramienta interactiva con login seguro que permite marcar puntos en mapas con títulos y descripciones, ofreciendo una experiencia de geolocalización personalizada. Combina map rendering, CRUD operations y UI intuitiva para organizar información geográfica de manera práctica.",
    image: "/images/marking-app.png",
    technologies: [
      "React Native",
      "Expo",
      "Appwrite",
      "TypeScript",
      "Tailwind CSS",
    ],
    isMobile: true,
    apkUrl: "/apk/marking-app.apk",
  },
  {
    title: "Dulces Tentación",
    description:
      "Ecommerce interactivo de una pastelera que ofrece productos de pastelería y repostería artesanal, junto con talleres presenciales y online. Diseñado con enfoque en experiencia de usuario, gestión de pedidos y visualización atractiva de productos, permite explorar el catálogo, realizar compras seguras y reservar talleres de manera intuitiva.",
    image: "/images/logo-tentacion.png",
    technologies: ["React", "Next.js", "Tailwind CSS"],
    liveUrl: "https://dulcestentacion-front.vercel.app/",
  },
  {
    title: "Escuela Tigres del Sur",
    description:
      "Plataforma interactiva de una escuela de kung fu que incluye dos juegos educativos: el primero consiste en adivinar el nombre de la postura según la imagen, y el segundo en ordenar los nombres de las formas según su nivel y cinta.",
    image: "/images/tigres-del-sur.png",
    technologies: ["React", "Next.js", "Tailwind CSS"],
    liveUrl: "https://tigresdelsur.vercel.app/",
  },
];

const installationSteps = [
  {
    step: 1,
    title: "Descargar el archivo APK",
    description:
      'Haz clic en el botón "Descargar APK" del proyecto que deseas instalar.',
    icon: Download,
  },
  {
    step: 2,
    title: "Habilitar fuentes desconocidas",
    description:
      'Ve a Configuración > Seguridad > Habilitar "Instalar apps de fuentes desconocidas" o permite la instalación cuando tu dispositivo lo solicite.',
    icon: Shield,
  },
  {
    step: 3,
    title: "Instalar la aplicación",
    description:
      "Abre el archivo APK descargado desde tu gestor de archivos o notificaciones y sigue las instrucciones de instalación.",
    icon: Settings,
  },
  {
    step: 4,
    title: "¡Listo para usar!",
    description:
      "Una vez instalada, encontrarás la aplicación en tu menú de apps. ¡Disfruta!",
    icon: CheckCircle2,
  },
];

function ProjectCard({ project }: { project: Project }) {
  const [showInstallGuide, setShowInstallGuide] = useState(false);

  return (
    <article className="group bg-card border border-border rounded-sm overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <div className="relative h-48 bg-muted overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          fill
          sizes="
            (max-width: 768px) 100vw,
            (max-width: 1024px) 50vw,
            33vw
          "
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
        {project.isMobile && (
          <div className="absolute top-3 right-3 px-2 py-1 bg-primary text-primary-foreground text-xs font-medium rounded-sm flex items-center gap-1">
            <Smartphone size={12} />
            Móvil
          </div>
        )}
      </div>

      <div className="p-6 space-y-4">
        <div>
          <h3 className="font-serif text-xl font-semibold text-foreground mb-2">
            {project.title}
          </h3>
          <p className="text-muted-foreground text-sm leading-relaxed">
            {project.description}
          </p>
        </div>

        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="px-2 py-1 text-xs bg-muted text-muted-foreground rounded-sm"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex items-center gap-3 pt-2">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-sm text-primary hover:underline"
            >
              <ExternalLink size={14} />
              Ver proyecto
            </a>
          )}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              <FaGithub size={14} />
              Código
            </a>
          )}
        </div>

        {/* Mobile App Installation */}
        {project.isMobile && project.apkUrl && (
          <div className="pt-4 border-t border-border space-y-4">
            <div className="flex items-center justify-between">
              <a
                href={project.apkUrl}
                className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground text-sm font-medium rounded-sm hover:bg-primary/90 transition-colors"
              >
                <Download size={16} />
                Descargar APK
              </a>
            </div>
          </div>
        )}
      </div>
    </article>
  );
}

export function Projects() {
  return (
    <section id="proyectos" className="py-24 px-6">
      <div className="mx-auto max-w-5xl">
        <div className="mb-16">
          <h2 className="font-serif text-3xl font-semibold text-foreground mb-2">
            Proyectos
          </h2>
          <div className="w-16 h-0.5 bg-primary mb-6" />
          <p className="text-muted-foreground max-w-2xl">
            Una selección de mis proyectos más recientes. Para las aplicaciones
            móviles, puedes descargar el APK directamente y seguir la guía de
            instalación.
          </p>
        </div>

        {/* Installation Guide Banner */}
        <div className="mb-12 p-6 bg-muted/50 border border-border rounded-sm">
          <div className="flex flex-col items-start gap-4 sm:flex-row">
            <div className="p-3 bg-primary/10 rounded-full">
              <Smartphone className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h3 className="font-serif text-lg font-semibold text-foreground mb-2">
                Instalación de Apps Móviles
              </h3>
              <p className="text-muted-foreground text-sm mb-4">
                Mis aplicaciones móviles están desarrolladas con React Native.
                Para instalarlas en tu dispositivo Android, sigue estos pasos:
              </p>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {installationSteps.map((step) => (
                  <div
                    key={step.step}
                    className="flex flex-col items-center text-center p-4 bg-card rounded-sm"
                  >
                    <div className="p-2 bg-primary/10 rounded-full mb-3">
                      <step.icon className="w-5 h-5 text-primary" />
                    </div>
                    <span className="text-xs font-medium text-primary mb-1">
                      Paso {step.step}
                    </span>
                    <p className="text-xs text-foreground font-medium mb-1">
                      {step.title}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {step.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
