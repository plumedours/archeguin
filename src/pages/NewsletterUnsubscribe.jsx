import Button from "../components/Button";

function getStatusContent(status) {
  switch (status) {
    case "success": return { title: "Désinscription confirmée", message: "Vous avez bien été désinscrit de l’infolettre du club Archeguin.", tone: "success" };
    case "already": return { title: "Déjà désinscrit", message: "Cette adresse était déjà désinscrite ou inactive.", tone: "info" };
    case "invalid": return { title: "Lien invalide", message: "Le lien de désinscription est invalide ou incomplet.", tone: "error" };
    case "expired": return { title: "Lien expiré", message: "Ce lien n’est plus valide. Vous pouvez nous contacter si vous souhaitez vérifier votre inscription.", tone: "error" };
    case "error": return { title: "Erreur temporaire", message: "Une erreur est survenue pendant la désinscription. Veuillez réessayer un peu plus tard.", tone: "error" };
    default: return { title: "Désinscription à l’infolettre", message: "Votre demande de désinscription doit passer par le lien reçu dans votre courriel.", tone: "info" };
  }
}

export default function NewsletterUnsubscribe() {
  const params = new URLSearchParams(window.location.hash.split("?")[1] || "");
  const content = getStatusContent(params.get("status") || "info");
  const classes = { success: "border-green-200 bg-green-50 text-green-800", info: "border-blue-200 bg-blue-50 text-blue-800", error: "border-red-200 bg-red-50 text-red-800" };

  return (
    <section className="section-shell flex min-h-[65vh] items-center py-16">
      <div className="mx-auto max-w-3xl rounded-[2rem] border border-[#18372b]/10 bg-white p-8 text-center shadow-xl shadow-[#18372b]/10 sm:p-12">
        <div className={`mx-auto mb-8 rounded-3xl border p-6 text-left ${classes[content.tone]}`}>
          <h1 className="text-3xl font-black">{content.title}</h1>
          <p className="mt-3 leading-7">{content.message}</p>
        </div>
        <p className="text-[#607066]">Vous pouvez revenir sur le site ou vous réinscrire plus tard si vous changez d’avis.</p>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <Button to="/" variant="primary">Retour à l’accueil</Button>
          <Button to="/newsletter/subscribe" variant="ghost">Me réinscrire</Button>
        </div>
      </div>
    </section>
  );
}
