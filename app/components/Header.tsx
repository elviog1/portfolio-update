"use client";
import { Menu, X } from "lucide-react";
import React, { useEffect, useState } from "react";

const navItems = [
  { label: "Inicio", href: "#inicio" },
  { label: "Sobre mi", href: "#sobre-mi" },
  { label: "Experiencia", href: "#experiencia" },
  { label: "Proyectos", href: "#proyectos" },
  { label: "Contacto", href: "#contacto" },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "backdrop-blur-sm border-b border-gray-200 shadow-sm" : "bg-transparent"}`}
    >
      <div className="mx-auto max-w-5xl px-6 py-4">
        <nav className="flex items-center justify-between">
          <a
            href="#inicio"
            className="font-serif text-xl font-semibold text-white tracking-tight"
          >
            Elvio Galeano
          </a>
          {/* Desktop */}
          <ul className="hidden md:flex items-center gap-3">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="text-sm text-gray-500 hover:text-primary transition-colors duration-200 tracking-wide"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <button
            type="button"
            onClick={() => setIsMobileMenuOpen((prev) => !prev)}
            className="md:hidden p-2 text-white hover:text-primary transition-colors z-50 cursor-pointer"
            aria-label="Toggle Menu"
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>
      </div>
      {/* Mobile */}
      <div
        className={`md:hidden fixed inset-x-0 top-18  border-b border-gray-200 shadow-lg transition-all duration-300 ${isMobileMenuOpen ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 -translate-y-4 pointer-events-none"}`}
      >
        <ul className="flex flex-col py-4">
          {navItems.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block px-6 py-3 text-gray-500 hover:text-primary hover:bg-muted/50"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
