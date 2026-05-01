import { Link, useSearchParams } from "react-router-dom";

const STATUS_CONTENT = {
  success: {
    badge: "Désinscription confirmée",
    title: "Vous êtes bien désinscrit de l’infolettre",
    message:
      "Votre adresse a été retirée de la liste d’envoi. Vous ne recevrez plus les prochaines infolettres du Club Archeguin.",
    tone: "green",
    icon: "✓",
  },
  already: {
    badge: "Déjà désinscrit",
    title: "Cette adresse semble déjà désinscrite",
    message:
      "Le lien a bien été reconnu, mais l’adresse associée était déjà désactivée pour l’infolettre.",
    tone: "blue",
    icon: "i",
  },
  invalid: {
    badge: "Lien invalide",
    title: "Impossible de valider ce lien de désinscription",
    message:
      "Le lien utilisé est incomplet, expiré ou invalide. Vous pouvez nous contacter si vous souhaitez confirmer votre désinscription.",
    tone: "yellow",
    icon: "!",
  },
  error: {
    badge: "Erreur temporaire",
    title: "La désinscription n’a pas pu être complétée",
    message:
      "Une erreur technique est survenue. Veuillez réessayer dans quelques instants ou nous contacter directement.",
    tone: "red",
    icon: "!",
  },
};

const TONE_CLASSES = {
  green: {
    badge: "bg-green-100 text-green-800 border-green-200",
    icon: "bg-green-100 text-green-700 border-green-200",
    panel: "border-green-200 bg-green-50",
  },
  blue: {
    badge: "bg-blue-100 text-blue-800 border-blue-200",
    icon: "bg-blue-100 text-blue-700 border-blue-200",
    panel: "border-blue-200 bg-blue-50",
  },
  yellow: {
    badge: "bg-yellow-100 text-yellow-800 border-yellow-200",
    icon: "bg-yellow-100 text-yellow-700 border-yellow-200",
    panel: "border-yellow-200 bg-yellow-50",
  },
  red: {
    badge: "bg-red-100 text-red-800 border-red-200",
    icon: "bg-red-100 text-red-700 border-red-200",
    panel: "border-red-200 bg-red-50",
  },
};

export default function Unsubscribe() {
  const [searchParams] = useSearchParams();
  const status = searchParams.get("status") || "invalid";
  const email = searchParams.get("email");
  const content = STATUS_CONTENT[status] || STATUS_CONTENT.invalid;
  const tone = TONE_CLASSES[content.tone];

  return (
    <section className="max-w-5xl mx-auto px-6 py-16 md:py-24">
      <div className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden">
        <div className="grid lg:grid-cols-[1.1fr_0.9fr]">
          <div className="p-8 md:p-12">
            <span
              className={`inline-flex items-center rounded-full border px-4 py-2 text-sm font-semibold ${tone.badge}`}
            >
              {content.badge}
            </span>

            <div
              className={`mt-8 flex h-16 w-16 items-center justify-center rounded-2xl border text-3xl font-bold ${tone.icon}`}
              aria-hidden="true"
            >
              {content.icon}
            </div>

            <h1 className="mt-8 text-4xl md:text-5xl font-bold tracking-tight text-[#111827]">
              {content.title}
            </h1>

            <p className="mt-6 text-lg leading-8 text-gray-700">
              {content.message}
            </p>

            {email && (
              <div className={`mt-8 rounded-2xl border p-5 ${tone.panel}`}>
                <p className="text-sm font-semibold text-gray-900 mb-1">
                  Adresse concernée
                </p>
                <p className="break-all text-gray-700">{email}</p>
              </div>
            )}

            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <Link
                to="/"
                className="inline-flex justify-center rounded-2xl bg-[#3B82F6] px-6 py-4 font-semibold text-white shadow hover:bg-[#2563EB] transition focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#3B82F6]/30"
              >
                Retour à l’accueil
              </Link>

              <Link
                to="/contact"
                className="inline-flex justify-center rounded-2xl border border-gray-200 bg-white px-6 py-4 font-semibold text-gray-700 shadow-sm hover:bg-gray-50 transition focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-gray-200"
              >
                Nous contacter
              </Link>
            </div>
          </div>

          <aside className="bg-[#111827] p-8 md:p-12 text-white flex flex-col justify-center">
            <p className="text-sm uppercase tracking-[0.25em] text-[#FACC15] font-semibold">
              Club Archeguin
            </p>
            <h2 className="mt-4 text-3xl font-bold">
              Gestion de l’infolettre
            </h2>
            <p className="mt-5 text-gray-300 leading-7">
              Cette page confirme uniquement votre préférence de communication.
              Votre inscription au club, vos forfaits ou vos activités ne sont pas affectés.
            </p>
            <div className="mt-8 rounded-2xl bg-white/10 p-5 border border-white/10">
              <p className="font-semibold text-white">Besoin d’aide ?</p>
              <a
                href="mailto:clubarcheguin@gmail.com"
                className="mt-2 inline-block text-[#FACC15] hover:underline"
              >
                clubarcheguin@gmail.com
              </a>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
