import { useMemo, useRef, useState } from "react";
import Button from "../components/Button";

const WORKER_SUBSCRIBE_URL = "https://archeguin.ca/newsletter/subscribe";
const COOLDOWN_STORAGE_KEY = "archeguin_newsletter_last_submit";
const COOLDOWN_MS = 60 * 1000;
const MIN_FORM_TIME_MS = 3500;

function isValidEmail(value) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(value).trim());
}

function getStatusContent(status) {
  switch (status) {
    case "success": return { title: "Inscription reçue", message: "Merci ! Votre inscription à l’infolettre a bien été reçue.", tone: "success" };
    case "pending": return { title: "Confirmation envoyée", message: "Un courriel de confirmation a été envoyé. Cliquez sur le lien reçu pour confirmer votre inscription.", tone: "success" };
    case "already": return { title: "Déjà inscrit", message: "Cette adresse courriel est déjà inscrite à l’infolettre.", tone: "info" };
    case "invalid": return { title: "Informations invalides", message: "Veuillez vérifier les informations saisies, puis réessayer.", tone: "error" };
    case "limited": return { title: "Trop de tentatives", message: "Veuillez patienter quelques minutes avant de refaire une demande.", tone: "error" };
    case "bot": return { title: "Demande refusée", message: "La demande n’a pas pu être validée. Rechargez la page, puis réessayez.", tone: "error" };
    case "error": return { title: "Erreur temporaire", message: "Une erreur est survenue. Veuillez réessayer un peu plus tard.", tone: "error" };
    default: return null;
  }
}

export default function NewsletterSubscribe() {
  const startedAtRef = useRef(Date.now());
  const params = new URLSearchParams(window.location.hash.split("?")[1] || "");
  const initialStatus = params.get("status");
  const [form, setForm] = useState({ email: "", firstName: "", lastName: "", phone: "", website: "", consent: false });
  const [status, setStatus] = useState(initialStatus || "");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const statusContent = useMemo(() => getStatusContent(status), [status]);

  function updateField(event) {
    const { name, value, type, checked } = event.target;
    setForm((current) => ({ ...current, [name]: type === "checkbox" ? checked : value }));
  }

  async function handleSubmit(event) {
    event.preventDefault();
    setMessage("");
    setStatus("");
    const email = form.email.trim();

    if (!isValidEmail(email)) return setMessage("Veuillez entrer une adresse courriel valide.");
    if (!form.consent) return setMessage("Veuillez confirmer votre consentement avant de vous inscrire.");
    if (form.website.trim() !== "") return setStatus("bot");
    if (Date.now() - startedAtRef.current < MIN_FORM_TIME_MS) return setStatus("bot");

    const lastSubmit = Number(localStorage.getItem(COOLDOWN_STORAGE_KEY) || 0);
    if (lastSubmit && Date.now() - lastSubmit < COOLDOWN_MS) return setStatus("limited");

    setIsSubmitting(true);
    try {
      const response = await fetch(WORKER_SUBSCRIBE_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({ email, firstName: form.firstName.trim(), lastName: form.lastName.trim(), phone: form.phone.trim(), consent: form.consent, website: form.website, startedAt: startedAtRef.current, submittedAt: Date.now() }),
      });
      let payload = null;
      try { payload = await response.json(); } catch { payload = null; }
      const nextStatus = payload?.status || (response.ok ? "success" : "error");
      localStorage.setItem(COOLDOWN_STORAGE_KEY, String(Date.now()));
      setStatus(nextStatus);
      if (response.ok && ["success", "pending", "already"].includes(nextStatus)) {
        setForm({ email: "", firstName: "", lastName: "", phone: "", website: "", consent: false });
        startedAtRef.current = Date.now();
      }
    } catch {
      setStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  }

  const alertClasses = {
    success: "border-green-200 bg-green-50 text-green-800",
    info: "border-blue-200 bg-blue-50 text-blue-800",
    error: "border-red-200 bg-red-50 text-red-800",
  };

  return (
    <section className="section-shell py-14 sm:py-20">
      <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
        <div>
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.28em] text-[#a56a43]">Infolettre</p>
          <h1 className="text-4xl font-black tracking-tight text-[#18372b] sm:text-6xl">Recevez les nouvelles du club.</h1>
          <p className="mt-6 text-lg leading-8 text-[#607066]">Activités, rappels de saison, communications importantes et annonces du Club Archeguin directement par courriel.</p>
          <div className="mt-8 grid gap-3 rounded-[2rem] border border-[#18372b]/10 bg-white p-6 shadow-sm">
            <p className="font-black text-[#18372b]">Ce que vous recevrez</p>
            <ul className="space-y-2 text-[#607066]">
              <li>• Informations importantes du club</li>
              <li>• Rappels d’activités et de saison</li>
              <li>• Aucun spam, désinscription possible en tout temps</li>
            </ul>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="rounded-[2rem] border border-[#18372b]/10 bg-white p-6 shadow-xl shadow-[#18372b]/10 sm:p-8">
          {statusContent && (
            <div className={`mb-6 rounded-2xl border p-4 ${alertClasses[statusContent.tone]}`}>
              <h2 className="font-black">{statusContent.title}</h2>
              <p className="mt-1 text-sm leading-6">{statusContent.message}</p>
            </div>
          )}
          {message && <div className="mb-6 rounded-2xl border border-amber-200 bg-amber-50 p-4 text-sm leading-6 text-amber-800">{message}</div>}

          <div className="grid gap-5 sm:grid-cols-2">
            <label className="sm:col-span-2">
              <span className="mb-2 block font-bold text-[#18372b]">Courriel *</span>
              <input name="email" type="email" autoComplete="email" required value={form.email} onChange={updateField} className="focus-ring w-full rounded-2xl border border-[#18372b]/15 px-4 py-3" placeholder="nom@exemple.com" />
            </label>
            <label>
              <span className="mb-2 block font-bold text-[#18372b]">Prénom *</span>
              <input name="firstName" type="text" autoComplete="given-name" required value={form.firstName} onChange={updateField} className="focus-ring w-full rounded-2xl border border-[#18372b]/15 px-4 py-3" />
            </label>
            <label>
              <span className="mb-2 block font-bold text-[#18372b]">Nom *</span>
              <input name="lastName" type="text" autoComplete="family-name" required value={form.lastName} onChange={updateField} className="focus-ring w-full rounded-2xl border border-[#18372b]/15 px-4 py-3" />
            </label>
            <label className="sm:col-span-2">
              <span className="mb-2 block font-bold text-[#18372b]">Téléphone / cellulaire</span>
              <input name="phone" type="tel" autoComplete="tel" value={form.phone} onChange={updateField} className="focus-ring w-full rounded-2xl border border-[#18372b]/15 px-4 py-3" placeholder="Optionnel" />
            </label>
            <div className="hidden" aria-hidden="true"><label>Site web<input name="website" type="text" tabIndex="-1" autoComplete="off" value={form.website} onChange={updateField} /></label></div>
            <label className="flex gap-3 rounded-2xl border border-[#18372b]/10 bg-[#f6f4ee] p-4 text-sm leading-6 text-[#425047] sm:col-span-2">
              <input name="consent" type="checkbox" checked={form.consent} onChange={updateField} className="mt-1 h-4 w-4" />
              <span>J’accepte de recevoir l’infolettre du club Archeguin. Je pourrai me désinscrire à tout moment à partir du lien présent dans les courriels.</span>
            </label>
          </div>

          <button type="submit" disabled={isSubmitting} className="focus-ring mt-7 inline-flex w-full items-center justify-center rounded-full bg-[#18372b] px-6 py-4 font-black text-white shadow-lg shadow-[#18372b]/20 transition hover:bg-[#24513f] disabled:cursor-not-allowed disabled:opacity-60">
            {isSubmitting ? "Inscription en cours…" : "S’inscrire à l’infolettre"}
          </button>
          <p className="mt-5 text-center text-sm leading-6 text-[#607066]">Nous respectons votre vie privée. Aucun spam, seulement les communications utiles du club.</p>
        </form>
      </div>
    </section>
  );
}
