import { Link } from "react-router-dom";
import { asset } from "../utils/assets";
import { site } from "../config/site";
import Button from "./Button";
import { FacebookIcon } from "./Icons";

export default function Footer() {
  return (
    <footer className="relative mt-auto overflow-hidden bg-[#17201a] text-white">
      {/* subtle lighting */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.06),transparent_30%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(165,106,67,0.10),transparent_35%)]" />

      <div className="section-shell relative z-10 py-12">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.8fr_0.8fr]">
          {/* branding */}
          <div>
            <div className="flex items-center gap-4">
              <img
                src={asset("logo.png")}
                alt="Logo Archeguin"
                className="h-14 w-14 rounded-full bg-white object-contain shadow-lg"
              />

              <div>
                <p className="text-xl font-black tracking-tight">
                  Club Archeguin
                </p>

                <p className="text-sm text-white/55">
                  Tir à l’arc · Saint-Romuald
                </p>
              </div>
            </div>

            <p className="mt-5 max-w-md leading-7 text-white/65">
              Un club accueillant pour découvrir, pratiquer et progresser au
              tir à l’arc dans une ambiance conviviale.
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              <Button to="/newsletter/subscribe" variant="light">
                Infolettre
              </Button>

              <Button
                to="/contact"
                variant="ghost"
                className="
                  border border-white/15
                  bg-white/[0.08]
                  text-white
                  hover:bg-white/[0.14]
                  hover:border-white/25
                  transition-all
                "
              >
                Contact
              </Button>
            </div>
          </div>

          {/* contact */}
          <div>
            <h3 className="font-black text-[#e8dcc7]">
              Nous joindre
            </h3>

            <div className="mt-4 grid gap-3 text-sm text-white/65">
              <a
                href={site.mapSearchUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-white"
              >
                {site.address}
              </a>

              <a
                href={`tel:${site.phoneHref}`}
                className="transition-colors hover:text-white"
              >
                {site.phone}
              </a>

              <a
                href={`mailto:${site.email}`}
                className="transition-colors hover:text-white"
              >
                {site.email}
              </a>
            </div>
          </div>

          {/* links */}
          <div>
            <h3 className="font-black text-[#e8dcc7]">
              Liens utiles
            </h3>

            <div className="mt-4 grid gap-3 text-sm text-white/65">
              <Link
                to="/forfaits"
                className="transition-colors hover:text-white"
              >
                Forfaits et formulaire
              </Link>

              <Link
                to="/galerie"
                className="transition-colors hover:text-white"
              >
                Galerie photo
              </Link>

              <a
                href={site.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 transition-colors hover:text-white"
              >
                <FacebookIcon className="h-4 w-4" />
                Facebook
              </a>

              <a
                href={site.googleReviewUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-white"
              >
                Laisser un avis Google
              </a>
            </div>
          </div>
        </div>

        {/* bottom bar */}
        <div className="mt-12 flex flex-col gap-3 border-t border-white/10 pt-6 text-xs text-white/40 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} Club de tir à l’arc Archeguin — Tous
            droits réservés
          </p>

          <p>
            Fait avec <span className="text-red-400">♥</span> par{" "}
            <a
              href="https://plumedours.github.io/portfolio/"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-white"
            >
              Maxime Bory
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}