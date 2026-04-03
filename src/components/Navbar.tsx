import { useState } from "react";
import { Menu, X, Search } from "lucide-react";

const navItems = ["Produtos", "Shopping", "Cartão", "Comunidade"];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav
      className="sticky top-0 z-50 bg-background shadow-[0_2px_8px_rgba(0,0,0,0.06)]"
      aria-label="Navegação principal"
    >
      <div className="mx-auto flex h-[60px] max-w-[1400px] items-center justify-between px-4 lg:px-10">
        {/* Logo */}
        <span className="text-2xl font-bold text-primary mr-12 select-none">ainter</span>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-8 flex-1">
          {navItems.map((item) => (
            <li key={item}>
              <a
                href={`#${item.toLowerCase()}`}
                className="text-sm font-medium text-foreground transition-colors duration-200 hover:text-primary"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-4">
          <button aria-label="Buscar" className="text-foreground hover:text-primary transition-colors">
            <Search size={20} />
          </button>
          <a
            href="#conta"
            className="hidden md:inline-block rounded-4xl bg-foreground px-6 py-2.5 text-sm font-semibold text-background transition-all duration-300 hover:bg-primary"
          >
            Abra sua conta
          </a>
          {/* Hamburger */}
          <button
            className="md:hidden text-foreground"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? "Fechar menu" : "Abrir menu"}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-background border-t border-border px-4 py-4 animate-fade-in">
          <ul className="flex flex-col gap-4">
            {navItems.map((item) => (
              <li key={item}>
                <a
                  href={`#${item.toLowerCase()}`}
                  className="block text-base font-medium text-foreground hover:text-primary"
                  onClick={() => setMobileOpen(false)}
                >
                  {item}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#conta"
                className="block w-full text-center rounded-4xl bg-foreground px-6 py-3 text-sm font-semibold text-background hover:bg-primary transition-colors"
              >
                Abra sua conta
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
