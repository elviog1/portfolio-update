import { Mail, MessageCircle } from "lucide-react";
import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const contactLinks = [
  {
    icon: Mail,
    label: "Email",
    value: "elvio.galeano827@gmail.com",
    href: "mailto:elvio.galeano827@gmail.com",
  },
  {
    icon: FaLinkedin,
    label: "LinkedIn",
    value: "/elvio-galeano",
    href: "https://www.linkedin.com/in/elviogaleano-fullstack-developer/",
  },
  {
    icon: FaGithub,
    label: "GitHub",
    value: "/elviog1",
    href: "https://github.com/elviog1",
  },
  {
    icon: MessageCircle,
    label: "Discord",
    value: "ElvioGaleano#3886",
    href: "https://discord.com/users/elviogaleano",
  },
];

export function Contact() {
  return (
    <section id="contacto" className="py-24 px-6 bg-muted/30">
      <div className="mx-auto max-w-5xl">
        <div className="grid md:grid-cols-[1fr,2fr] gap-12 md:gap-16">
          {/* Section Title */}
          <div>
            <h2 className="font-serif text-3xl font-semibold text-foreground mb-2 sticky top-24">
              Contacto
            </h2>
            <div className="w-16 h-0.5 bg-primary" />
          </div>

          {/* Content */}
          <div className="space-y-8">
            <div>
              <p className="text-lg text-muted-foreground leading-relaxed mb-2">
                ¿Tienes un proyecto en mente o simplemente quieres saludar?
              </p>
              <p className="text-muted-foreground">
                Estoy siempre abierto a nuevas oportunidades y colaboraciones.
              </p>
            </div>

            <div className="space-y-4">
              {contactLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-2 bg-card border border-border rounded-sm hover:border-primary/50 hover:shadow-sm transition-all duration-200 group"
                >
                  <div className="p-2 bg-muted rounded-full group-hover:bg-primary/10 transition-colors">
                    <link.icon className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">
                      {link.label}
                    </p>
                    <p className="text-foreground font-medium">{link.value}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
