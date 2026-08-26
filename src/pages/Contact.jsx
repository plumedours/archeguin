import { Link } from "react-router-dom";
import Button from "../components/Button";
import SectionHeading from "../components/SectionHeading";
import { site } from "../config/site";
import {
  MapPin,
  Phone,
  Mail,
} from "lucide-react";

const contactCards = [
  {
    title: "Adresse",
    value: site.address,
    href: site.mapSearchUrl,
    icon: MapPin,
  },
  {
    title: "Téléphone",
    value: site.phone,
    href: `tel:${site.phoneHref}`,
    icon: Phone,
  },
  {
    title: "Courriel",
    value: site.email,
    href: `mailto:${site.email}`,
    icon: Mail,
  },
];

export default function Contact() {
  return (
    <section className="section-shell py-14 sm:py-20">
      <SectionHeading
        eyebrow="Contact"
        title="Une question ? Écrivez-nous."
      >
        Informations de pratique, accès au champ extérieur, activités de groupe
        ou inscription : l’équipe d’Archeguin vous répondra avec plaisir.
      </SectionHeading>

      <div className="mb-12 grid gap-5 md:grid-cols-3">
        {contactCards.map((card) => {
          const Icon = card.icon;

          return (
            <a
              key={card.title}
              href={card.href}
              target={card.href.startsWith("http") ? "_blank" : undefined}
              rel={card.href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="
                group
                rounded-[2rem]
                border
                border-[#18372b]/10
                bg-white
                p-7
                text-center
                shadow-sm
                transition-all
                hover:-translate-y-1
                hover:shadow-xl
                hover:shadow-[#18372b]/10
              "
            >
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-[#f6f4ee] transition-colors group-hover:bg-[#f3eadf]">
                <Icon
                  className="h-8 w-8 text-[#a56a43]"
                  strokeWidth={2.2}
                />
              </div>

              <h3 className="mt-5 text-xl font-black text-[#18372b]">
                {card.title}
              </h3>

              <p className="mt-3 leading-7 text-[#607066] transition-colors group-hover:text-[#18372b]">
                {card.value}
              </p>
            </a>
          );
        })}
      </div>

      <aside
        className="relative mb-12 overflow-hidden rounded-[2rem] border border-[#a56a43]/20 bg-[#fff7ea] p-6 shadow-sm sm:p-8"
        role="note"
      >
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(165,106,67,0.08),transparent_32%)]" />

        <div className="relative z-10">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-[#a56a43]">
            Informations pratiques
          </p>

          <h2 className="mt-3 text-2xl font-black text-[#18372b]">
            Quand et où pratiquer
          </h2>

          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {[
              {
                title: "Vendredi soir",
                time: "19h à 21h",
                text: "En salle, de l’automne au début du printemps.",
              },
              {
                title: "Mercredi soir",
                time: "19h30 à 21h",
                text: "Pour les membres et les archers autonomes avec leur matériel.",
              },
              {
                title: "Saison estivale",
                time: "Sur demande",
                text: "Champ extérieur à Saint-Lambert-de-Lauzon.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-[#a56a43]/15 bg-white/65 p-5 shadow-sm"
              >
                <p className="text-sm font-bold uppercase tracking-[0.16em] text-[#a56a43]">
                  {item.title}
                </p>

                <p className="mt-3 text-xl font-black text-[#18372b]">
                  {item.time}
                </p>

                <p className="mt-2 leading-7 text-[#607066]">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </aside>

      <div className="grid gap-8 lg:grid-cols-[0.42fr_0.58fr]">

        {/* left */}
        <div className="rounded-[2rem] border border-[#18372b]/10 bg-white p-6 shadow-sm sm:p-8 h-fit">
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#a56a43]">
            Message
          </p>

          <h2 className="mt-3 text-3xl font-black text-[#18372b]">
            Formulaire de contact
          </h2>

          <p className="mt-4 leading-7 text-[#607066]">
            Une question concernant nos activités, nos forfaits ou les inscriptions ?
            Écrivez-nous, notre équipe vous répondra avec plaisir.
          </p>

          <div className="mt-6 rounded-2xl bg-[#f6f4ee] p-5">
            <p className="font-black text-[#18372b]">
              Avant d’écrire
            </p>

            <p className="mt-2 text-sm leading-6 text-[#607066]">
              Les informations sur les tarifs, les horaires et les activités de groupe
              sont disponibles dans la page Forfaits.
            </p>
          </div>

          <div className="mt-6 flex flex-col gap-3">
            <Button to="/forfaits" variant="primary">
              Voir les forfaits
            </Button>

            <Button
              href={site.facebookUrl}
              target="_blank"
              rel="noopener noreferrer"
              variant="accent"
            >
              Suivre sur Facebook
            </Button>
          </div>

          <p className="mt-5 text-sm leading-6 text-[#607066]">
            Pour recevoir les nouvelles du club, vous pouvez aussi vous inscrire à
            l’infolettre.
          </p>
        </div>

        {/* right */}
        <div className="overflow-hidden rounded-[2rem] border border-[#18372b]/10 bg-white shadow-sm">
          <iframe
            title="Carte du club Archeguin"
            className="h-full min-h-[520px] w-full"
            src={site.mapEmbedUrl}
            allowFullScreen=""
            loading="lazy"
          />
        </div>
      </div>

      <div className="relative mt-10 overflow-hidden rounded-[2rem] bg-gradient-to-br from-[#10241c] via-[#34483f] to-[#b17a52] p-8 text-center text-white shadow-xl ring-1 ring-white/10">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.16),transparent_38%)]" />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(255,255,255,0.10),transparent_35%)]" />

        <div className="relative z-10">
          <h2 className="text-3xl font-black">
            Restez informé des nouvelles du club.
          </h2>

          <p className="mx-auto mt-3 max-w-2xl text-white/80">
            Suivez les activités, événements et annonces importantes du Club Archeguin grâce à notre infolettre et Facebook.
          </p>

          <div className="mt-7 flex flex-col justify-center gap-4 sm:flex-row sm:gap-5">
            <Button to="/newsletter/subscribe" variant="light">
              S’inscrire à l’infolettre
            </Button>

            <Button href={site.facebookUrl} target="_blank" rel="noopener noreferrer" variant="accent">
              Suivre sur Facebook
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
