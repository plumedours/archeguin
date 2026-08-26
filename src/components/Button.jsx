import { Link } from "react-router-dom";
import { ArrowIcon } from "./Icons";

const base = "focus-ring inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-bold transition duration-200";
const variants = {
  primary: "bg-[#18372b] text-white shadow-lg shadow-[#18372b]/20 hover:-translate-y-0.5 hover:bg-[#24513f]",
  accent: "bg-[#a56a43] text-white shadow-lg shadow-[#a56a43]/20 hover:-translate-y-0.5 hover:bg-[#8d5636]",
  light: "bg-white text-[#18372b] shadow-md shadow-black/5 hover:-translate-y-0.5 hover:bg-[#f6f4ee]",
  ghost: "border border-[#18372b]/15 bg-white/65 text-[#18372b] hover:-translate-y-0.5 hover:border-[#18372b]/35 hover:bg-white",
};

export default function Button({ to, href, children, variant = "primary", arrow = false, className = "", ...props }) {
  const classes = `${base} ${variants[variant] || variants.primary} ${className}`;
  const content = <>{children}{arrow && <ArrowIcon />}</>;

  if (to) {
    return <Link to={to} className={classes} {...props}>{content}</Link>;
  }

  return <a href={href} className={classes} {...props}>{content}</a>;
}
