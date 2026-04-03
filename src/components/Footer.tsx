const links = ["Sobre", "Carreiras", "Imprensa", "Segurança", "Termos de Uso", "Privacidade"];

const Footer = () => (
  <footer className="bg-dark-footer py-12 lg:py-16 px-4 lg:px-10">
    <div className="mx-auto max-w-[1400px] text-center">
      {/* Partner logos placeholder */}
      <div className="flex items-center justify-center gap-6 mb-10 flex-wrap">
        {["Visa", "Mastercard", "Apple Pay", "Google Pay"].map((p) => (
          <span
            key={p}
            className="text-sm font-semibold text-dark-text-muted/50 uppercase tracking-wider transition-all duration-300 hover:text-primary cursor-pointer"
          >
            {p}
          </span>
        ))}
      </div>

      {/* Links */}
      <div className="flex flex-wrap items-center justify-center gap-6 lg:gap-8 mb-6">
        {links.map((link) => (
          <a
            key={link}
            href={`#${link.toLowerCase()}`}
            className="text-sm text-dark-text-muted transition-colors duration-300 hover:text-primary"
          >
            {link}
          </a>
        ))}
      </div>

      {/* Copyright */}
      <div className="border-t border-dark-card pt-6">
        <p className="text-xs text-dark-text-muted/60">
          © 2024 Ainter. Todos os direitos reservados.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
