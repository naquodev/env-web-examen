import HighlightCard from "./HighlightCard";

export type SlideHighlight = {
  title: string;
  text: string;
};

export type SlideTemplateProps = {
  title: string;
  tagline: string;
  description: string;
  highlights: SlideHighlight[];
  index: number;
  total: number;
};

export default function SlideTemplate({
  title,
  tagline,
  description,
  highlights,
  index,
  total,
}: SlideTemplateProps) {
  return (
    <div className="relative grid gap-12 transition-all duration-500 ease-out md:grid-cols-[1.05fr_1.45fr]">
      <header className="flex flex-col gap-6">
        <p className="text-xs uppercase tracking-[0.45em] text-white/60">
          Slide {index + 1} / {total}
        </p>
        <h2 className="text-4xl font-semibold leading-tight text-white md:text-5xl">
          {title}
        </h2>
        <p className="text-lg font-light text-white/70 md:text-xl">{tagline}</p>
        <p className="max-w-lg text-base text-white/80 md:text-lg">
          {description}
        </p>
      </header>
      <div className="flex flex-col gap-5" role="list">
        {highlights.map((highlight) => (
          <HighlightCard key={highlight.title} {...highlight} />
        ))}
      </div>
    </div>
  );
}
