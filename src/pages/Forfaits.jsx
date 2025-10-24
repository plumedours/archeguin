import { Link } from "react-router-dom";

export default function Forfaits() {
  return (
    <section className="max-w-7xl mx-auto p-8">
      {/* En-tête */}
      <header className="text-center mb-10">
        <h1 className="text-5xl font-bold text-[#111827] mb-4">Nos forfaits</h1>
        <p className="text-lg text-gray-700 max-w-3xl mx-auto">
          Quel que soit le forfait, vous avez accès aux séances du <strong>vendredi soir, 19h à 21h (en salle, de l’automne au début du printemps)</strong>.
          Durant l’été, la salle est fermée et nous mettons à disposition un <strong>champ de tir extérieur à Saint-Lambert-de-Lauzon</strong>
          . Pour les modalités pratiques,{" "}
          <Link to="/contact" className="text-[#3B82F6] font-medium hover:underline">contactez-nous</Link>.
        </p>
      </header>

      {/* Cartes tarifs (sobres, sans listes “marketing”) */}
      <div className="grid md:grid-cols-3 gap-8">
        {/* Adultes */}
        <article className="p-8 bg-white rounded-2xl shadow hover:shadow-xl transition text-center">
          <h3 className="text-2xl font-bold text-[#111827]">Adultes (18+)</h3>
          <p className="text-5xl font-extrabold text-[#FACC15] my-4">115 $</p>
          <p className="text-gray-700">
            Accès aux séances du vendredi soir (en salle, en saison) et au tir extérieur l’été (sur demande).
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
            Gratuit si accompagné d’un adulte inscrit&nbsp;; sinon, 75 $. Accès identique (séances du vendredi en saison, tir extérieur sur demande).
          </p>
        </article>
      </div>

      {/* Bloc : Ce que comprend chaque adhésion */}
      <section className="mt-12 rounded-2xl border border-gray-200 bg-white p-6">
        <h2 className="text-xl font-bold text-[#111827] mb-3">Ce que comprend chaque adhésion</h2>
        <ul className="text-gray-700 space-y-2">
          <li>• <strong>Vendredi 19h–21h en salle à Saint-Romuald</strong> (automne → début printemps, selon disponibilité).</li>
          <li>• <strong>Tir extérieur à Saint-Lambert-de-Lauzon</strong> l’été — accès <em>sur demande</em>.</li>
          <li>• Prêt de matériel pour les débutants.</li>
        </ul>
      </section>

      {/* Notes & réductions */}
      <section className="mt-8 text-center space-y-4">
        <p className="text-lg text-gray-800">
          👉 <strong>Économisez 15&nbsp;%</strong> pour 2 inscriptions ou plus à la même adresse.
        </p>

        <p className="text-sm text-gray-600 italic">
          * Gratuit pour les enfants s’ils sont accompagnés d’un adulte inscrit.
        </p>

        {/* Encadré frais fédération — accessible, contrasté et centré */}
        <aside
          role="note"
          aria-label="Information sur les frais de fédération"
          className="mx-auto w-full max-w-2xl rounded-2xl border border-[#FDE68A] bg-[#FFFBEB] p-4 shadow"
        >
          <p className="text-sm text-[#92400E] flex items-start justify-center gap-2">
            <span aria-hidden>⚠️</span>
            <span>
              Des frais additionnels de <strong>34&nbsp;$</strong> s’appliquent pour l’adhésion obligatoire à la fédération
              (non inclus dans les tarifs ci-dessus).
            </span>
          </p>
        </aside>
      </section>

      {/* CTA final */}
      <footer className="mt-12 text-center">
        <h2 className="text-2xl font-bold text-[#111827] mb-3">Besoin d’un détail ou d’une confirmation&nbsp;?</h2>
        <p className="text-gray-700 mb-6">
          Écrivez-nous : nous vous expliquerons l’accès au terrain extérieur, la clé et le dépôt, ainsi que les périodes en salle.
        </p>
        <Link
          to="/contact"
          className="inline-block bg-[#3B82F6] text-white px-8 py-4 rounded-2xl font-semibold shadow hover:bg-[#2563EB] transition
                     focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#3B82F6]/30"
        >
          Nous contacter
        </Link>
      </footer>
    </section>
  );
}