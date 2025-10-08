import { useId } from "react";

type HighlightCardProps = {
  title: string;
  text: string;
  onSelect: () => void;
  isActive: boolean;
};

export default function HighlightCard({
  title,
  text,
  onSelect,
  isActive,
}: HighlightCardProps) {
  const headingId = useId();
  const descriptionId = useId();

  const handlePointer = () => {
    onSelect();
  };

  return (
    <article
      className="group relative overflow-hidden rounded-3xl border border-white/12 bg-white/10 shadow-[0_25px_80px_-40px_rgba(10,20,60,0.9)] backdrop-blur-2xl transition"
      aria-labelledby={headingId}
      aria-describedby={descriptionId}
      role="listitem"
      data-active={isActive ? "true" : undefined}
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.18),transparent_55%)] opacity-70" />
      <button
        type="button"
        onClick={onSelect}
        onMouseEnter={handlePointer}
        onFocus={handlePointer}
        aria-labelledby={headingId}
        aria-describedby={descriptionId}
        aria-pressed={isActive}
        aria-current={isActive ? "true" : undefined}
        className={`relative flex w-full cursor-pointer flex-col gap-2 rounded-3xl px-6 py-5 text-left transition duration-300 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/80 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent ${
          isActive ? "bg-white/20 text-white" : "hover:bg-white/20 hover:text-white"
        }`}
      >
        <h3
          id={headingId}
          className={`text-xs font-semibold uppercase tracking-[0.35em] transition duration-300 ease-out ${
            isActive ? "text-white" : "text-white/65 group-hover:text-white"
          }`}
        >
          {title}
        </h3>
        <p
          id={descriptionId}
          className={`text-sm leading-relaxed transition duration-300 ease-out md:text-base ${
            isActive ? "text-white/90" : "text-white/80 group-hover:text-white"
          }`}
        >
          {text}
        </p>
        <span
          className={`flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.3em] transition duration-300 ease-out ${
            isActive ? "text-white/80" : "text-white/55 group-hover:text-white/80"
          }`}
        >
          {isActive ? "En lecture" : "Explorer"}
          <span
            aria-hidden="true"
            className={`transition-transform duration-300 ease-out ${
              isActive ? "translate-x-1" : "group-hover:translate-x-1"
            }`}
          >
            {">"}
          </span>
        </span>
      </button>
    </article>
  );
}
