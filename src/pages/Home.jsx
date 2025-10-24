import { Link } from "react-router-dom";
import Hero from "../components/Hero";
import { asset } from "../utils/assets";

export default function Home() {
    return (
        <>
            {/* HERO */}
            <Hero />

            {/* Présentation + photo salle */}
            <section className="max-w-7xl mx-auto p-12 grid md:grid-cols-2 gap-8 items-center">
                <div>
                    <h2 className="text-4xl font-bold text-[#111827] mb-4">Un club accueillant</h2>
                    <p className="text-lg text-gray-700 leading-relaxed mb-4">
                        Depuis plus de 40 ans, le club Archeguin réunit des passionnés à Saint-Romuald.
                        Ici, on pratique pour le plaisir, on progresse à son rythme et on partage des conseils
                        entre membres.
                    </p>
                    <p className="text-lg text-gray-700 leading-relaxed">
                        La saison froide (automne → début printemps), nous disposons d’une salle intérieure.
                        L’été, lorsque la salle est fermée, nous mettons à disposition un <strong>champ de tir extérieur
                            </strong>. <span className="block mt-1">Pour les modalités pratiques (accès, horaires, distances),
                            <Link to="/contact" className="text-[#3B82F6] font-medium hover:underline"> contactez-nous</Link>.</span>
                    </p>
                </div>
                <div>
                    <img
                        src={asset("photos/salle.jpg")}
                        alt="Salle de tir intérieure du club Archeguin"
                        loading="lazy"
                        decoding="async"
                        className="rounded-2xl shadow-lg"
                    />
                    <p className="text-sm text-gray-500 mt-2 text-center italic">
                        Salle intérieure (automne → début printemps) à Saint-Romuald
                    </p>
                </div>
            </section>

            {/* Infos clés (adresse / saison / téléphone) */}
            <section className="max-w-6xl mx-auto px-6 pb-4">
                <div className="grid sm:grid-cols-3 gap-4">
                    <div className="bg-white rounded-xl shadow p-5 text-center">
                        <div className="text-2xl mb-1">📍</div>
                        <p className="text-sm text-gray-500">Adresse</p>
                        <p className="font-medium text-[#111827]"><a
                            href="https://www.google.com/maps?q=265+Av.+Taniata,+Saint-Romuald,+QC+G6W+5M6"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-700 hover:text-[#3B82F6] transition"
                        >265 Av. Taniata, Saint-Romuald</a></p>
                    </div>
                    <div className="bg-white rounded-xl shadow p-5 text-center">
                        <div className="text-2xl mb-1">🗓️</div>
                        <p className="text-sm text-gray-500">Périodes</p>
                        <p className="font-medium text-[#111827]">
                            Salle (automne → début printemps) · Extérieur (été)
                        </p>
                    </div>
                    <div className="bg-white rounded-xl shadow p-5 text-center">
                        <div className="text-2xl mb-1">☎️</div>
                        <p className="text-sm text-gray-500">Téléphone</p>
                        <p className="font-medium text-[#111827]"><a
                            href="tel:+14188310564"
                            className="text-gray-700 hover:text-[#3B82F6] transition"
                        >(418) 831-0564</a></p>
                    </div>
                </div>
            </section>

            {/* Avantages (ton réaliste) */}
            <section className="max-w-7xl mx-auto p-12 text-center">
                <h2 className="text-3xl font-bold text-[#111827] mb-6">Pourquoi nous rejoindre ?</h2>
                <div className="grid md:grid-cols-3 gap-6 mb-2">
                    <div className="p-6 bg-white text-[#111827] rounded-xl shadow hover:shadow-lg transition-transform hover:-translate-y-0.5">
                        🎯 <h3 className="text-xl font-bold mb-2">Découverte & entraide</h3>
                        <p className="text-gray-700">
                            Les membres partagent leurs expériences et accompagnent les nouveaux sans pression.
                        </p>
                    </div>
                    <div className="p-6 bg-white text-[#111827] rounded-xl shadow hover:shadow-lg transition-transform hover:-translate-y-0.5">
                        🏹 <h3 className="text-xl font-bold mb-2">Pratique en saison</h3>
                        <p className="text-gray-700">
                            Salle intérieure en période froide, et champ de tir extérieur l’été.
                        </p>
                    </div>
                    <div className="p-6 bg-white text-[#111827] rounded-xl shadow hover:shadow-lg transition-transform hover:-translate-y-0.5">
                        🤝 <h3 className="text-xl font-bold mb-2">Ambiance amicale</h3>
                        <p className="text-gray-700">
                            Un groupe simple et convivial, pour tirer quelques flèches et passer un bon moment.
                        </p>
                    </div>
                </div>
                <div className="mt-6">
                    <Link
                        to="/forfaits"
                        className="inline-block bg-[#FACC15] text-[#111827] px-6 py-3 rounded-2xl font-semibold shadow hover:bg-[#fde047] transition
                       focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#FACC15]/40"
                    >
                        Voir nos forfaits
                    </Link>
                </div>
            </section>

            {/* Nos installations (texte adapté + 2 colonnes) */}
            <section className="max-w-7xl mx-auto p-12">
                <h2 className="text-3xl font-bold text-[#111827] text-center mb-6">Où pratiquer avec Archeguin</h2>
                <p className="text-lg text-gray-700 mb-8 text-center">
                    Nous organisons la pratique selon les saisons : en intérieur lorsqu’il fait froid, et en extérieur quand revient l’été.
                </p>

                <div className="grid md:grid-cols-2 gap-6">
                    <div className="p-6 bg-white rounded-xl shadow">
                        <h3 className="text-lg font-semibold text-[#111827] mb-2">Salle intérieure · Saint-Romuald</h3>
                        <ul className="text-gray-700 space-y-2 text-sm">
                            <li>• Période : automne → début printemps</li>
                            <li>• Pratique à l’abri, différentes distances possibles</li>
                            <li>• Séances conviviales et sécuritaires</li>
                        </ul>
                    </div>
                    <div className="p-6 bg-white rounded-xl shadow">
                        <h3 className="text-lg font-semibold text-[#111827] mb-2">Champ de tir extérieur · Saint-Lambert-de-Lauzon</h3>
                        <ul className="text-gray-700 space-y-2 text-sm">
                            <li>• Période : été (lorsque la salle est fermée)</li>
                            <li>• Pratique en plein air — distances variables</li>
                            <li>
                                • Détails d’accès et horaires :{" "}
                                <Link to="/contact" className="text-[#3B82F6] font-medium hover:underline">contactez-nous</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* Galerie teaser (cliquable) */}
            <section className="max-w-7xl mx-auto p-12 text-center">
                <h2 className="text-3xl font-bold text-[#111827] mb-6">Un aperçu de nos activités</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                    <Link to="/galerie" className="group block">
                        <img
                            src={asset("photos/03.jpg")}
                            alt="Aperçu 1"
                            loading="lazy"
                            decoding="async"
                            className="rounded-xl shadow group-hover:opacity-90 transition"
                        />
                    </Link>
                    <Link to="/galerie" className="group block">
                        <img
                            src={asset("photos/07.jpg")}
                            alt="Aperçu 2"
                            loading="lazy"
                            decoding="async"
                            className="rounded-xl shadow group-hover:opacity-90 transition"
                        />
                    </Link>
                    <Link to="/galerie" className="group block">
                        <img
                            src={asset("photos/09.jpg")}
                            alt="Aperçu 3"
                            loading="lazy"
                            decoding="async"
                            className="rounded-xl shadow group-hover:opacity-90 transition"
                        />
                    </Link>
                    <Link to="/galerie" className="group block">
                        <img
                            src={asset("photos/06.jpg")}
                            alt="Aperçu 4"
                            loading="lazy"
                            decoding="async"
                            className="rounded-xl shadow group-hover:opacity-90 transition hidden md:block"
                        />
                    </Link>
                </div>
                <Link to="/galerie" className="text-[#3B82F6] font-semibold hover:underline">
                    Voir toute la galerie →
                </Link>
            </section>

            {/* Section combinée : Avis Google + Facebook (deux cartes) */}
            <section className="bg-[#F9FAFB] py-16">
                <div className="max-w-6xl mx-auto px-6">
                    <h2 className="text-3xl font-bold text-[#111827] text-center mb-10">Partagez votre avis & restez informé</h2>
                    <div className="grid md:grid-cols-2 gap-6">
                        {/* Avis Google */}
                        <div className="p-6 bg-white rounded-2xl shadow border border-gray-100">
                            <h3 className="text-xl font-semibold text-[#111827] mb-2">Votre avis compte</h3>
                            <p className="text-gray-700 mb-4">
                                Si vous avez déjà tiré avec nous, un court avis aidera d’autres personnes à nous découvrir.
                            </p>
                            <a
                                href="https://share.google/l813Le2HEeagrG26d"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-block bg-[#3B82F6] text-white px-6 py-3 rounded-xl font-semibold shadow hover:bg-[#2563EB] transition"
                            >
                                🏹 Laisser un avis Google
                            </a>
                        </div>

                        {/* Facebook simple */}
                        <div className="p-6 bg-white rounded-2xl shadow border border-gray-100">
                            <h3 className="text-xl font-semibold text-[#111827] mb-2">Suivez-nous sur Facebook</h3>
                            <p className="text-gray-700 mb-4">
                                Nous partageons des infos et quelques photos du club. Abonnez-vous pour être informé des annonces.
                            </p>
                            <a
                                href="https://www.facebook.com/profile.php?id=100057619741791"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-block bg-[#111827] text-white px-6 py-3 rounded-xl font-semibold shadow hover:bg-black/80 transition"
                            >
                                👍 Suivre Archeguin
                            </a>
                        </div>
                    </div>

                    {/* Séparateur subtil avant le CTA final */}
                    <div className="max-w-6xl mx-auto">
                        <hr className="mt-12 border-t border-gray-200/70" />
                    </div>
                </div>
            </section>

            {/* CTA final */}
            <section className="bg-gradient-to-r from-[#7C3AED] to-[#9333EA] text-white py-20 text-center">
                <h2 className="text-4xl font-bold mb-6">Prêt à rejoindre l’aventure ?</h2>
                <p className="text-lg mb-8">
                    Inscrivez-vous dès aujourd’hui et découvrez le plaisir du tir à l’arc.
                </p>
                <Link
                    to="/forfaits"
                    className="bg-[#FACC15] text-[#111827] px-8 py-4 rounded-2xl font-semibold shadow hover:bg-[#fde047] transition
                     focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#FACC15]/40"
                >
                    Rejoindre Archeguin
                </Link>
            </section>
        </>
    );
}
