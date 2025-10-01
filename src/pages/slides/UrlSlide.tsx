import SlideTemplate from "@/components/slider/SlideTemplate";
import type { SlideComponent } from "@/components/slider/slideTypes";

const highlights = [
  {
    title: "Schema et sous-domaine",
    text: "https:// indique le protocole securise ; app., www. ou api. precisent l'espace applicatif ou marketing.",
  },
  {
    title: "Chemin et ressources",
    text: "Les segments /produit/123 identifient la ressource ; veillez a la hierarchie logique et aux slugs lisibles.",
  },
  {
    title: "Parametres et requetes",
    text: "?utm_source=... transporte tracking et filtres ; limitez le nombre de parametres et validez cote serveur.",
  },
  {
    title: "Statuts et redirections",
    text: "301 pour un deplacement permanent, 302/307 pour du temporaire ; evitez les chaines de redirections.",
  },
];

const UrlSlide: SlideComponent = ({ index, total }) => (
  <SlideTemplate
    title="URL : anatomie et statut"
    tagline="Lire une URL comme un pro"
    description="Comprendre chaque segment d'une URL aide a diagnostiquer des erreurs, securiser des parcours et mesurer des campagnes."
    highlights={highlights}
    index={index}
    total={total}
  />
);

UrlSlide.slideId = "url";
UrlSlide.bulletLabel = "URL";
UrlSlide.glow = "from-cyan-400/45 via-teal-400/20 to-emerald-400/35";
UrlSlide.glowAlt = "from-teal-400/25 via-cyan-300/15 to-blue-400/30";

export default UrlSlide;
