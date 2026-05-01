import { useMemo, useRef, useState } from "react";

const WORKER_SUBSCRIBE_URL = "https://archeguin.ca/newsletter/subscribe";
const COOLDOWN_STORAGE_KEY = "archeguin_newsletter_last_submit";
const COOLDOWN_MS = 60 * 1000;
const MIN_FORM_TIME_MS = 3500;

function isValidEmail(value) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(value).trim());
}

function getStatusContent(status) {
  switch (status) {
    case "success":
      return {
        title: "Inscription reçue",
        message:
          "Merci ! Votre inscription à l'infolettre a bien été reçue.",
        tone: "success",
      };
    case "pending":
      return {
        title: "Confirmation envoyée",
        message:
          "Un courriel de confirmation a été envoyé. Cliquez sur le lien reçu pour confirmer votre inscription.",
        tone: "success",
      };
    case "already":
      return {
        title: "Déjà inscrit",
        message: "Cette adresse courriel est déjà inscrite à l'infolettre.",
        tone: "info",
      };
    case "invalid":
      return {
        title: "Informations invalides",
        message: "Veuillez vérifier les informations saisies, puis réessayer.",
        tone: "error",
      };
    case "limited":
      return {
        title: "Trop de tentatives",
        message: "Veuillez patienter quelques minutes avant de refaire une demande.",
        tone: "error",
      };
    case "bot":
      return {
        title: "Demande refusée",
        message: "La demande n'a pas pu être validée. Rechargez la page, puis réessayez.",
        tone: "error",
      };
    case "error":
      return {
        title: "Erreur temporaire",
        message: "Une erreur est survenue. Veuillez réessayer un peu plus tard.",
        tone: "error",
      };
    default:
      return null;
  }
}

export default function NewsletterSubscribe() {
  const startedAtRef = useRef(Date.now());
  const params = new URLSearchParams(window.location.hash.split("?")[1] || "");
  const initialStatus = params.get("status");

  const [form, setForm] = useState({
    email: "",
    firstName: "",
    lastName: "",
    phone: "",
    website: "",
    consent: false,
  });
  const [status, setStatus] = useState(initialStatus || "");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const statusContent = useMemo(() => getStatusContent(status), [status]);

  function updateField(event) {
    const { name, value, type, checked } = event.target;
    setForm((current) => ({
      ...current,
      [name]: type === "checkbox" ? checked : value,
    }));
  }

  async function handleSubmit(event) {
    event.preventDefault();
    setMessage("");
    setStatus("");

    const email = form.email.trim();

    if (!isValidEmail(email)) {
      setMessage("Veuillez entrer une adresse courriel valide.");
      return;
    }

    if (!form.consent) {
      setMessage("Veuillez confirmer votre consentement avant de vous inscrire.");
      return;
    }

    if (form.website.trim() !== "") {
      setStatus("bot");
      return;
    }

    if (Date.now() - startedAtRef.current < MIN_FORM_TIME_MS) {
      setStatus("bot");
      return;
    }

    const lastSubmit = Number(localStorage.getItem(COOLDOWN_STORAGE_KEY) || 0);
    if (lastSubmit && Date.now() - lastSubmit < COOLDOWN_MS) {
      setStatus("limited");
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch(WORKER_SUBSCRIBE_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          email,
          firstName: form.firstName.trim(),
          lastName: form.lastName.trim(),
          phone: form.phone.trim(),
          consent: form.consent,
          website: form.website,
          startedAt: startedAtRef.current,
          submittedAt: Date.now(),
        }),
      });

      let payload = null;
      try {
        payload = await response.json();
      } catch {
        payload = null;
      }

      const nextStatus = payload?.status || (response.ok ? "success" : "error");
      localStorage.setItem(COOLDOWN_STORAGE_KEY, String(Date.now()));
      setStatus(nextStatus);

      if (response.ok && ["success", "pending", "already"].includes(nextStatus)) {
        setForm({
          email: "",
          firstName: "",
          lastName: "",
          phone: "",
          website: "",
          consent: false,
        });
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
    <main className="bg-gradient-to-b from-slate-50 to-white">
      <section className="mx-auto flex min-h-[calc(100vh-220px)] max-w-3xl items-center px-4 py-14 sm:py-20">
        <div className="w-full">
          <div className="mb-8 text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-[#3B82F6]">
              Infolettre
            </p>
            <h1 className="text-3xl font-bold text-slate-900 sm:text-5xl">
              Inscription à l'infolettre
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
              Recevez les nouvelles, activités et communications importantes du club Archeguin directement par courriel.
            </p>
          </div>

          <form
            onSubmit={handleSubmit}
            className="rounded-3xl border border-slate-200 bg-white p-6 shadow-xl shadow-slate-200/60 sm:p-8"
          >
            {statusContent && (
              <div className={`mb-6 rounded-2xl border p-4 ${alertClasses[statusContent.tone]}`}>
                <h2 className="font-semibold">{statusContent.title}</h2>
                <p className="mt-1 text-sm leading-6">{statusContent.message}</p>
              </div>
            )}

            {message && (
              <div className="mb-6 rounded-2xl border border-amber-200 bg-amber-50 p-4 text-sm leading-6 text-amber-800">
                {message}
              </div>
            )}

            <div className="grid gap-5 sm:grid-cols-2">
              <div className="sm:col-span-2">
                <label htmlFor="email" className="mb-2 block font-medium text-slate-800">
                  Courriel <span className="text-red-500">*</span>
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  value={form.email}
                  onChange={updateField}
                  className="w-full rounded-2xl border border-slate-300 px-4 py-3 outline-none transition focus:border-[#3B82F6] focus:ring-4 focus:ring-blue-100"
                  placeholder="nom@exemple.com"
                />
              </div>

              <div>
                <label htmlFor="firstName" className="mb-2 block font-medium text-slate-800">
                  Prénom  <span className="text-red-500">*</span>
                </label>
                <input
                  id="firstName"
                  name="firstName"
                  type="text"
                  autoComplete="given-name"
                  required
                  value={form.firstName}
                  onChange={updateField}
                  className="w-full rounded-2xl border border-slate-300 px-4 py-3 outline-none transition focus:border-[#3B82F6] focus:ring-4 focus:ring-blue-100"
                  placeholder="John"
                />
              </div>

              <div>
                <label htmlFor="lastName" className="mb-2 block font-medium text-slate-800">
                  Nom  <span className="text-red-500">*</span>
                </label>
                <input
                  id="lastName"
                  name="lastName"
                  type="text"
                  autoComplete="family-name"
                  required
                  value={form.lastName}
                  onChange={updateField}
                  className="w-full rounded-2xl border border-slate-300 px-4 py-3 outline-none transition focus:border-[#3B82F6] focus:ring-4 focus:ring-blue-100"
                  placeholder="Doe"
                />
              </div>

              <div className="sm:col-span-2">
                <label htmlFor="phone" className="mb-2 block font-medium text-slate-800">
                  Téléphone / cellulaire
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  autoComplete="tel"
                  value={form.phone}
                  onChange={updateField}
                  className="w-full rounded-2xl border border-slate-300 px-4 py-3 outline-none transition focus:border-[#3B82F6] focus:ring-4 focus:ring-blue-100"
                  placeholder="Optionnel"
                />
              </div>

              <div className="hidden" aria-hidden="true">
                <label htmlFor="website">Site web</label>
                <input
                  id="website"
                  name="website"
                  type="text"
                  tabIndex="-1"
                  autoComplete="off"
                  value={form.website}
                  onChange={updateField}
                />
              </div>

              <label className="sm:col-span-2 flex gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-4 text-sm leading-6 text-slate-700">
                <input
                  name="consent"
                  type="checkbox"
                  checked={form.consent}
                  onChange={updateField}
                  className="mt-1 h-4 w-4 rounded border-slate-300 text-[#3B82F6] focus:ring-[#3B82F6]"
                />
                <span>
                  J'accepte de recevoir l'infolettre du club Archeguin. Je pourrai me désinscrire à tout moment à partir du lien présent dans les courriels.
                </span>
              </label>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="mt-7 inline-flex w-full items-center justify-center rounded-2xl bg-[#3B82F6] px-6 py-3 font-semibold text-white shadow-sm transition hover:bg-blue-600 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {isSubmitting ? "Inscription en cours..." : "S'inscrire"}
            </button>

            <p className="mt-5 text-center text-sm leading-6 text-slate-500">
              Nous respectons votre vie privée. Aucun spam, seulement les communications utiles du club Archeguin.
            </p>
          </form>
        </div>
      </section>
    </main>
  );
}
