import { Link } from "react-router-dom";
import { asset } from "../utils/assets";

export default function Forfaits() {
  return (
    <section className="max-w-7xl mx-auto p-8">
      {/* En-tête */}
      <header className="text-center mb-10">
        <h1 className="text-5xl font-bold text-[#111827] mb-4">Nos forfaits</h1>
        <p className="text-lg text-gray-700 max-w-3xl mx-auto">
          Quel que soit le forfait, vous avez accès aux séances du{" "}
          <strong>vendredi soir, 19h à 21h (en salle, de l’automne au début du printemps)</strong>.
          Durant l’été, la salle est fermée et nous mettons à disposition un{" "}
          <strong>champ de tir extérieur à Saint-Lambert-de-Lauzon</strong> — accès
          <em> sur demande</em> (ex. clé avec dépôt de garantie). Pour les modalités pratiques,{" "}
          <Link to="/contact" className="text-[#3B82F6] font-medium hover:underline">
            contactez-nous
          </Link>.
        </p>
      </header>

      {/* Cartes tarifs */}
      <div className="grid md:grid-cols-3 gap-8">
        {/* Adultes */}
        <article className="p-8 bg-white rounded-2xl shadow hover:shadow-xl transition text-center">
          <h3 className="text-2xl font-bold text-[#111827]">Adultes (18+)</h3>
          <p className="text-5xl font-extrabold text-[#FACC15] my-4">115 $</p>
          <p className="text-gray-700">
            Accès aux vendredis soir (en salle, en saison) et au tir extérieur l’été (sur demande).
          </p>
        </article>

        {/* Jeunes */}
        <article className="p-8 bg-gradient-to-b from-[#F9FAFB] to-[#E0E7FF] border border-[#e5e7eb] rounded-2xl shadow-lg text-center relative">
          <span className="absolute -top-3 right-4 bg-[#3B82F6] text-white text-xs font-semibold px-3 py-1 rounded-full shadow">
            Tarif avantage
          </span>
          <h3 className="text-2xl font-bold text-[#111827]">Jeunes (12–17 ans)</h3>
          <p className="text-5xl font-extrabold text-[#FACC15] my-4">75 $</p>
          <p className="text-gray-700">
            Même accès que les adultes, avec un tarif adapté aux adolescents.
          </p>
        </article>

        {/* Enfants */}
        <article className="p-8 bg-white rounded-2xl shadow hover:shadow-xl transition text-center">
          <h3 className="text-2xl font-bold text-[#111827]">Enfants (&lt; 12 ans)</h3>
          <p className="text-3xl font-extrabold text-[#FACC15] my-4">Gratuit* ou 75 $</p>
          <p className="text-gray-700">
            Gratuit si accompagné d’un adulte inscrit&nbsp;; sinon, 75 $. Accès identique (vendredis en saison, tir extérieur sur demande).
          </p>
        </article>
      </div>

      {/* Ce que comprend une adhésion */}
      <section className="mt-12 rounded-2xl border border-gray-200 bg-white p-6">
        <h2 className="text-xl font-bold text-[#111827] mb-3">Ce que comprend chaque adhésion</h2>
        <ul className="text-gray-700 space-y-2">
          <li>
            • <strong>Vendredi 19h–21h en salle</strong> (automne → début printemps, selon disponibilité).
          </li>
          <li>
            • <strong>Tir extérieur à Saint-Lambert-de-Lauzon</strong> l’été — accès{" "}
            <em>sur demande</em> (ex. clé avec dépôt de garantie).
          </li>
          <li>• Pratique conviviale entre membres, sans encadrement professionnel formel.</li>
        </ul>
      </section>

      {/* Séance ponctuelle / essai */}
      <section className="mt-10 p-6 rounded-2xl bg-white border border-gray-200">
        <div className="grid md:grid-cols-2 gap-6 items-center">
          <div>
            <h2 className="text-2xl font-bold text-[#111827] mb-2">Séance ponctuelle / essai</h2>
            <p className="text-gray-700">
              Vous souhaitez simplement venir essayer&nbsp;? C’est possible&nbsp;!  
              La séance ponctuelle est à <strong>15&nbsp;$</strong> pour une durée maximale de{" "}
              <strong>2&nbsp;heures</strong>.
            </p>
            <ul className="text-gray-700 text-sm space-y-1 mt-3">
              <li>• <strong>En salle</strong> pendant la saison froide : le vendredi 19h–21h.</li>
              <li>• <strong>Prêt de matériel</strong> inclus (quantités limitées).</li>
              <li>• Les <strong>35&nbsp;$</strong> de fédération <u>ne s’appliquent pas</u> pour une séance d’essai.</li>
            </ul>
          </div>
          <div className="text-center md:text-right">
            <p className="text-gray-700 mb-4">
              Vous pouvez vous présenter directement lors d’une séance&nbsp;:
              <br />
              <strong>Vendredi, entre 19h et 21h.</strong>
            </p>
            <p className="text-sm text-gray-500 italic">
              Aucune réservation nécessaire — il suffit de venir à la salle.
            </p>
          </div>
        </div>
      </section>

      {/* Notes & réductions */}
      <section className="mt-8 text-center space-y-4">
        <p className="text-lg text-gray-800">
          👉 <strong>Économisez 15&nbsp;%</strong> pour 2 inscriptions ou plus à la même adresse.
        </p>

        <p className="text-sm text-gray-600 italic">
          * Gratuit pour les enfants s’ils sont accompagnés d’un adulte inscrit.
        </p>

        {/* Encart frais de fédération */}
        <aside
          role="note"
          aria-label="Information sur les frais de fédération"
          className="mx-auto w-full max-w-2xl rounded-2xl border border-[#FDE68A] bg-[#FFFBEB] p-4 shadow"
        >
          <p className="text-sm text-[#92400E]">
            ⚠️ Des frais additionnels de <strong>35&nbsp;$</strong> s’appliquent pour l’adhésion obligatoire à la fédération
            (non inclus dans les prix des forfaits ci-dessus — <em>non requis pour une séance d’essai</em>).
          </p>
        </aside>
      </section>

      {/* PDF + CTA fin */}
      <footer className="mt-12 text-center space-y-6">
        <div>
          <h2 className="text-2xl font-bold text-[#111827] mb-3">Prêt à vous inscrire&nbsp;?</h2>
          <p className="text-gray-700 mb-4">
            Vous pouvez remplir le formulaire à l’avance pour gagner du temps à l’accueil.
          </p>
          <a
            href={asset("formulaire-inscription-archeguin.pdf")}
            download
            className="inline-block bg-[#111827] text-white px-8 py-4 rounded-2xl font-semibold shadow hover:bg-black/80 transition
                       focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#111827]/30"
          >
            📄 Télécharger le formulaire d’inscription
          </a>
        </div>

        <div>
          <h3 className="text-xl font-bold text-[#111827] mb-2">Une question&nbsp;?</h3>
          <p className="text-gray-700 mb-4">
            Écrivez-nous pour plus de renseignements.
          </p>
          <Link
            to="/contact"
            className="inline-block bg-[#FACC15] text-[#111827] px-8 py-4 rounded-2xl font-semibold shadow hover:bg-[#fde047] transition
                       focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#FACC15]/40"
          >
            Nous contacter
          </Link>
        </div>
      </footer>
    </section>
  );
}
