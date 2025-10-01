import { useId } from "react";

type HighlightCardProps = {
  title: string;
  text: string;
};

export default function HighlightCard({ title, text }: HighlightCardProps) {
  const headingId = useId();

  return (
    <article
      className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/10 px-6 py-5 shadow-[0_25px_80px_-40px_rgba(10,20,60,0.9)] backdrop-blur-2xl transition hover:border-white/20 hover:bg-white/20"
      aria-labelledby={headingId}
      role="listitem"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.18),transparent_55%)] opacity-70" />
      <div className="relative flex flex-col gap-2">
        <h3
          id={headingId}
          className="text-xs font-semibold uppercase tracking-[0.35em] text-white/60"
        >
          {title}
        </h3>
        <p className="text-sm leading-relaxed text-white/80 md:text-base">{text}</p>
      </div>
    </article>
  );
}
