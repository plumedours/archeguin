import { Link } from "react-router-dom";

function getStatusContent(status) {
  switch (status) {
    case "success":
      return {
        title: "Désinscription confirmée",
        message: "Vous avez bien été désinscrit de l'infolettre du club Archeguin.",
        tone: "success",
      };
    case "already":
      return {
        title: "Déjà désinscrit",
        message: "Cette adresse était déjà désinscrite ou inactive.",
        tone: "info",
      };
    case "invalid":
      return {
        title: "Lien invalide",
        message: "Le lien de désinscription est invalide ou incomplet.",
        tone: "error",
      };
    case "expired":
      return {
        title: "Lien expiré",
        message: "Ce lien n'est plus valide. Vous pouvez nous contacter si vous souhaitez vérifier votre inscription.",
        tone: "error",
      };
    case "error":
      return {
        title: "Erreur temporaire",
        message: "Une erreur est survenue pendant la désinscription. Veuillez réessayer un peu plus tard.",
        tone: "error",
      };
    default:
      return {
        title: "Désinscription à l'infolettre",
        message: "Votre demande de désinscription doit passer par le lien reçu dans votre courriel.",
        tone: "info",
      };
  }
}

export default function NewsletterUnsubscribe() {
  const params = new URLSearchParams(window.location.hash.split("?")[1] || "");
  const status = params.get("status") || "info";
  const content = getStatusContent(status);

  const classes = {
    success: "border-green-200 bg-green-50 text-green-800",
    info: "border-blue-200 bg-blue-50 text-blue-800",
    error: "border-red-200 bg-red-50 text-red-800",
  };

  return (
    <main className="bg-slate-50">
      <section className="mx-auto flex min-h-[65vh] max-w-3xl items-center px-4 py-16">
        <div className="w-full rounded-3xl border border-slate-200 bg-white p-8 text-center shadow-sm sm:p-12">
          <div className={`mx-auto mb-6 rounded-3xl border p-5 text-left ${classes[content.tone]}`}>
            <h1 className="text-2xl font-bold sm:text-3xl">{content.title}</h1>
            <p className="mt-3 leading-7">{content.message}</p>
          </div>

          <p className="text-slate-600">
            Vous pouvez revenir sur le site ou vous réinscrire plus tard si vous changez d'avis.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Link
              to="/"
              className="rounded-2xl bg-[#3B82F6] px-6 py-3 font-semibold text-white transition hover:bg-blue-600"
            >
              Retour à l'accueil
            </Link>
            <Link
              to="/newsletter/subscribe"
              className="rounded-2xl border border-slate-300 px-6 py-3 font-semibold text-slate-700 transition hover:bg-slate-50"
            >
              Me réinscrire
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
