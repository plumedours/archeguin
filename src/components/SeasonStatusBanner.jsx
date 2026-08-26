import Button from "./Button";
import { usePublicJson } from "../utils/usePublicJson";
import { CheckCircle2, AlertCircle } from "lucide-react";

export const fallbackSeason = {
  indoorOpen: false,
  open: {
    statusLabel: "Salle intérieure ouverte",
    title: "La saison intérieure est en cours.",
    message:
      "Les séances du mercredi et du vendredi ont lieu à la salle de Saint-Romuald.",
    period: "D’octobre au début du printemps",
    details: "Consultez les horaires avant de vous présenter.",
    ctaLabel: "Voir les horaires",
  },
  closed: {
    statusLabel: "Salle intérieure fermée",
    title: "La salle est fermée pour la saison estivale.",
    message:
      "Les séances régulières en salle reprendront à l’automne. Durant l’été, le champ extérieur est accessible aux membres sur demande.",
    period: "Réouverture prévue en octobre",
    details: "Ne vous présentez pas à la salle pendant la fermeture estivale.",
    ctaLabel: "Demander les modalités",
  },
};

export function useSeasonStatus() {
  const result = usePublicJson("data/season.json", fallbackSeason);
  const season = result.data || fallbackSeason;
  const isOpen = season.indoorOpen === true;
  const content = isOpen
    ? season.open || fallbackSeason.open
    : season.closed || fallbackSeason.closed;

  return {
    ...result,
    data: season,
    season,
    isOpen,
    content,
  };
}

export default function SeasonStatusBanner({ className = "", compact = false }) {
  const { isOpen, content } = useSeasonStatus();
  const StatusIcon = isOpen ? CheckCircle2 : AlertCircle;

  return (
    <aside
      className={`relative overflow-hidden rounded-[2rem] border shadow-sm ${
        compact ? "p-5 sm:p-6" : "p-6 sm:p-7"
      } ${
        isOpen
          ? "border-[#18372b]/20 bg-[#edf5f0]"
          : "border-[#a56a43]/25 bg-[#fff7ea]"
      } ${className}`}
      role="status"
      aria-live="polite"
    >
      <div
        className={`pointer-events-none absolute inset-0 ${
          isOpen
            ? "bg-[radial-gradient(circle_at_top_left,rgba(24,55,43,0.08),transparent_35%)]"
            : "bg-[radial-gradient(circle_at_top_left,rgba(165,106,67,0.10),transparent_35%)]"
        }`}
      />

      <div className="relative z-10 flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex items-start gap-4">
          <div
            className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl text-white ${
              isOpen ? "bg-[#18372b]" : "bg-[#a56a43]"
            }`}
          >
            <StatusIcon className="h-6 w-6" strokeWidth={2.2} />
          </div>

          <div>
            <p
              className={`text-sm font-bold uppercase tracking-[0.2em] ${
                isOpen ? "text-[#18372b]" : "text-[#a56a43]"
              }`}
            >
              {content.statusLabel}
            </p>

            <h2 className={`${compact ? "mt-1 text-xl" : "mt-2 text-2xl"} font-black text-[#18372b]`}>
              {content.title}
            </h2>

            <p className="mt-2 max-w-3xl leading-7 text-[#607066]">
              {content.message}
            </p>

            {!compact && (
              <>
                <p className="mt-3 text-sm font-bold text-[#425047]">
                  {content.period}
                </p>
                <p className="mt-1 text-sm text-[#607066]">
                  {content.details}
                </p>
              </>
            )}
          </div>
        </div>

        <div className="shrink-0">
          <Button
            to={isOpen ? "/forfaits" : "/contact"}
            variant={isOpen ? "primary" : "accent"}
          >
            {content.ctaLabel}
          </Button>
        </div>
      </div>
    </aside>
  );
}
