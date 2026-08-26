import { Link } from "react-router-dom";
import Hero from "../components/Hero";
import Button from "../components/Button";
import SectionHeading from "../components/SectionHeading";
import SeasonStatusBanner from "../components/SeasonStatusBanner";
import { asset } from "../utils/assets";
import { site } from "../config/site";

import {
  Target,
  Trees,
  UsersRound,
  MapPin,
  Calendar,
  Users,
  Sun,
  Sparkles,
} from "lucide-react";

const features = [
  {
    icon: Target,
    title: "Découverte & entraide",
    text: "Un club accessible, où les membres partagent leurs conseils et accompagnent les nouveaux sans pression.",
  },
  {
    icon: Trees,
    title: "Pratique en saison",
    text: "Salle intérieure pendant la saison froide et champ de tir extérieur disponible l’été sur demande.",
  },
  {
    icon: UsersRound,
    title: "Ambiance amicale",
    text: "Un groupe convivial pour tirer quelques flèches, progresser à son rythme et passer un bon moment.",
  },
];

const whyJoinUs = [
  {
    icon: Sparkles,
    title: "Accessible à tous",
    text: "Débutants ou confirmés, chacun trouve sa place dans une ambiance bienveillante.",
  },
  {
    icon: Calendar,
    title: "Horaires flexibles",
    text: "Des séances régulières adaptées à différents rythmes de vie.",
  },
  {
    icon: Users,
    title: "Communauté active",
    text: "Des membres passionnés qui partagent conseils et encouragements.",
  },
];

export default function Home() {
  return (
    <>
      <Hero />

      <section className="section-shell pt-8 sm:pt-10">
        <SeasonStatusBanner />
      </section>

      <section className="section-shell py-18 sm:py-24">
        <div className="grid items-center gap-10 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="relative">
            <img src={asset("photos/salle.jpg")} alt="Salle intérieure du club Archeguin" loading="lazy" className="aspect-[4/3] w-full rounded-[2rem] object-cover shadow-2xl shadow-[#18372b]/15" />
            <div className="absolute -bottom-5 left-5 right-5 rounded-3xl border border-white/70 bg-white/85 p-4 shadow-xl backdrop-blur">
              <p className="text-sm font-bold text-[#18372b]">Salle intérieure à Saint-Romuald</p>
              <p className="text-sm text-[#607066]">Automne au début du printemps</p>
            </div>
          </div>

          <div>
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.28em] text-[#a56a43]">Depuis plus de 40 ans</p>
            <h2 className="text-4xl font-black tracking-tight text-[#18372b] sm:text-5xl">Un club de tir à l’arc accueillant et bien ancré.</h2>
            <div className="mt-6 space-y-5 text-lg leading-8 text-[#425047]">
              <p>
                Archeguin réunit des passionnés à Saint-Romuald. On y pratique pour le plaisir, on progresse à son rythme et on partage des conseils entre membres.
              </p>
              <p>
                Pendant la saison froide, les séances se déroulent en salle. L’été, lorsque la salle est fermée, un champ de tir extérieur à Saint-Étienne-de-Lauzon est disponible sur demande.
              </p>
            </div>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button to="/forfaits" variant="primary" arrow>Consulter les forfaits</Button>
              <Button to="/contact" variant="ghost">Demander les modalités</Button>
            </div>
          </div>
        </div>
      </section>

      <section className="section-shell pb-8">
        <div className="grid gap-4 sm:grid-cols-3">
          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <article
                key={feature.title}
                className="rounded-[2rem] border border-[#18372b]/10 bg-white p-8 shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#f6f4ee]">
                  <Icon className="h-7 w-7 text-[#a56a43]" strokeWidth={2.2} />
                </div>

                <h3 className="mt-6 text-2xl font-black text-[#18372b]">
                  {feature.title}
                </h3>

                <p className="mt-4 leading-8 text-[#607066]">
                  {feature.text}
                </p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="section-shell py-18 sm:py-24">
        <SectionHeading eyebrow="Pourquoi nous rejoindre" title="Une ambiance conviviale, accessible et sécuritaire.">
          Que vous veniez essayer, pratiquer régulièrement ou organiser une activité de groupe, tout est pensé pour rendre l’expérience simple et agréable.
        </SectionHeading>
        <div className="grid gap-5 md:grid-cols-3">
          {whyJoinUs.map((item) => {
            const Icon = item.icon;
            return (
              <article key={item.title} className="rounded-[2rem] border border-[#18372b]/10 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-xl hover:shadow-[#18372b]/10">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#f6f4ee]">
                  <Icon className="h-7 w-7 text-[#a56a43]" strokeWidth={2.2} />
                </div>
                <h3 className="mt-5 text-xl font-black text-[#18372b]">{item.title}</h3>
                <p className="mt-3 leading-7 text-[#607066]">{item.text}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#143427] py-18 text-white sm:py-24">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.08),transparent_32%)]" />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(177,122,82,0.16),transparent_38%)]" />

        <div className="section-shell relative z-10 grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.28em] text-[#e8dcc7]">
              Où pratiquer
            </p>

            <h2 className="text-4xl font-black tracking-tight sm:text-5xl">
              Deux lieux selon les saisons.
            </h2>

            <p className="mt-5 max-w-xl text-lg leading-8 text-white/75">
              Nous organisons la pratique selon la période de l’année : à l’intérieur pendant la saison froide, puis à l’extérieur durant l’été.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-[2rem] border border-white/10 bg-white/[0.08] p-6 shadow-xl backdrop-blur-sm transition-all hover:-translate-y-1 hover:bg-white/[0.11]">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/10">
                <MapPin className="h-6 w-6 text-[#e8dcc7]" />
              </div>
              <h3 className="mt-4 text-xl font-black text-white">
                Salle intérieure
              </h3>

              <p className="mt-2 leading-7 text-white/68">
                Saint-Romuald · automne au début du printemps
              </p>

              <ul className="mt-5 space-y-3 text-sm text-white/78">
                <li>• Pratique à l’abri</li>
                <li>• Séances conviviales</li>
                <li>• Vendredi accessible aux visiteurs</li>
              </ul>
            </div>

            <div className="rounded-[2rem] border border-white/10 bg-white/[0.08] p-6 shadow-xl backdrop-blur-sm transition-all hover:-translate-y-1 hover:bg-white/[0.11]">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/10">
                <Sun className="h-6 w-6 text-[#e8dcc7]" />
              </div>
              <h3 className="mt-4 text-xl font-black text-white">
                Champ extérieur
              </h3>

              <p className="mt-2 leading-7 text-white/68">
                Saint-Étienne-de-Lauzon · été
              </p>

              <ul className="mt-5 space-y-3 text-sm text-white/78">
                <li>• Accès sur demande</li>
                <li>• Plein air</li>
                <li>• Modalités transmises par le club</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section-shell py-18 sm:py-24">
        <div className="grid items-end gap-6 sm:grid-cols-[1fr_auto]">
          <SectionHeading eyebrow="Galerie" title="Un aperçu de nos activités" align="left">
            Une présentation plus visuelle, avec lightbox, pour mieux mettre les photos du club en valeur.
          </SectionHeading>
          <Button className="mb-5" to="/galerie" variant="ghost" arrow>Voir la galerie</Button>
        </div>
        <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
          {["photos/03.jpg", "photos/07.jpg", "photos/09.jpg", "photos/06.jpg"].map((photo, index) => (
            <Link key={photo} to="/galerie" className={`group overflow-hidden rounded-3xl shadow-sm ${index === 0 ? "md:row-span-2" : ""}`}>
              <img src={asset(photo)} alt="Aperçu de la galerie Archeguin" loading="lazy" className="h-full min-h-44 w-full object-cover transition duration-500 group-hover:scale-105" />
            </Link>
          ))}
        </div>
      </section>

      <section className="section-shell pb-18 sm:pb-24">
        <div className="grid gap-5 lg:grid-cols-3">

          {/* newsletter */}
          <div
            className="
        relative
        overflow-hidden
        rounded-[2rem]
        bg-gradient-to-br
        from-[#9d633d]
        via-[#b17349]
        to-[#c08a62]
        p-8
        text-white
        shadow-xl
        ring-1
        ring-white/10
        lg:col-span-2
      "
          >
            {/* lighting */}
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.18),transparent_32%)]" />

            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(255,255,255,0.08),transparent_30%)]" />

            <div className="relative z-10">
              <p className="text-sm font-bold uppercase tracking-[0.28em] text-white/70">
                Infolettre
              </p>

              <h2 className="mt-4 text-3xl font-black sm:text-4xl">
                Recevez les nouvelles importantes du club.
              </h2>

              <p className="mt-4 max-w-2xl leading-7 text-white/85">
                Activités, communications, rappels de saison et informations utiles directement par courriel.
              </p>

              <div className="mt-7">
                <Button to="/newsletter/subscribe" variant="light">
                  S’inscrire à l’infolettre
                </Button>
              </div>
            </div>
          </div>

          {/* social */}
          <div
            className="
        relative
        overflow-hidden
        rounded-[2rem]
        border
        border-[#18372b]/10
        bg-white
        p-8
        shadow-sm
      "
          >
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(24,55,43,0.05),transparent_28%)]" />

            <div className="relative z-10">
              <h3 className="text-xl font-black text-[#18372b]">
                Restez connecté
              </h3>

              <p className="mt-3 leading-7 text-[#607066]">
                Suivez les publications du club et laissez un avis après votre passage.
              </p>

              <div className="mt-6 grid gap-3">
                <Button
                  href={site.facebookUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="primary"
                >
                  Facebook
                </Button>

                <Button
                  href={site.googleReviewUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="ghost"
                >
                  Avis Google
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}