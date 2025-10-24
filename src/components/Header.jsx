import { Link, useLocation } from "react-router-dom";
import { asset } from "../utils/assets";

export default function Header() {
  const location = useLocation();

  const navItems = [
    { name: "Accueil", path: "/" },
    { name: "Forfaits", path: "/forfaits" },
    { name: "Galerie", path: "/galerie" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header className="bg-white shadow sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center h-16">
        {/* Logo + titre */}
        <Link to="/" className="flex items-center space-x-2">
          <img src={asset("logo.png")} alt="Logo Archeguin" className="h-10 w-10" />
          <span className="text-xl font-bold text-[#3B82F6]">Archeguin</span>
        </Link>

        {/* Navigation */}
        <nav className="flex items-center space-x-6">
          <div className="hidden md:flex space-x-6">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`font-medium transition ${
                  location.pathname === item.path
                    ? "text-[#3B82F6]"
                    : "text-gray-700 hover:text-[#3B82F6]"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Icône Facebook */}
          <a
            href="https://www.facebook.com/profile.php?id=100057619741791"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-[#3B82F6] transition"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M22 12c0-5.522-4.477-10-10-10S2 6.478 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.988h-2.54V12h2.54V9.797c0-2.507 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
            </svg>
          </a>
        </nav>
      </div>
    </header>
  );
}