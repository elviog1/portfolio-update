import { FileText, Mail } from "lucide-react";
import Link from "next/link";
import React from "react";
import { FaGithub, FaLinkedin, FaMailBulk } from "react-icons/fa";

const socialLinks = [
  { icon: FaGithub, href: "https://github.com/elviog1", label: "Github" },
  {
    icon: FaLinkedin,
    href: "https://www.linkedin.com/in/elviogaleano-fullstack-developer/",
    label: "Linkedin",
  },
  {
    icon: FaMailBulk,
    href: "mailto:elvio.galeano827@gmail.com",
    label: "Email",
  },
];
export default function Hero() {
  return (
    <div
      id="inicio"
      className="min-h-screen flex items-center justify-center px-6 pt-20"
    >
      <div className="mx-auto max-w-3xl text-center">
        <p className="text-primary font-medium tracking-widest text-sm uppercase mb-4">
          Desarrollador FullStack
        </p>
        <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-semibold text-foreground leading-tight mb-6 text-balance">
          Hola, soy Elvio Galeano
        </h1>
        <p className="text-lg md:text-xl leading-relaxed max-w-2xl mx-auto mb-8 text-pretty text-gray-500">
          Desarrollador web y móvil especializado en crear productos digitales
          innovadores. Con experiencia en React, React Native y desarrollo
          FullStack, transformo ideas en soluciones funcionales y elegantes.
        </p>
        <div className="flex items-center justify-center gap-6 mb-10">
          {socialLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.label}
              className="p-3 hover:text-primary rounded-full transition-all duration-200"
            >
              <link.icon size={32} />
            </Link>
          ))}
        </div>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="#proyectos"
            className="px-8 py-3 bg-primary border-primary hover:border-white border font-medium rounded-sm hover:bg-primary/90 transition-colors duration-200"
          >
            Ver Proyectos
          </Link>
          <Link
            href="/Elvio_Galeano_CV_ES.pdf"
            download
            className="px-8 py-3 border hover:border-primary text-foreground font-medium rounded-sm hover:bg-muted transition-colors duration-200 inline-flex items-center gap-2"
          >
            <FileText size={18} />
            Descargar CV
          </Link>
        </div>
      </div>
    </div>
  );
}
