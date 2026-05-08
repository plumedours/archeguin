import { useSearchParams } from "react-router-dom";
import Button from "../components/Button";
import { site } from "../config/site";

const STATUS_CONTENT = {
  success: { badge: "Désinscription confirmée", title: "Vous êtes bien désinscrit de l’infolettre", message: "Votre adresse a été retirée de la liste d’envoi. Vous ne recevrez plus les prochaines infolettres du Club Archeguin.", tone: "success", icon: "✓" },
  already: { badge: "Déjà désinscrit", title: "Cette adresse semble déjà désinscrite", message: "Le lien a bien été reconnu, mais l’adresse associée était déjà désactivée pour l’infolettre.", tone: "info", icon: "i" },
  invalid: { badge: "Lien invalide", title: "Impossible de valider ce lien de désinscription", message: "Le lien utilisé est incomplet, expiré ou invalide. Vous pouvez nous contacter si vous souhaitez confirmer votre désinscription.", tone: "warning", icon: "!" },
  error: { badge: "Erreur temporaire", title: "La désinscription n’a pas pu être complétée", message: "Une erreur technique est survenue. Veuillez réessayer dans quelques instants ou nous contacter directement.", tone: "error", icon: "!" },
};

const classes = {
  success: "border-green-200 bg-green-50 text-green-800",
  info: "border-blue-200 bg-blue-50 text-blue-800",
  warning: "border-amber-200 bg-amber-50 text-amber-800",
  error: "border-red-200 bg-red-50 text-red-800",
};

export default function Unsubscribe() {
  const [searchParams] = useSearchParams();
  const status = searchParams.get("status") || "invalid";
  const email = searchParams.get("email");
  const content = STATUS_CONTENT[status] || STATUS_CONTENT.invalid;

  return (
    <section className="section-shell py-16 sm:py-24">
      <div className="overflow-hidden rounded-[2rem] border border-[#18372b]/10 bg-white shadow-xl shadow-[#18372b]/10">
        <div className="grid lg:grid-cols-[1.1fr_0.9fr]">
          <div className="p-8 sm:p-12">
            <span className={`inline-flex rounded-full border px-4 py-2 text-sm font-bold ${classes[content.tone]}`}>{content.badge}</span>
            <div className={`mt-8 flex h-16 w-16 items-center justify-center rounded-2xl border text-3xl font-black ${classes[content.tone]}`} aria-hidden="true">{content.icon}</div>
            <h1 className="mt-8 text-4xl font-black tracking-tight text-[#18372b] sm:text-5xl">{content.title}</h1>
            <p className="mt-6 text-lg leading-8 text-[#607066]">{content.message}</p>
            {email && (
              <div className="mt-8 rounded-2xl border border-[#18372b]/10 bg-[#f6f4ee] p-5">
                <p className="text-sm font-black text-[#18372b]">Adresse concernée</p>
                <p className="mt-1 break-all text-[#607066]">{email}</p>
              </div>
            )}
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <Button to="/" variant="primary">Retour à l’accueil</Button>
              <Button to="/contact" variant="ghost">Nous contacter</Button>
            </div>
          </div>
          <aside className="bg-[#18372b] p-8 text-white sm:p-12 lg:flex lg:flex-col lg:justify-center">
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#e8dcc7]">Club Archeguin</p>
            <h2 className="mt-4 text-3xl font-black">Gestion de l’infolettre</h2>
            <p className="mt-5 leading-7 text-white/72">Cette page confirme uniquement votre préférence de communication. Votre inscription au club, vos forfaits ou vos activités ne sont pas affectés.</p>
            <div className="mt-8 rounded-2xl border border-white/10 bg-white/10 p-5">
              <p className="font-black">Besoin d’aide ?</p>
              <a href={`mailto:${site.email}`} className="mt-2 inline-block text-[#e8dcc7] hover:underline">{site.email}</a>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
