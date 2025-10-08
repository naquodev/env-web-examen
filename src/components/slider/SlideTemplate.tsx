import { type ReactNode, useEffect, useRef } from "react";

export type HighlightSource = {
  label: string;
  url: string;
};

export type SlideHighlight = {
  title: string;
  text: string;
  details?: string;
  impact?: string;
  sources?: HighlightSource[];
  visual?: ReactNode;
};

export type SlideTemplateProps = {
  title: string;
  tagline: string;
  description: string;
  highlights: SlideHighlight[];
  index: number;
  total: number;
  supplement?: ReactNode;
};

export default function SlideTemplate({
  title,
  tagline,
  description,
  highlights,
  index,
  total,
  supplement,
}: SlideTemplateProps) {
  const highlightScrollRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (highlightScrollRef.current) {
      highlightScrollRef.current.scrollTop = 0;
    }
  }, [index, highlights]);

  return (
    <div className="relative flex h-full flex-col gap-12">
      <header className="flex flex-col gap-6 text-white">
        <p className="text-xs uppercase tracking-[0.45em] text-white/60">
          Slide {index + 1} / {total}
        </p>
        <h2 className="text-4xl font-semibold leading-tight md:text-5xl">{title}</h2>
        <p className="text-lg font-light text-white/70 md:text-xl">{tagline}</p>
        <p className="max-w-2xl text-base text-white/80 md:text-lg">{description}</p>
      </header>

      <div className="relative flex flex-1 min-h-[24rem] flex-col gap-6 overflow-hidden rounded-[36px] border border-white/15 bg-white/12 p-6 shadow-[0_45px_120px_-30px_rgba(12,32,75,0.85)] backdrop-blur-3xl md:p-8">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_12%,rgba(255,255,255,0.35),transparent_60%)] opacity-70" />
        <div className="pointer-events-none absolute inset-x-0 top-0 h-10 bg-gradient-to-b from-white/30 via-white/10 to-transparent" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-12 bg-gradient-to-t from-white/25 via-white/10 to-transparent" />

        <div
          ref={highlightScrollRef}
          className="highlight-scroll relative z-10 flex h-full flex-col gap-6 overflow-y-auto pr-2 sm:pr-3"
        >
          {highlights.map((highlight) => (
            <article
              key={highlight.title}
              className="relative overflow-hidden rounded-[28px] border border-white/12 bg-gradient-to-br from-slate-950/85 via-slate-900/70 to-slate-950/85 p-5 text-white/90 shadow-[0_22px_80px_-38px_rgba(10,30,75,0.85)] backdrop-blur-[36px] md:p-6"
            >
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_28%_18%,rgba(140,210,255,0.25),transparent_60%)] opacity-60" />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-white/5" />
              <div className="relative space-y-5">
                <header className="space-y-3">
                  <p className="text-xs uppercase tracking-[0.35em] text-white/65">Highlight</p>
                  <h3 className="text-2xl font-semibold text-white md:text-3xl">
                    {highlight.title}
                  </h3>
                  <p className="text-base leading-relaxed text-white/90 md:text-lg">
                    {highlight.text}
                  </p>
                </header>
                {highlight.details && (
                  <p className="text-sm leading-relaxed text-white/80 md:text-base">
                    {highlight.details}
                  </p>
                )}
                {highlight.visual && (
                  <div className="rounded-3xl border border-white/12 bg-white/12 p-5 backdrop-blur-[26px]">
                    {highlight.visual}
                  </div>
                )}
                {highlight.impact && (
                  <div className="rounded-2xl border border-white/12 bg-slate-950/40 p-4 text-sm text-white/85 md:text-base">
                    <span className="font-semibold uppercase tracking-[0.25em] text-white/60">
                      Impact
                    </span>
                    <p className="mt-2 leading-relaxed">{highlight.impact}</p>
                  </div>
                )}
                {highlight.sources && highlight.sources.length > 0 && (
                  <div className="space-y-2 text-sm text-white/75 md:text-base">
                    <p className="font-semibold uppercase tracking-[0.25em] text-white/55">
                      Pour aller plus loin
                    </p>
                    <ul className="space-y-1">
                      {highlight.sources.map((source) => (
                        <li key={source.url}>
                          <a
                            href={source.url}
                            className="text-white/90 underline decoration-white/35 underline-offset-4 transition hover:text-white"
                            target="_blank"
                            rel="noreferrer"
                          >
                            {source.label}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>

      {supplement && (
        <div className="relative overflow-hidden rounded-[32px] border border-white/15 bg-white/12 p-6 text-white/90 shadow-[0_35px_110px_-35px_rgba(12,32,75,0.8)] backdrop-blur-3xl md:p-8">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_22%_18%,rgba(255,255,255,0.3),transparent_60%)] opacity-65" />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/12 via-transparent to-white/6" />
          <div className="relative">{supplement}</div>
        </div>
      )}
    </div>
  );
}
