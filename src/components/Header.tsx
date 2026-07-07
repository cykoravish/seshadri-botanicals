import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X, Leaf } from "lucide-react";

const NAV_LINKS = [
  { label: "Home", to: "/" },
  { label: "Shop All", to: "/shop" },
  { label: "About", to: "/about" },
  { label: "Contact", to: "/contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  const linkClass = ({ isActive }: { isActive: boolean }) =>
    `text-sm transition-colors hover:text-brand-cream ${
      isActive ? "text-brand-cream" : "text-brand-cream/80"
    }`;

  return (
    <header className="sticky top-0 z-50 relative border-b border-white/10 bg-brand-dark/95 backdrop-blur supports-backdrop-blur:bg-brand-dark/80">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link
          to="/"
          className="flex items-center gap-2 font-display text-lg font-medium tracking-wide text-brand-cream"
        >
          <Leaf
            className="h-5 w-5 text-brand-olive"
            strokeWidth={1.75}
            aria-hidden="true"
          />
          Seshadri Botanicals
        </Link>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Primary">
          {NAV_LINKS.map((link) => (
            <NavLink key={link.to} to={link.to} className={linkClass}>
              {link.label}
            </NavLink>
          ))}
        </nav>

        <Link
          to="/contact"
          className="hidden rounded-full bg-brand-olive px-5 py-2 text-sm font-medium text-brand-dark transition-colors hover:bg-brand-cream md:inline-block"
        >
          Get a Quote
        </Link>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          className="inline-flex items-center justify-center rounded-md p-2 text-brand-cream md:hidden"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      <div
        id="mobile-menu"
        className={`absolute left-0 right-0 top-full grid overflow-hidden bg-brand-dark shadow-lg transition-all duration-300 ease-in-out md:hidden ${
          open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <nav
          aria-label="Primary"
          className="overflow-hidden border-t border-white/10 px-4 pb-6 pt-2"
        >
          <ul className="flex flex-col gap-1">
            {NAV_LINKS.map((link, i) => (
              <li
                key={link.to}
                className={`transition-all duration-300 ease-out ${
                  open
                    ? "translate-y-0 opacity-100"
                    : "-translate-y-1 opacity-0"
                }`}
                style={{ transitionDelay: open ? `${i * 50}ms` : "0ms" }}
              >
                <NavLink
                  to={link.to}
                  onClick={() => setOpen(false)}
                  className="block rounded-md px-2 py-3 text-brand-cream/90 hover:bg-white/5"
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
            <li
              className={`mt-2 transition-all duration-300 ease-out ${
                open ? "translate-y-0 opacity-100" : "-translate-y-1 opacity-0"
              }`}
              style={{
                transitionDelay: open ? `${NAV_LINKS.length * 50}ms` : "0ms",
              }}
            >
              <Link
                to="/contact"
                onClick={() => setOpen(false)}
                className="block rounded-full bg-brand-olive px-4 py-3 text-center font-medium text-brand-dark"
              >
                Get a Quote
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
