import { useState } from "react";
import { Link } from "react-router-dom";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { asset } from "../utils/assets";

export default function Forfaits() {
  const [open, setOpen] = useState(false);
  const photos = [
    asset("photos/10.jpg"),
    asset("photos/11.jpg"),
    asset("photos/12.jpg"),
    asset("photos/13.jpg"),
  ];

  return (
    <section className="max-w-7xl mx-auto p-8">

      {/* En-tête */}
      <header className="text-center mb-12">
        <h1 className="text-5xl font-bold text-[#111827] mb-4">Nos forfaits</h1>
        <p className="text-lg text-gray-700 max-w-3xl mx-auto">
          Le club Archeguin propose différentes façons de pratiquer le tir à l’arc,
          que ce soit comme membre régulier ou simplement pour venir essayer.
        </p>
      </header>

      {/* Horaires */}
      <section className="mb-14 bg-[#F9FAFB] border border-gray-200 rounded-2xl p-8">
        <h2 className="text-2xl font-bold text-[#111827] mb-6 text-center">
          Horaires des séances
        </h2>

        <div className="grid md:grid-cols-2 gap-8">

          {/* Mercredi */}
          <div className="bg-white rounded-xl shadow p-6">
            <h3 className="text-xl font-bold mb-3">Mercredi — 19h30 à 21h</h3>
            <p className="text-gray-700 mb-3">
              Séance réservée aux archers ayant leur propre matériel.
            </p>

            <ul className="text-gray-700 text-sm space-y-2">
              <li>🏹 Réservé aux archers avec leur équipement.</li>
              <li>📦 Le matériel du club n’est pas disponible.</li>
              <li>💸 Non-membres : 15 $ pour venir tirer.</li>
              <li>ℹ️ Aucun encadrement ni prêt de matériel.</li>
            </ul>
          </div>

          {/* Vendredi */}
          <div className="bg-white rounded-xl shadow p-6">
            <h3 className="text-xl font-bold mb-3">Vendredi — 19h à 21h</h3>
            <p className="text-gray-700 mb-3">
              Séance ouverte à tous, idéale pour découvrir le tir à l’arc.
            </p>

            <ul className="text-gray-700 text-sm space-y-2">
              <li>👋 Ouvert à tous, membres ou visiteurs.</li>
              <li>💸 Non-membres : 15 $ pour tirer.</li>
              <li>🏹 Matériel fourni (quantités limitées).</li>
              <li>🎯 Parfait pour une première expérience.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Cartes tarifs */}
      <div className="grid md:grid-cols-3 gap-8 mb-12">

        <article className="p-8 bg-white rounded-2xl shadow hover:shadow-xl transition text-center">
          <h3 className="text-2xl font-bold text-[#111827]">Adultes (18+)</h3>
          <p className="text-5xl font-extrabold text-[#FACC15] my-4">115 $</p>
          <p className="text-gray-700">
            Accès aux séances du club pendant la saison.
          </p>
        </article>

        <article className="p-8 bg-gradient-to-b from-[#F9FAFB] to-[#E0E7FF] border border-[#e5e7eb] rounded-2xl shadow-lg text-center relative">
          <span className="absolute -top-3 right-4 bg-[#3B82F6] text-white text-xs px-3 py-1 rounded-full">
            Tarif avantage
          </span>
          <h3 className="text-2xl font-bold text-[#111827]">Jeunes (12–17 ans)</h3>
          <p className="text-5xl font-extrabold text-[#FACC15] my-4">75 $</p>
          <p className="text-gray-700">
            Même accès que les adultes à un tarif réduit.
          </p>
        </article>

        <article className="p-8 bg-white rounded-2xl shadow hover:shadow-xl transition text-center">
          <h3 className="text-2xl font-bold text-[#111827]">Enfants (&lt; 12 ans)</h3>
          <p className="text-3xl font-extrabold text-[#FACC15] my-4">Gratuit* ou 75 $</p>
          <p className="text-gray-700 italic">
           * Gratuit si accompagné d’un adulte inscrit.
          </p>
        </article>

      </div>

      {/* Séance ponctuelle */}
      <section className="mb-12 p-8 rounded-2xl border border-gray-200 bg-white">
        <h2 className="text-2xl font-bold text-[#111827] mb-4">
          Séance ponctuelle / essai
        </h2>

        <p className="text-gray-700 mb-4">
          Vous souhaitez simplement découvrir le tir à l’arc ?
          Il est possible de venir essayer sans être membre.
        </p>

        <ul className="text-gray-700 space-y-2">
          <li>💸 15 $ par personne</li>
          <li>⏱ Durée maximale : 2 heures</li>
          <li>🏹 Matériel fourni</li>
          <li>📅 Vendredi de 19h à 21h</li>
          <li>🚶‍♂️ Aucune réservation nécessaire — il suffit de se présenter sur place</li>
        </ul>
      </section>

      {/* Nouvelle section entreprises */}
      <section className="mb-12 p-8 bg-[#F9FAFB] border border-gray-200 rounded-2xl">
        <h2 className="text-2xl font-bold text-[#111827] mb-4">
          Activité pour entreprises ou groupes
        </h2>

        <p className="text-gray-700 mb-6">
          Le club Archeguin peut également accueillir des groupes pour une
          activité d’initiation au tir à l’arc. La salle peut être réservée
          pour une séance privée idéale pour les activités d’équipe,
          événements corporatifs ou groupes d’amis.
        </p>

        <div className="grid md:grid-cols-2 gap-6">

          <div className="bg-white rounded-xl shadow p-6">
            <h3 className="font-bold mb-3">Conditions</h3>
            <ul className="text-gray-700 text-sm space-y-2">
              <li>💰 12.50 $ par personne</li>
              <li>👥 Minimum de facturation : 15 personnes</li>
              <li>👥 Maximum : 30 personnes</li>
              <li>⏱ Durée : environ 2 heures</li>
            </ul>
          </div>

          <div className="bg-white rounded-xl shadow p-6">
            <h3 className="font-bold mb-3">Organisation</h3>
            <ul className="text-gray-700 text-sm space-y-2">
              <li>📅 Réservation au moins 1 mois à l’avance</li>
              <li>❄️ Activité offerte uniquement durant la saison hivernale</li>
              <li>📍 Sous réserve de la disponibilité de la salle</li>
              <li>🏹 Initiation et matériel fournis</li>
            </ul>
          </div>

        </div>
        {/* Galerie teaser (cliquable) */}
        <section className="max-w-7xl mx-auto p-12 text-center">

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
            {photos.map((photo, index) => (
              <img
                key={index}
                src={photo}
                onClick={() => setOpen(index)}
                className="cursor-pointer rounded-lg shadow hover:scale-105 transition"
              />
            ))}
          </div>

          <Lightbox
            open={open !== false}
            index={open}
            close={() => setOpen(false)}
            slides={photos.map((src) => ({ src }))}
          />

        </section>

        <div className="text-center">
          <Link
            to="/contact"
            className="bg-[#3B82F6] text-white px-6 py-3 rounded-xl font-semibold shadow hover:bg-[#2563EB] transition"
          >
            Nous contacter pour organiser une activité
          </Link>
        </div>

      </section>

      {/* Notes */}
      <section className="text-center space-y-4 mb-12">
        <p className="text-lg text-gray-800">
          👉 <strong>Économisez 15 %</strong> pour 2 inscriptions ou plus à la même adresse.
        </p>

        <p className="text-sm text-gray-600 italic">
          * Gratuit pour les enfants s’ils sont accompagnés d’un adulte inscrit.
        </p>

        <aside className="mx-auto max-w-xl rounded-xl border border-[#FDE68A] bg-[#FFFBEB] p-4">
          ⚠️ Des frais additionnels de <strong>35 $</strong> s’appliquent pour
          l’adhésion obligatoire à la fédération (non requis pour une séance ponctuelle).
        </aside>
      </section>

      {/* PDF */}
      <footer className="text-center space-y-6">
        <div>
          <h2 className="text-2xl font-bold text-[#111827] mb-3">
            Prêt à vous inscrire ?
          </h2>
          <p className="text-gray-700 mb-4">
            Vous pouvez remplir le formulaire à l’avance pour gagner du temps à l’accueil.
          </p>

          <a
            href={asset("formulaire-inscription-archeguin.pdf")}
            download
            className="inline-block bg-[#111827] text-white px-8 py-4 rounded-2xl font-semibold shadow hover:bg-black/80 transition"
          >
            📄 Télécharger le formulaire d’inscription
          </a>
        </div>

        <div>
          <Link
            to="/contact"
            className="inline-block bg-[#FACC15] text-[#111827] px-8 py-4 rounded-2xl font-semibold shadow hover:bg-[#fde047] transition"
          >
            Nous contacter
          </Link>
        </div>
      </footer>

    </section>
  );
}