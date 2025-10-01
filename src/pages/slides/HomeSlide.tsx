import SlideTemplate from "@/components/slider/SlideTemplate";
import type { SlideComponent } from "@/components/slider/slideTypes";

const highlights = [
  {
    title: "Navigation fluide",
    text: "Cliquez sur les puces rondes ou utilisez les fleches du clavier pour voyager entre les slides.",
  },
  {
    title: "Effet liquid glass",
    text: "Surface translucide, halo lumineux et flou dynamique mettent en valeur chaque information.",
  },
  {
    title: "6 modules clés",
    text: "Timeline, URL, domaines, standards et securite : un concentre d'essentiels pour maitriser le Web.",
  },
];

const HomeSlide: SlideComponent = ({ index, total }) => (
  <SlideTemplate
    title="Home"
    tagline="Bienvenue dans l'exploration du Web"
    description="Parcourez les grandes thematiques du Web moderne dans une ambiance liquid glass inspirée d'iOS 26."
    highlights={highlights}
    index={index}
    total={total}
  />
);

HomeSlide.slideId = "home";
HomeSlide.bulletLabel = "Home";
HomeSlide.glow = "from-sky-500/40 via-blue-500/20 to-purple-500/40";
HomeSlide.glowAlt = "from-purple-500/30 via-blue-400/20 to-cyan-400/35";

export default HomeSlide;
