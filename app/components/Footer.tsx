export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 px-6 border-t border-border">
      <div className="mx-auto max-w-5xl">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {currentYear} Elvio Galeano. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
