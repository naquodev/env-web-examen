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
  const map: Record<string, string> = {
    "Navigation fluide": "Clavier gauche/droite, clic ou swipe",
    "Effet liquid glass": "Blur, halo lumineux et profondeur",
    "5 modules clés": "Timeline, URL, Domaines, Standards, Sécurité",
  };

  return (
    <div className="rounded-3xl border border-white/12 bg-white/8 p-4 text-sm text-white/80">
      <p className="text-xs uppercase tracking-[0.3em] text-white/60">
        Expérience
      </p>
      <p className="mt-2 text-white/90">{map[stage]}</p>
    </div>
  );
}

const highlights: HomeHighlight[] = [
  {
    title: "Navigation fluide",
    text: "Utilisez les puces rondes ou les flèches du clavier pour explorer chaque module.",
    details:
      "Le slider gère à la fois le clic, le tap et les flèches gauche et droite pour faire défiler les sections sans rupture. L'animation portal conserve le contexte visuel et renforce l'impression de profondeur.",
    impact:
      "Permet une lecture linéaire ou ciblée selon le besoin sans casser le flow.",
  },
  {
    title: "Effet liquid glass",
    text: "Surface translucide, halos et flous dynamiques mettent les contenus en valeur.",
    details:
      "Les panneaux combinent blur, dégradés froids et ombres diffuses pour recréer une ambiance glassmorphism proche de visionOS. Le contraste a été calibré pour garder la lisibilité du texte.",
    impact:
      "Offre une présentation premium qui hiérarchise le contenu sans nuire à la lecture.",
  },
  {
    title: "5 modules clés",
    text: "Timeline, URL, domaines, standards et sécurité offrent un panorama complet.",
    details:
      "Chaque module condense un savoir essentiel : jalons historiques, anatomie d'une URL, cycle de vie d'un domaine, gouvernance des standards et menaces de sécurité.",
    impact:
      "Constitue un kit de révision clair pour réussir l'examen ou préparer une présentation.",
  },
];

const modules: ModuleLink[] = [
  { label: "Timeline", slideId: "timeline" },
  { label: "URL", slideId: "url" },
  { label: "Domaines", slideId: "domain" },
  { label: "Standards", slideId: "standards" },
  { label: "Sécurité", slideId: "security" },
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
          Accédez directement au module qui vous intéresse en un clic ou avec
          les flèches.
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
      description="Parcourez les piliers du Web moderne dans une ambiance liquid glass inspirée des interfaces Apple."
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
