export const asset = (p) => {
  const base = (import.meta.env.BASE_URL ?? "/").replace(/\/+$/, "");     // retire les / de fin
  const rel  = String(p ?? "").replace(/^\/+/, "");                        // retire les / de début
  return `${base}/${rel}`;
};