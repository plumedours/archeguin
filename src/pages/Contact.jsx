import { Link } from "react-router-dom";

export default function Contact() {
    return (
        <section className="max-w-7xl mx-auto p-8">
            {/* En-tête */}
            <h1 className="text-5xl font-bold text-[#111827] mb-6 text-center">
                Contactez-nous
            </h1>
            <p className="text-center text-lg text-gray-600 mb-12">
                Une question sur nos activités, les vendredis en salle, ou l’accès au champ extérieur ? L’équipe d’Archeguin est là pour vous répondre.
            </p>

            {/* Infos de contact en grille */}
            <div className="grid md:grid-cols-3 gap-8 text-center mb-12">
                {/* Adresse */}
                <div className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition">
                    <h3 className="text-xl font-semibold text-[#3B82F6] mb-2">Adresse</h3>
                    <a
                        href="https://www.google.com/maps?q=265+Av.+Taniata,+Saint-Romuald,+QC+G6W+5M6"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-700 hover:text-[#3B82F6] transition"
                    >
                        265 Av. Taniata<br />Saint-Romuald, QC G6W 5M6
                    </a>
                </div>

                {/* Téléphone */}
                <div className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition">
                    <h3 className="text-xl font-semibold text-[#3B82F6] mb-2">Téléphone</h3>
                    <a
                        href="tel:+14188310564"
                        className="text-gray-700 hover:text-[#3B82F6] transition"
                    >
                        📞 (418) 831-0564
                    </a>
                </div>

                {/* Email */}
                <div className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition">
                    <h3 className="text-xl font-semibold text-[#3B82F6] mb-2">Email</h3>
                    <a
                        href="mailto:clubarcheguin@gmail.com"
                        className="text-gray-700 hover:text-[#3B82F6] transition"
                    >
                        ✉️ clubarcheguin@gmail.com
                    </a>
                </div>
            </div>

            {/* Encadré : périodes / accès extérieur */}
            <aside
                role="note"
                aria-label="Informations de pratique"
                className="mx-auto w-full max-w-4xl rounded-2xl border border-[#FDE68A] bg-[#FFFBEB] p-6 shadow mb-12"
            >
                <h3 className="text-xl font-bold text-[#111827] mb-2">Quand et où pratiquer</h3>
                <ul className="text-gray-800 space-y-2">
                    <li>• <strong>Vendredi 19h–21h en salle</strong> (de l’automne au début du printemps).</li>
                    <li>• <strong>Été :</strong> la salle est fermée, mais un <strong>champ de tir extérieur à Saint-Lambert-de-Lauzon</strong> est disponible.</li>
                    <li>• L’accès au terrain extérieur est <em>sur demande</em>. Pour les modalités,{" "}
                        <Link to="/contact" className="text-[#3B82F6] font-medium hover:underline">contactez-nous</Link>.
                    </li>
                </ul>
            </aside>

            {/* Horaires (rappel simple) */}
            {/* <div className="bg-[#F9FAFB] p-8 rounded-xl shadow mb-12 text-center">
                <h3 className="text-2xl font-bold text-[#111827] mb-4">Horaires en salle</h3>
                <ul className="text-gray-700 space-y-2">
                    <li>Vendredi : 19h00 – 21h00 (saison froide)</li>
                </ul>
            </div> */}

            {/* Formulaire Google (iframe) */}
            <div className="max-w-3xl mx-auto mb-16">
                <h3 className="text-2xl font-bold text-[#111827] mb-6 text-center">
                    Envoyez-nous un message
                </h3>
                <iframe
                    title="Formulaire de contact"
                    src="https://docs.google.com/forms/d/e/1FAIpQLSfcXCQjiyi307et5eIWmEIcCeIHLpiRVoChWjwZu5-x3VmRKg/viewform?embedded=true"
                    width="100%"
                    height="950"
                    frameBorder="0"
                    marginHeight="0"
                    marginWidth="0"
                    className="w-full rounded-xl shadow"
                >
                    Chargement…
                </iframe>
            </div>

            {/* Carte Google */}
            <div className="mb-12">
                <iframe
                    title="Carte"
                    className="w-full h-96 rounded-xl shadow"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2748.278314259122!2d-71.20805422371153!3d46.72149637112079!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cb89302d57c9d9b%3A0xb5ddf8ecb9f50a81!2s265%20Av.%20Taniata%2C%20L%C3%A9vis%2C%20QC!5e0!3m2!1sfr!2sca!4v1696025030000!5m2!1sfr!2sca"
                    allowFullScreen=""
                    loading="lazy"
                ></iframe>
            </div>

            {/* CTA fin de page : Forfaits + Facebook */}
            <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
                <Link
                    to="/forfaits"
                    className="inline-block bg-[#3B82F6] text-white px-8 py-4 rounded-2xl font-semibold shadow hover:bg-[#2563EB] transition
                     focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#3B82F6]/30"
                >
                    📜 Voir nos forfaits
                </Link>
                <a
                    href="https://share.google/l813Le2HEeagrG26d"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-[#3B82F6] text-white px-8 py-4 rounded-2xl font-semibold shadow hover:bg-[#2563EB] transition"
                >
                    🏹 Laisser un avis Google
                </a>
                <a
                    href="https://www.facebook.com/profile.php?id=100057619741791"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-[#111827] text-white px-8 py-4 rounded-2xl font-semibold shadow hover:bg-black/80 transition
                     focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-white/20"
                >
                    👍 Suivez-nous sur Facebook
                </a>
            </div>
        </section>
    );
}
