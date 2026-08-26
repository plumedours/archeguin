import { asset } from "../utils/assets";
import { site } from "../config/site";
import Button from "./Button";
import { useSeasonStatus } from "./SeasonStatusBanner";
import {
  CalendarDays,
  BadgeDollarSign,
  ShieldCheck,
} from "lucide-react";


export default function Hero() {
  const { isOpen, content: seasonContent } = useSeasonStatus();

  const visitCards = [
    {
      icon: CalendarDays,
      title: isOpen ? "Vendredi soir" : "Reprise en octobre",
      text: isOpen ? "Séance ouverte aux visiteurs" : "La salle est fermée pendant l’été",
    },
    {
      icon: BadgeDollarSign,
      title: "15 $",
      text: isOpen ? "Séance de 19 h à 21 h" : "Tarif applicable à la reprise des séances",
    },
    {
      icon: ShieldCheck,
      title: isOpen ? "Matériel fourni" : "Champ extérieur",
      text: isOpen ? "Selon disponibilité" : "Accessible aux membres sur demande",
    },
  ];

  return (
    <section className="relative isolate overflow-hidden bg-[#17201a] text-white">
      <div className="absolute inset-0 -z-10">
        <img src={asset("photos/salle.jpg")} alt="Salle de tir du club Archeguin" className="h-full w-full object-cover opacity-28" />
        <div className="absolute inset-0 bg-gradient-to-br from-[#17201a] via-[#18372b]/92 to-[#a56a43]/55" />
      </div>
      <div className="section-shell grid min-h-[680px] items-center gap-12 py-16 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <p className="mb-5 inline-flex rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-bold text-[#f2e7d5] backdrop-blur">
            Tir à l’arc · Saint-Romuald
          </p>
          <h1 className="max-w-4xl text-5xl font-black tracking-tight sm:text-6xl lg:text-7xl">
            Visez juste, dans un club simple et accueillant.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-white/78 sm:text-xl">
            {site.description}
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Button to="/forfaits" variant="accent" arrow>Voir les forfaits</Button>
            <Button to="/newsletter/subscribe" variant="light">Recevoir l’infolettre</Button>
          </div>
        </div>

        <div className="relative overflow-hidden rounded-[2rem] border border-white/20 bg-white/85 p-6 text-[#18372b] shadow-2xl shadow-black/20 backdrop-blur-xl">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.75),transparent_35%)]" />

          <div className="relative z-10">
            <div className="flex items-center gap-4">
              <img
                src={asset("logo.png")}
                alt="Logo Archeguin"
                className="h-20 w-20 rounded-full bg-white object-contain p-2 shadow-lg"
              />

              <div>
                <p className={`text-sm font-bold uppercase tracking-[0.22em] ${isOpen ? "text-emerald-700" : "text-[#a56a43]"}`}>
                  {seasonContent.statusLabel}
                </p>
                <h2 className="mt-1 text-2xl font-black">
                  {seasonContent.title}
                </h2>
              </div>
            </div>

            <p className="mt-5 leading-7 text-[#607066]">
              {seasonContent.message}
            </p>

            <div className="mt-6 grid gap-3">
              {visitCards.map((card) => {
                const Icon = card.icon;

                return (
                  <div
                    key={card.title}
                    className="flex items-center gap-4 rounded-2xl border border-[#18372b]/10 bg-white/75 p-4 shadow-sm"
                  >
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#f6f4ee]">
                      <Icon className="h-5 w-5 text-[#a56a43]" strokeWidth={2.2} />
                    </div>

                    <div>
                      <p className="text-sm font-black text-[#18372b]">
                        {card.title}
                      </p>

                      <p className="mt-0.5 text-sm leading-6 text-[#607066]">
                        {card.text}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Button to="/forfaits" variant="primary" className="w-full">
                Voir les tarifs
              </Button>

              <Button to="/contact" variant="ghost" className="w-full">
                Poser une question
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
