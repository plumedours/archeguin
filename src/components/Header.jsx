import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { asset } from "../utils/assets";
import { site } from "../config/site";
import Button from "./Button";
import { FacebookIcon, DiscordIcon } from "./Icons";

const navItems = [
  { name: "Accueil", path: "/" },
  { name: "Forfaits", path: "/forfaits" },
  { name: "Galerie", path: "/galerie" },
  { name: "Infolettre", path: "/newsletter/subscribe" },
  { name: "Contact", path: "/contact" },
];

export default function Header() {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const isActive = (path) => (path === "/" ? location.pathname === path : location.pathname.startsWith(path));
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="sticky top-0 z-50 border-b border-[#18372b]/10 bg-[#fbfaf7]/90 backdrop-blur-xl">
      <div className="section-shell flex h-20 items-center justify-between gap-4">
        <Link to="/" onClick={closeMenu} className="focus-ring flex items-center gap-3 rounded-full" aria-label="Accueil Archeguin">
          <img src={asset("logo.png")} alt="Logo Archeguin" className="h-12 w-12 rounded-full object-contain shadow-sm" />
          <span className="leading-tight">
            <span className="block text-lg font-black tracking-tight text-[#18372b]">Archeguin</span>
            <span className="hidden text-xs font-medium text-[#607066] sm:block">Club de tir à l’arc</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Navigation principale">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`focus-ring rounded-full px-4 py-2 text-sm font-bold transition ${
                isActive(item.path)
                  ? "bg-[#18372b] text-white shadow-sm"
                  : "text-[#314138] hover:bg-[#e8dcc7]/60 hover:text-[#18372b]"
              }`}
            >
              {item.name}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={site.facebookUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="focus-ring inline-flex h-11 w-11 items-center justify-center rounded-full border border-[#18372b]/10 bg-white text-[#18372b] transition hover:border-[#18372b]/25"
            aria-label="Facebook Archeguin"
          >
            <FacebookIcon />
          </a>
          <a
            href={site.discordUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="focus-ring inline-flex h-11 w-11 items-center justify-center rounded-full border border-[#18372b]/10 bg-white text-[#18372b] transition hover:border-[#18372b]/25"
            aria-label="Serveur Discord"
          >
            <DiscordIcon />
          </a>
          <Button to="/forfaits" variant="accent">S’inscrire</Button>
        </div>

        <button
          type="button"
          onClick={() => setIsMenuOpen((value) => !value)}
          className="focus-ring inline-flex h-11 w-11 items-center justify-center rounded-full border border-[#18372b]/10 bg-white text-[#18372b] lg:hidden"
          aria-expanded={isMenuOpen}
          aria-label="Ouvrir le menu"
        >
          <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            {isMenuOpen ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18 18 6M6 6l12 12" /> : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 7h16M4 12h16M4 17h16" />}
          </svg>
        </button>
      </div>

      {isMenuOpen && <div className="fixed inset-0 top-20 bg-[#17201a]/35 lg:hidden" onClick={closeMenu} aria-hidden="true" />}

      <div className={`absolute left-0 right-0 top-20 border-b border-[#18372b]/10 bg-[#fbfaf7] p-4 shadow-2xl transition lg:hidden ${isMenuOpen ? "block" : "hidden"}`}>
        <nav className="section-shell grid gap-2" aria-label="Navigation mobile">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              onClick={closeMenu}
              className={`rounded-2xl px-4 py-3 font-bold transition ${isActive(item.path) ? "bg-[#18372b] text-white" : "bg-white text-[#18372b]"}`}
            >
              {item.name}
            </Link>
          ))}
          <div className="grid grid-cols-2 gap-2 pt-2">
            <Button to="/forfaits" variant="accent" onClick={closeMenu}>S’inscrire</Button>
            <Button href={site.facebookUrl} target="_blank" rel="noopener noreferrer" variant="ghost">Facebook</Button>
          </div>
        </nav>
      </div>
    </header>
  );
}
