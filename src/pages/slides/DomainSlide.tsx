import SlideTemplate from "@/components/slider/SlideTemplate";
import type { SlideComponent } from "@/components/slider/slideTypes";

const highlights = [
  {
    title: "Acteurs du depot",
    text: "Le registrar s'appuie sur un registre (AFNIC, Verisign...) et un registrant gere les contacts administratifs.",
  },
  {
    title: "Cycle de vie",
    text: "Enregistrement (1-10 ans) -> periode de grace -> redemption -> suppression : surveillez les renouvellements.",
  },
  {
    title: "DNS et resolution",
    text: "Les serveurs autoritaires publient des enregistrements A, AAAA, CNAME, MX qui propagent l'adresse.",
  },
  {
    title: "Bonnes pratiques",
    text: "Contact technique separe, DNSSEC quand possible, WHOIS protege et suivi des transferts sortants.",
  },
];

const DomainSlide: SlideComponent = ({ index, total }) => (
  <SlideTemplate
    title="Noms de domaine"
    tagline="La carte d'identite numerique"
    description="Un nom de domaine se reserve aupres d'un bureau d'enregistrement et vit au rythme de son cycle DNS."
    highlights={highlights}
    index={index}
    total={total}
  />
);

DomainSlide.slideId = "domain";
DomainSlide.bulletLabel = "Domaines";
DomainSlide.glow = "from-violet-500/40 via-purple-500/20 to-pink-500/35";
DomainSlide.glowAlt = "from-purple-500/25 via-fuchsia-400/15 to-rose-400/30";

export default DomainSlide;
