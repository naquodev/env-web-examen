import SlideTemplate from "@/components/slider/SlideTemplate";
import type { SlideComponent } from "@/components/slider/slideTypes";

const highlights = [
  {
    title: "W3C et WHATWG",
    text: "Ces organismes coordonnent HTML, CSS, DOM, Fetch ou Web Components via des processus ouverts.",
  },
  {
    title: "Interoperabilite",
    text: "Des specs testables garantissent que Chrome, Firefox, Safari et Edge interpretent le meme code.",
  },
  {
    title: "Accessibilite et performance",
    text: "WCAG, ARIA, HTTP/3 ou ECMAScript ameliorent inclusivite, securite et vitesse cote client comme serveur.",
  },
  {
    title: "Ecosysteme durable",
    text: "Standards = gouvernance, compatibilite et confiance pour developpeurs, editeurs et utilisateurs.",
  },
];

const StandardsSlide: SlideComponent = ({ index, total }) => (
  <SlideTemplate
    title="Standards du Web"
    tagline="Orchestrer l'interoperabilite"
    description="Les standards definissent les regles partagees qui permettent aux navigateurs, API et frameworks de coexister sans chaos."
    highlights={highlights}
    index={index}
    total={total}
  />
);

StandardsSlide.slideId = "standards";
StandardsSlide.bulletLabel = "Standards";
StandardsSlide.glow = "from-amber-400/40 via-orange-500/20 to-rose-500/35";
StandardsSlide.glowAlt = "from-orange-500/25 via-amber-400/15 to-red-400/30";

export default StandardsSlide;
