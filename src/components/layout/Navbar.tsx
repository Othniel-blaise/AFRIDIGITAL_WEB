import { useState } from "react";
import { NavLink as RouterNavLink } from "react-router-dom";
import { navLinks } from "../../data/navLinks";
import { useNavScroll } from "../../hooks/useNavScroll";
import { MaterialIcon } from "../ui/MaterialIcon";
import { Button } from "../ui/Button";
import logoMark from "../../assets/logo-mark.png";

export function Navbar() {
  const scrolled = useNavScroll();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 flex justify-between items-center px-margin-mobile md:px-margin-desktop py-4 max-w-full bg-surface/80 backdrop-blur-xl transition-shadow ${
        scrolled ? "shadow-md" : "shadow-sm"
      }`}
    >
      <RouterNavLink to="/" className="flex items-center gap-3" onClick={() => setMenuOpen(false)}>
        <img src={logoMark} alt="AFRIDIGITAL" className="h-10 w-10 object-contain" />
        <span className="font-headline-md text-headline-md font-bold text-primary tracking-tight">
          AFRIDIGITAL
        </span>
      </RouterNavLink>

      <div className="hidden md:flex items-center gap-8">
        {navLinks.map((link) => (
          <RouterNavLink
            key={link.path}
            to={link.path}
            className={({ isActive }) =>
              `font-body-md transition-colors hover:-translate-y-0.5 duration-200 ${
                isActive
                  ? "text-primary font-bold border-b-2 border-primary pb-1"
                  : "text-on-surface-variant hover:text-primary"
              }`
            }
          >
            {link.label}
          </RouterNavLink>
        ))}
      </div>

      <div className="flex items-center gap-4">
        <div className="hidden md:block">
          <Button to="/contact" size="md">
            Get Started
          </Button>
        </div>
        <button
          type="button"
          className="md:hidden text-primary"
          aria-label={menuOpen ? "Fermer le menu" : "Ouvrir le menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <MaterialIcon name={menuOpen ? "close" : "menu"} />
        </button>
      </div>

      {menuOpen && (
        <div className="absolute top-full left-0 w-full bg-surface shadow-lg md:hidden flex flex-col px-margin-mobile py-6 gap-4">
          {navLinks.map((link) => (
            <RouterNavLink
              key={link.path}
              to={link.path}
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) =>
                `font-body-md text-body-lg py-2 ${isActive ? "text-primary font-bold" : "text-on-surface-variant"}`
              }
            >
              {link.label}
            </RouterNavLink>
          ))}
          <div className="md:hidden">
            <Button to="/contact" size="md" onClick={() => setMenuOpen(false)} className="w-full">
              Get Started
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}
