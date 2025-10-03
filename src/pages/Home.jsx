import Hero from "../components/Hero";

export default function Home() {
  return (
    <>
      <Hero />

      {/* Présentation du club avec photo */}
      <section className="max-w-7xl mx-auto p-12 grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h2 className="text-4xl font-bold text-[#111827] mb-4">
            Un club accueillant et professionnel
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Le club Archeguin est fier d’offrir un environnement sécuritaire et moderne
            pour la pratique du tir à l’arc. Nos installations intérieures permettent
            de tirer toute l’année, quel que soit le climat. Nous accueillons autant
            les débutants curieux que les archers confirmés.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            Rejoignez une communauté passionnée et profitez d’un encadrement de qualité,
            d’activités variées et d’une ambiance conviviale.
          </p>
        </div>
        <div>
          <img
            src="/photos/salle.jpg"
            alt="Salle de tir du club Archeguin"
            className="rounded-2xl shadow-lg"
          />
          <p className="text-sm text-gray-500 mt-2 text-center italic">
            Notre salle intérieure à Saint-Romuald
          </p>
        </div>
      </section>

      {/* Adhésion & avantages */}
      <section className="bg-gradient-to-r from-[#3B82F6] to-[#7C3AED] text-white py-16">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">Pourquoi devenir membre ?</h2>
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="p-6 bg-white text-[#111827] rounded-xl shadow">
              🎯 <h3 className="text-xl font-bold mb-2">Apprentissage</h3>
              <p>Formations encadrées pour progresser à votre rythme.</p>
            </div>
            <div className="p-6 bg-white text-[#111827] rounded-xl shadow">
              🏹 <h3 className="text-xl font-bold mb-2">Installations modernes</h3>
              <p>Une salle intérieure sécurisée, accessible toute l’année.</p>
            </div>
            <div className="p-6 bg-white text-[#111827] rounded-xl shadow">
              🤝 <h3 className="text-xl font-bold mb-2">Ambiance conviviale</h3>
              <p>Une communauté passionnée et des activités toute l’année.</p>
            </div>
          </div>
          <a
            href="/forfaits"
            className="bg-[#FACC15] text-[#111827] px-8 py-4 rounded-2xl font-semibold shadow hover:bg-[#fde047] transition"
          >
            Voir nos forfaits
          </a>
        </div>
      </section>

      {/* Installations */}
      <section className="max-w-7xl mx-auto p-12 text-center">
        <h2 className="text-3xl font-bold text-[#111827] mb-6">Nos installations</h2>
        <p className="text-lg text-gray-700 mb-8">
          Notre salle intérieure permet aux archers de pratiquer quelles que soient
          les conditions climatiques. Équipée de cibles mobiles et d’espaces sécurisés,
          elle est idéale pour l’entraînement et les compétitions locales.
        </p>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="p-6 bg-white rounded-xl shadow">🥇 Pas de tir couvert</div>
          <div className="p-6 bg-white rounded-xl shadow">🎯 Cibles mobiles ajustables</div>
          <div className="p-6 bg-white rounded-xl shadow">🏟️ Ambiance sécurisée et conviviale</div>
        </div>
      </section>

      {/* Galerie teaser */}
      <section className="max-w-7xl mx-auto p-12 text-center">
        <h2 className="text-3xl font-bold text-[#111827] mb-6">Un aperçu de nos activités</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
          <img src="/photos/03.jpg" alt="Compétition 1" className="rounded-xl shadow" />
          <img src="/photos/07.jpg" alt="Compétition 2" className="rounded-xl shadow" />
          <img src="/photos/09.jpg" alt="Compétition 3" className="rounded-xl shadow" />
          <img src="/photos/06.jpg" alt="Compétition 4" className="rounded-xl shadow hidden md:block" />
        </div>
        <a
          href="/galerie"
          className="text-[#3B82F6] font-semibold hover:underline"
        >
          Voir toute la galerie →
        </a>
      </section>

      {/* Témoignages */}
      <section className="bg-[#F9FAFB] py-16">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-[#111827] mb-6">Ils parlent de nous</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-6 bg-white rounded-xl shadow">
              <p className="italic text-gray-700">
                “Une ambiance incroyable ! J’ai découvert le tir à l’arc grâce au club
                et je suis maintenant passionné.”
              </p>
              <p className="mt-4 font-semibold text-[#3B82F6]">— Jean M.</p>
            </div>
            <div className="p-6 bg-white rounded-xl shadow">
              <p className="italic text-gray-700">
                “Des passionnés toujours à l’écoute et des installations de qualité.
                Je recommande à 100%.”
              </p>
              <p className="mt-4 font-semibold text-[#3B82F6]">— Sophie L.</p>
            </div>
            <div className="p-6 bg-white rounded-xl shadow">
              <p className="italic text-gray-700">
                “Le club Archeguin, c’est plus qu’un sport : c’est une famille !”
              </p>
              <p className="mt-4 font-semibold text-[#3B82F6]">— Marc D.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Facebook section */}
      <section className="bg-[#F9FAFB] py-16">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-[#111827] mb-6">Suivez-nous sur Facebook</h2>
          <p className="text-gray-700 mb-8">
            Restez informé de nos activités, compétitions et événements spéciaux en suivant notre page officielle.
          </p>
          <a
            href="https://www.facebook.com/profile.php?id=100057619741791" // <-- lien réel de la page Facebook
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#3B82F6] text-white px-8 py-4 rounded-2xl font-semibold shadow hover:bg-[#2563EB] transition"
          >
            👍 Suivre Archeguin sur Facebook
          </a>
        </div>
      </section>

      {/* Call To Action final */}
      <section className="bg-gradient-to-r from-[#7C3AED] to-[#9333EA] text-white py-20 text-center">
        <h2 className="text-4xl font-bold mb-6">Prêt à rejoindre l’aventure ?</h2>
        <p className="text-lg mb-8">
          Inscrivez-vous dès aujourd’hui et découvrez le plaisir du tir à l’arc.
        </p>
        <a
          href="/forfaits"
          className="bg-[#FACC15] text-[#111827] px-8 py-4 rounded-2xl font-semibold shadow hover:bg-[#fde047] transition"
        >
          Rejoindre Archeguin
        </a>
      </section>
    </>
  );
}
