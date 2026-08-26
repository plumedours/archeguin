import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Button from "../components/Button";
import SectionHeading from "../components/SectionHeading";
import { asset } from "../utils/assets";
import { usePublicJson } from "../utils/usePublicJson";

const fallbackPrices = {
  membershipPlans: [
    {
      name: "Adultes",
      subtitle: "18 ans et plus",
      price: "115 $",
      description: "Accès aux séances du club pendant la saison.",
    },
    {
      name: "Jeunes",
      subtitle: "12 à 17 ans",
      price: "75 $",
      description: "Même accès que les adultes à un tarif réduit.",
      highlight: true,
      badge: "Tarif avantage",
    },
    {
      name: "Enfants",
      subtitle: "Moins de 12 ans",
      price: "Gratuit* ou 75 $",
      description: "Gratuit si accompagné d’un adulte inscrit.",
    },
  ],
  dropIn: {
    title: "Séance ponctuelle / essai",
    price: "15 $",
    items: [
      "Durée maximale : 2 heures",
      "Matériel fourni",
      "Vendredi de 19h à 21h",
      "Aucune réservation nécessaire",
    ],
  },
  groups: {
    title: "Activité pour entreprises ou groupes",
    price: "12.50 $ par personne",
    items: [
      "Minimum : 15 personnes",
      "Maximum : 30 personnes",
      "Durée : environ 2 heures",
    ],
  },
  notes: [
    "Économisez 15 % pour 2 inscriptions ou plus à la même adresse.",
    "Des frais additionnels de 35 $ s’appliquent pour l’adhésion obligatoire à la fédération.",
  ],
};

const groupPhotos = ["photos/10.jpg", "photos/11.jpg", "photos/12.jpg", "photos/13.jpg"].map((src) =>
  asset(src)
);

export default function Forfaits() {
  const [open, setOpen] = useState(false);
  const { data: prices } = usePublicJson("data/forfaits.json", fallbackPrices);

  return (
    <main>
      <section className="section-shell py-14 sm:py-20">
        <SectionHeading eyebrow="Forfaits" title="Choisissez la formule qui vous convient.">
          Pratique régulière, séance d’essai ou activité de groupe : retrouvez ici les tarifs, les horaires et les informations utiles pour vous inscrire.
        </SectionHeading>

        {/* Intro / CTA */}
        <section className="relative mb-12 overflow-hidden rounded-[2rem] bg-gradient-to-br from-[#10241c] via-[#34483f] to-[#b17a52] p-8 text-white shadow-xl ring-1 ring-white/10 sm:p-10">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.16),transparent_36%)]" />
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(255,255,255,0.10),transparent_34%)]" />

          <div className="relative z-10 grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.28em] text-[#e8dcc7]">
                Inscription
              </p>

              <h2 className="mt-4 max-w-3xl text-3xl font-black tracking-tight sm:text-5xl">
                Tout ce qu’il faut pour commencer ou poursuivre votre pratique.
              </h2>

              <p className="mt-5 max-w-2xl text-lg leading-8 text-white/78">
                Les forfaits couvrent la pratique régulière au club. Vous pouvez aussi venir essayer le tir à l’arc lors d’une séance ponctuelle.
              </p>
            </div>

            <div className="rounded-[1.6rem] border border-white/10 bg-white/[0.08] p-6 backdrop-blur-sm">
              <p className="text-sm font-bold uppercase tracking-[0.22em] text-white/55">
                À prévoir
              </p>

              <ul className="mt-4 space-y-3 text-sm leading-6 text-white/78">
                <li>• Formulaire d’inscription disponible en PDF</li>
                <li>• Rabais familial pour 2 inscriptions ou plus</li>
                <li>• Frais de fédération applicables</li>
              </ul>

              <div className="mt-6">
                <Button href={asset("formulaire-inscription-archeguin.pdf")} download variant="light">
                  Télécharger le formulaire
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Horaire */}
        <section className="mb-12 rounded-[2rem] border border-[#18372b]/10 bg-white p-6 shadow-sm sm:p-8">
          <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#a56a43]">
                Horaire
              </p>

              <h2 className="mt-3 text-3xl font-black text-[#18372b]">
                Séances de la semaine
              </h2>

              <p className="mt-4 leading-7 text-[#607066]">
                Deux rendez-vous complémentaires selon votre niveau d’autonomie, votre équipement et votre objectif.
              </p>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <article className="rounded-[1.7rem] bg-[#f6f4ee] p-6 ring-1 ring-[#18372b]/5">
                <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#a56a43]">
                  Membres autonomes
                </p>

                <h3 className="mt-3 text-xl font-black text-[#18372b]">
                  Mercredi · 19h30 à 21h
                </h3>

                <p className="mt-3 leading-7 text-[#607066]">
                  Réservé aux membres et aux archers ayant leur propre matériel.
                </p>

                <ul className="mt-5 space-y-2 text-sm text-[#425047]">
                  <li>• Matériel du club non disponible</li>
                  <li>• Non-membres : 15 $</li>
                  <li>• Aucun encadrement</li>
                </ul>
              </article>

              <article className="relative overflow-hidden rounded-[1.7rem] bg-gradient-to-br from-[#18372b] to-[#2f4c40] p-6 text-white shadow-lg ring-1 ring-white/10">
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.12),transparent_35%)]" />

                <div className="relative z-10">
                  <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#e8dcc7]">
                    Découverte
                  </p>

                  <h3 className="mt-3 text-xl font-black">
                    Vendredi · 19h à 21h
                  </h3>

                  <p className="mt-3 leading-7 text-white/72">
                    Ouvert à tous, idéal pour découvrir le tir à l’arc.
                  </p>

                  <ul className="mt-5 space-y-2 text-sm text-white/78">
                    <li>• Membres ou visiteurs</li>
                    <li>• Non-membres : 15 $</li>
                    <li>• Matériel fourni selon disponibilité</li>
                  </ul>
                </div>
              </article>
            </div>
          </div>
        </section>

        {/* Abonnements */}
        <section className="mb-12">
          <div className="mb-6 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#a56a43]">
                Abonnements
              </p>

              <h2 className="mt-2 text-3xl font-black text-[#18372b]">
                Tarifs membres
              </h2>
            </div>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {prices.membershipPlans.map((plan) => (
              <article
                key={plan.name}
                className={`relative overflow-hidden rounded-[2rem] border p-7 shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl ${plan.highlight
                  ? "border-[#a56a43]/30 bg-gradient-to-br from-[#18372b] via-[#28483a] to-[#a56a43] text-white"
                  : "border-[#18372b]/10 bg-white text-[#18372b]"
                  }`}
              >
                {plan.highlight && (
                  <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.13),transparent_34%)]" />
                )}

                <div className="relative z-10">
                  {plan.badge && (
                    <span className="mb-5 inline-flex rounded-full bg-[#e8dcc7] px-3 py-1 text-xs font-bold text-[#18372b]">
                      {plan.badge}
                    </span>
                  )}

                  <p className={`text-sm font-bold uppercase tracking-[0.2em] ${plan.highlight ? "text-white/60" : "text-[#8a9a8f]"}`}>
                    {plan.subtitle}
                  </p>

                  <h3 className="mt-3 text-2xl font-black">{plan.name}</h3>

                  <p className={`my-6 text-4xl font-black ${plan.highlight ? "text-[#e8dcc7]" : "text-[#a56a43]"}`}>
                    {plan.price}
                  </p>

                  <p className={plan.highlight ? "leading-7 text-white/76" : "leading-7 text-[#607066]"}>
                    {plan.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Essai + groupes */}
        <section className="mb-12 grid gap-5 lg:grid-cols-2">
          <article className="rounded-[2rem] border border-[#18372b]/10 bg-white p-7 shadow-sm">
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#a56a43]">
              Essai
            </p>

            <h2 className="mt-3 text-3xl font-black text-[#18372b]">
              {prices.dropIn.title}
            </h2>

            <p className="mt-4 text-4xl font-black text-[#a56a43]">
              {prices.dropIn.price}
            </p>

            <ul className="mt-6 space-y-4 text-[#425047]">
              {prices.dropIn.items.map((item) => (
                <li key={item} className="flex gap-3 leading-7">
                  <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#a56a43]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </article>

          <article className="rounded-[2rem] border border-[#18372b]/10 bg-white p-7 shadow-sm">
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#a56a43]">
              Groupes
            </p>

            <h2 className="mt-3 text-3xl font-black text-[#18372b]">
              {prices.groups.title}
            </h2>

            <p className="mt-4 text-3xl font-black text-[#a56a43]">
              {prices.groups.price}
            </p>

            <ul className="mt-6 space-y-4 text-[#425047]">
              {prices.groups.items.map((item) => (
                <li key={item} className="flex gap-3 leading-7">
                  <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#a56a43]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </article>
        </section>

        {/* Activités privées */}
        <section className="relative mb-12 overflow-hidden rounded-[2rem] bg-gradient-to-br from-[#10241c] via-[#34483f] to-[#b17a52] p-6 text-white shadow-xl ring-1 ring-white/10 sm:p-8">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.14),transparent_34%)]" />
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(255,255,255,0.08),transparent_34%)]" />

          <div className="relative z-10 grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#e8dcc7]">
                Activités privées
              </p>

              <h2 className="mt-3 text-3xl font-black">
                Une activité originale pour votre groupe.
              </h2>

              <p className="mt-4 leading-7 text-white/76">
                La salle peut être réservée pour une initiation privée, selon la disponibilité et la saison.
              </p>

              <div className="mt-6">
                <Button to="/contact" variant="light">
                  Organiser une activité
                </Button>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-3">
              <button
                key="photos/10.jpg"
                type="button"
                onClick={() => setOpen(1)}
                className="focus-ring overflow-hidden rounded-3xl shadow-lg cursor-pointer"
              >
                <img
                  src="photos/10.jpg"
                  alt="Activité de groupe Archeguin"
                  loading="lazy"
                  className="aspect-[4/3] w-full object-cover transition duration-500 hover:scale-105"
                />
              </button>
            </div>
          </div>

          <Lightbox
            open={open !== false}
            index={open || 0}
            close={() => setOpen(false)}
            slides={groupPhotos.map((src) => ({ src }))}
          />
        </section>

        {/* Notes + inscription */}
        <section className="mb-12 grid gap-5 lg:grid-cols-[0.9fr_1.1fr]">
          <aside className="rounded-[2rem] border border-[#a56a43]/20 bg-[#fff7ea] p-6 shadow-sm sm:p-7">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-[#a56a43]">
              À savoir
            </p>

            <h2 className="mt-3 text-2xl font-black text-[#18372b]">
              Notes importantes
            </h2>

            <div className="mt-5 grid gap-4">
              {prices.notes.map((note) => (
                <div key={note} className="flex gap-3 leading-7 text-[#5d4938]">
                  <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#a56a43]" />
                  <p>{note}</p>
                </div>
              ))}
            </div>
          </aside>

          <footer className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-[#10241c] via-[#34483f] to-[#b17a52] p-8 text-white shadow-xl ring-1 ring-white/10 sm:p-9">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.16),transparent_36%)]" />
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(255,255,255,0.08),transparent_34%)]" />

            <div className="relative z-10">
              <p className="text-sm font-bold uppercase tracking-[0.22em] text-[#e8dcc7]">
                Inscription
              </p>

              <h2 className="mt-3 text-3xl font-black">
                Prêt à vous inscrire ?
              </h2>

              <p className="mt-4 max-w-2xl leading-7 text-white/78">
                Téléchargez le formulaire à l’avance pour gagner du temps à l’accueil,
                ou contactez-nous si vous avez une question avant de vous présenter.
              </p>

              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <Button
                  href={asset("formulaire-inscription-archeguin.pdf")}
                  download
                  variant="light"
                >
                  Télécharger le formulaire
                </Button>

                <Button to="/contact" variant="accent">
                  Nous contacter
                </Button>
              </div>

              <p className="mt-5 text-sm leading-6 text-white/65">
                Pour recevoir les nouvelles du club, vous pouvez aussi vous inscrire à
                l’infolettre depuis le menu principal.
              </p>
            </div>
          </footer>
        </section>
      </section>
    </main>
  );
}