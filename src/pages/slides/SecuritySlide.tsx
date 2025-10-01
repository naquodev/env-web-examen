import SlideTemplate from "@/components/slider/SlideTemplate";
import type { SlideComponent } from "@/components/slider/slideTypes";

const highlights = [
  {
    title: "Phishing et social engineering",
    text: "Campagnes email, clones de site et faux formulaires : deployez SPF/DKIM, banniere et MFA.",
  },
  {
    title: "Malware et injections",
    text: "Vigilance sur les uploads, dependances et XSS ; filtrez, mettez en sandbox et surveillez vos pipelines CI/CD.",
  },
  {
    title: "Brute force et credentials",
    text: "Limiter les tentatives, activer 2FA, stocker les mots de passe en bcrypt/argon2 et surveiller les fuites.",
  },
  {
    title: "Scraping vs abus",
    text: "Robots utiles vs malveillants : rate limiting, CAPTCHA adaptatifs et monitoring comportemental.",
  },
];

const SecuritySlide: SlideComponent = ({ index, total }) => (
  <SlideTemplate
    title="Securite du Web"
    tagline="Anticiper les menaces courantes"
    description="Proteger utilisateurs et donnees suppose de connaitre les vecteurs d'attaque et les garde-fous indispensables."
    highlights={highlights}
    index={index}
    total={total}
  />
);

SecuritySlide.slideId = "security";
SecuritySlide.bulletLabel = "Securite";
SecuritySlide.glow = "from-emerald-500/45 via-teal-500/20 to-cyan-500/40";
SecuritySlide.glowAlt = "from-teal-500/25 via-emerald-400/15 to-blue-500/30";

export default SecuritySlide;
