export default function Contact() {
    return (
        <section className="max-w-7xl mx-auto p-8">
            {/* En-tête */}
            <h1 className="text-5xl font-bold text-[#111827] mb-6 text-center">
                Contactez-nous
            </h1>
            <p className="text-center text-lg text-gray-600 mb-12">
                Une question sur nos activités ou nos forfaits ? L’équipe d’Archeguin
                est là pour vous répondre.
            </p>

            {/* Infos de contact en grille */}
            <div className="grid md:grid-cols-3 gap-8 text-center mb-16">
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

            {/* Horaires d’ouverture */}
            <div className="bg-[#F9FAFB] p-8 rounded-xl shadow mb-16 text-center">
                <h3 className="text-2xl font-bold text-[#111827] mb-4">
                    Horaires d’ouverture de la salle
                </h3>
                <ul className="text-gray-700 space-y-2">
                    <li>Vendredi : 19h00 - 21h00</li>
                </ul>
            </div>

            {/* Formulaire de contact */}
            <div className="mb-16 max-w-3xl mx-auto">
                <div className="max-w-3xl mx-auto mb-16">
                    <h3 className="text-2xl font-bold text-[#111827] mb-6 text-center">
                        Envoyez-nous un message
                    </h3>
                    <iframe
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
            </div>

            {/* Carte Google */}
            <div className="mb-16">
                <iframe
                    title="Carte"
                    className="w-full h-96 rounded-xl shadow"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2748.278314259122!2d-71.20805422371153!3d46.72149637112079!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cb89302d57c9d9b%3A0xb5ddf8ecb9f50a81!2s265%20Av.%20Taniata%2C%20L%C3%A9vis%2C%20QC!5e0!3m2!1sfr!2sca!4v1696025030000!5m2!1sfr!2sca"
                    allowFullScreen=""
                    loading="lazy"
                ></iframe>
            </div>

            {/* CTA Facebook */}
            <div className="text-center">
                <a
                    href="https://www.facebook.com/profile.php?id=100057619741791" // 🔗 à remplacer par le vrai lien
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-[#3B82F6] text-white px-8 py-4 rounded-2xl font-semibold shadow hover:bg-[#2563EB] transition"
                >
                    👍 Suivez-nous sur Facebook
                </a>
            </div>
        </section>
    );
}
