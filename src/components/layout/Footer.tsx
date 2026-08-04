import { Link } from "react-router-dom";
import { footerColumns, legalLinks } from "../../data/footerLinks";
import { MaterialIcon } from "../ui/MaterialIcon";
import logoMark from "../../assets/logo-mark.png";

const socialIcons = ["public", "alternate_email"];

export function Footer() {
  return (
    <footer className="w-full py-16 px-margin-mobile md:px-margin-desktop flex flex-col md:flex-row md:items-start md:justify-between gap-10 md:gap-gutter-desktop bg-surface-container-lowest border-t border-outline-variant">
      <div className="flex flex-col gap-4 max-w-xs">
        <div className="flex items-center gap-3">
          <img src={logoMark} alt="AFRIDIGITAL" className="h-8 w-8 object-contain" />
          <span className="font-headline-md text-headline-md font-bold text-primary tracking-tight">
            AFRIDIGITAL
          </span>
        </div>
        <p className="font-body-md text-on-surface-variant">
          Leader de la transformation numérique en Afrique, alliant excellence technologique et
          connaissance du terrain.
        </p>
        <div className="flex gap-3">
          {socialIcons.map((icon) => (
            <a
              key={icon}
              href="#"
              className="w-8 h-8 rounded-full bg-surface-container-high flex items-center justify-center text-primary hover:bg-primary hover:text-on-primary transition-colors"
            >
              <MaterialIcon name={icon} className="text-[16px]" />
            </a>
          ))}
        </div>
      </div>

      <div className="flex flex-wrap gap-x-16 gap-y-8">
        {footerColumns.map((column) => (
          <div key={column.title} className="flex flex-col gap-3 min-w-[7rem]">
            <h4 className="font-label-sm text-label-sm text-primary font-bold uppercase">
              {column.title}
            </h4>
            {column.links.map((link) =>
              link.href.startsWith("/") ? (
                <Link
                  key={link.label}
                  to={link.href}
                  className="text-on-surface-variant hover:text-primary hover:underline transition-all"
                >
                  {link.label}
                </Link>
              ) : (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-on-surface-variant hover:text-primary hover:underline transition-all"
                >
                  {link.label}
                </a>
              ),
            )}
          </div>
        ))}
      </div>

      <div className="flex flex-col items-start gap-4 text-on-surface-variant font-body-md text-sm">
        <p>© {new Date().getFullYear()} AFRIDIGITAL. Modern African Excellence.</p>
        <div className="flex gap-6">
          {legalLinks.map((link) => (
            <a key={link.label} href={link.href} className="hover:text-primary hover:underline transition-all">
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
