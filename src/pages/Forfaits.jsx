import Card from "../components/Card";

export default function Forfaits() {
  return (
    <section className="max-w-7xl mx-auto p-8">
      {/* En-tête */}
      <div className="text-center mb-12">
        <h1 className="text-5xl font-bold text-[#111827] mb-4">Nos Forfaits</h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Que vous soyez adulte, adolescent ou enfant, nous avons un forfait adapté.
          Tous nos membres bénéficient d’un encadrement de qualité et d’installations modernes.
        </p>
      </div>

      {/* Grille des forfaits */}
      <div className="grid md:grid-cols-3 gap-8">
        {/* Adultes */}
        <div className="p-8 bg-white rounded-2xl shadow hover:shadow-xl transition text-center flex flex-col">
          <h3 className="text-2xl font-bold text-[#3B82F6] mb-2">Adultes (18+)</h3>
          <p className="text-4xl font-extrabold text-[#FACC15] mb-4">115 $</p>
          <ul className="text-gray-700 mb-6 space-y-2 text-left">
            <li>✅ Accès complet aux installations</li>
            <li>✅ Participation aux entraînements</li>
            <li>✅ Événements & compétitions</li>
          </ul>
          <a
            href="/contact"
            className="mt-auto inline-block bg-[#3B82F6] text-white px-6 py-3 rounded-xl font-semibold shadow hover:bg-[#2563EB] transition"
          >
            S’inscrire
          </a>
        </div>

        {/* Jeunes */}
        <div className="p-8 bg-gradient-to-b from-[#F9FAFB] to-[#E0E7FF] border-2 border-[#3B82F6] rounded-2xl shadow-xl text-center flex flex-col relative">
          <span className="absolute top-0 right-0 bg-[#3B82F6] text-white text-xs font-semibold px-3 py-1 rounded-bl-lg rounded-tr-lg">
            Populaire
          </span>
          <h3 className="text-2xl font-bold text-[#3B82F6] mb-2">Jeunes (12-17 ans)</h3>
          <p className="text-4xl font-extrabold text-[#FACC15] mb-4">75 $</p>
          <ul className="text-gray-700 mb-6 space-y-2 text-left">
            <li>✅ Forfait adapté aux adolescents</li>
            <li>✅ Encadrement par nos passionnés</li>
            <li>✅ Activités conviviales</li>
          </ul>
          <a
            href="/contact"
            className="mt-auto inline-block bg-[#3B82F6] text-white px-6 py-3 rounded-xl font-semibold shadow hover:bg-[#2563EB] transition"
          >
            S’inscrire
          </a>
        </div>

        {/* Enfants */}
        <div className="p-8 bg-white rounded-2xl shadow hover:shadow-xl transition text-center flex flex-col">
          <h3 className="text-2xl font-bold text-[#3B82F6] mb-2">Enfants (-12 ans)</h3>
          <p className="text-4xl font-extrabold text-[#FACC15] mb-4">Gratuit* ou 75 $</p>
          <ul className="text-gray-700 mb-6 space-y-2 text-left">
            <li>✅ Gratuit si accompagné d’un adulte inscrit</li>
            <li>✅ 75 $ si inscription seule</li>
            <li>✅ Activités adaptées aux plus jeunes</li>
          </ul>
          <a
            href="/contact"
            className="mt-auto inline-block bg-[#3B82F6] text-white px-6 py-3 rounded-xl font-semibold shadow hover:bg-[#2563EB] transition"
          >
            S’inscrire
          </a>
        </div>
      </div>

      {/* Infos supplémentaires */}
      <div className="mt-12 text-center space-y-4">
        <p className="text-lg text-gray-700">
          👉 Économisez <span className="font-bold text-[#3B82F6]">15%</span> pour 2 inscriptions ou plus à la même adresse !
        </p>
        <p className="text-sm text-gray-600 italic">
          ⚠️ Des frais supplémentaires de <span className="font-bold text-[#111827]">34 $</span> s’appliquent pour l’adhésion obligatoire à la fédération.
        </p>
      </div>

      {/* Call to action final */}
      <div className="mt-16 text-center">
        <h2 className="text-2xl font-bold text-[#111827] mb-4">
          Prêt à rejoindre le club ?
        </h2>
        <a
          href="/contact"
          className="bg-[#FACC15] text-[#111827] px-8 py-4 rounded-2xl font-semibold shadow hover:bg-[#fde047] transition"
        >
          Contactez-nous dès aujourd’hui
        </a>
      </div>
    </section>
  );
}
