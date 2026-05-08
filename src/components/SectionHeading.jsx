export default function SectionHeading({ eyebrow, title, children, align = "center" }) {
  const alignment = align === "left" ? "text-left" : "text-center mx-auto";
  return (
    <div className={`mb-10 max-w-3xl ${alignment}`}>
      {eyebrow && <p className="mb-3 text-sm font-bold uppercase tracking-[0.28em] text-[#a56a43]">{eyebrow}</p>}
      <h2 className="text-3xl font-black tracking-tight text-[#18372b] sm:text-4xl">{title}</h2>
      {children && <p className="mt-4 text-base leading-8 text-[#425047] sm:text-lg">{children}</p>}
    </div>
  );
}
