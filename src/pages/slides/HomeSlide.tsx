import { useSliderNavigation } from "@/components/slider/SliderNavigationContext";
import SlideTemplate from "@/components/slider/SlideTemplate";
import type { SlideComponent } from "@/components/slider/slideTypes";

type ModuleLink = {
  label: string;
  slideId: string;
};

type HomeHighlight = {
  title: string;
  text: string;
  details: string;
  impact: string;
};

type InfoCardProps = {
  stage: string;
};

function HomeVisual({ stage }: InfoCardProps) {
  const infoMap: Record<string, string> = {
    "Navigation fluide":
      "Fleches gauche/droite, clic sur les puces et swipe tactile",
    "Effet liquid glass":
      "Fond translucide, halo lumineux, profondeur et blur progressif",
    "5 modules cles":
      "Timeline, URL, Domaines, Standards, Securite, recap convivial",
  };

  return (
    <div className="rounded-3xl border border-white/12 bg-white/8 p-4 text-sm text-white/80">
      <p className="text-xs uppercase tracking-[0.3em] text-white/60">
        Experience
      </p>
      <p className="mt-2 text-white/90">{infoMap[stage]}</p>
    </div>
  );
}

const highlights: HomeHighlight[] = [
  {
    title: "Navigation fluide",
    text: "Utilisez les puces rondes ou les fleches du clavier pour explorer chaque module.",
    details:
      "Le slider gere le clic, le tap et les fleches directionnelles pour des transitions continues. L'animation portal conserve le contexte visuel et renforce l'impression de profondeur.",
    impact:
      "Permet une lecture lineaire ou ciblable selon le besoin sans casser le flow.",
  },
  {
    title: "Effet liquid glass",
    text: "Surface translucide, halos et flous dynamiques mettent les contenus en valeur.",
    details:
      "Les panneaux combinent blur, degrades froids et ombres diffuses pour recreer une ambiance glassmorphism proche de visionOS. Le contraste a ete calibre pour garder la lisibilite du texte.",
    impact:
      "Offre une presentation premium qui hierechise le contenu sans nuire a la lecture.",
  },
  {
    title: "5 modules cles",
    text: "Timeline, URL, domaines, standards et securite offrent un panorama complet.",
    details:
      "Chaque module condense un savoir essentiel: jalons historiques, anatomie d'une URL, cycle de vie d'un domaine, gouvernance des standards et menaces de securite.",
    impact:
      "Constitue un kit de revision clair pour reussir l'examen ou preparer une presentation.",
  },
];

const modules: ModuleLink[] = [
  { label: "Timeline", slideId: "timeline" },
  { label: "URL", slideId: "url" },
  { label: "Domaines", slideId: "domain" },
  { label: "Standards", slideId: "standards" },
  { label: "Securite", slideId: "security" },
];

const HomeSlide: SlideComponent = ({ index, total }) => {
  const { goToSlideId, activeSlideId } = useSliderNavigation();

  const mappedHighlights = highlights.map((entry) => ({
    title: entry.title,
    text: entry.text,
    details: entry.details,
    impact: entry.impact,
    visual: <HomeVisual stage={entry.title} />,
  }));

  const supplement = (
    <div className="space-y-4">
      <header className="space-y-1">
        <p className="text-xs uppercase tracking-[0.35em] text-white/60">
          Modules
        </p>
        <p className="text-sm text-white/75">
          Accedez directement au module qui vous interesse en un clic ou avec
          les fleches.
        </p>
      </header>
      <div className="flex flex-wrap gap-3 text-sm text-white/85">
        {modules.map((module) => {
          const isActive = activeSlideId === module.slideId;
          return (
            <button
              key={module.slideId}
              type="button"
              onClick={() => goToSlideId(module.slideId)}
              className={`rounded-full border px-4 py-2 uppercase tracking-[0.3em] transition ${
                isActive
                  ? "border-white/80 bg-white/90 text-slate-900"
                  : "border-white/20 bg-white/10 text-white/85 hover:border-white/35 hover:bg-white/25"
              }`}
            >
              {module.label}
            </button>
          );
        })}
      </div>
    </div>
  );

  return (
    <SlideTemplate
      title="Home"
      tagline="Bienvenue dans l'exploration du Web"
      description="Parcourez les piliers du Web moderne dans une ambiance liquid glass inspiree des interfaces Apple."
      highlights={mappedHighlights}
      index={index}
      total={total}
      supplement={supplement}
    />
  );
};

HomeSlide.slideId = "home";
HomeSlide.bulletLabel = "Home";
HomeSlide.glow = "from-sky-500/40 via-blue-500/20 to-purple-500/40";
HomeSlide.glowAlt = "from-purple-500/30 via-blue-400/20 to-cyan-400/35";

export default HomeSlide;
