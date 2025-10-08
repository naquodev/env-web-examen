import SlideTemplate from "@/components/slider/SlideTemplate";
import type { SlideComponent } from "@/components/slider/slideTypes";

type SecurityVisualProps = {
  stage: string;
};

function SecurityBestPracticesVisual() {
  return (
    <div className="grid gap-3 rounded-3xl border border-white/12 bg-white/8 p-4 text-sm text-white/80 md:grid-cols-2">
      {[
        "Journaliser acces et actions sensibles",
        "Segmenter reseau (prod/preprod/test)",
        "Plan de reponse crise et sauvegardes",
        "Audits reguliers et bug bounty",
      ].map((item) => (
        <div key={item} className="rounded-2xl border border-white/10 bg-white/6 p-3">
          {item}
        </div>
      ))}
    </div>
  );
}

function SecurityMatrix({ stage }: SecurityVisualProps) {
  const quadrants = [
    {
      key: "Phishing et engineering social",
      title: "Humain",
      measures: "SPF, DKIM, DMARC, MFA, formation, veille typosquat",
    },
    {
      key: "Malware et injections",
      title: "Code",
      measures: "Validation entrees, CSP, analyse uploads, chaine CI/CD",
    },
    {
      key: "Brute force et credentials",
      title: "Identites",
      measures: "MFA, Argon2/bcrypt, rate limiting, detection fuite",
    },
    {
      key: "Scraping vs abus",
      title: "Trafic",
      measures: "Bot management, quotas, CAPTCHA adaptatif, logs",
    },
  ];

  return (
    <div className="space-y-4">
      <div className="grid gap-3 md:grid-cols-2">
        {quadrants.map((quadrant) => {
          const isActive = quadrant.key === stage;
          return (
            <div
              key={quadrant.key}
              className={`rounded-3xl border p-4 text-sm transition ${
                isActive
                  ? "border-emerald-300/60 bg-gradient-to-br from-emerald-400/25 via-teal-400/20 to-cyan-400/20 text-white"
                  : "border-white/10 bg-white/5 text-white/75"
              }`}
            >
              <p className="text-xs uppercase tracking-[0.3em] text-white/60">{quadrant.title}</p>
              <p className="mt-2 text-white/90">{quadrant.measures}</p>
            </div>
          );
        })}
      </div>
      <p className="text-xs text-white/70">
        Equilibrer prevention, detection et reponse reduit la surface d'attaque.
      </p>
    </div>
  );
}

const highlights = [
  {
    title: "Phishing et engineering social",
    text: "Emails clones, faux formulaires et SMS malveillants ciblent l'humain.",
    details:
      "Authentifier les emails (SPF, DKIM, DMARC), ajouter des banniere d'alerte, generaliser MFA et surveiller les noms proches (typosquat).",
    impact: "Limite le vol d'identifiants et protege la relation utilisateur.",
    sources: [
      { label: "CISA - Phishing", url: "https://www.cisa.gov/news-events/newsstopransomware/guidance-phishing" },
      { label: "DMARC.org", url: "https://dmarc.org/overview/" },
    ],
    visual: <SecurityMatrix stage="Phishing et engineering social" />,
  },
  {
    title: "Malware et injections",
    text: "XSS, uploads malveillants et dependances compromises visent vos apps.",
    details:
      "Valider les entrees, appliquer CSP, limiter/ scanner les fichiers, surveiller la supply chain (revue dependances, signatures, SBOM).",
    impact: "Evite defacement, fuite de donnees et intrusion via CI/CD.",
    sources: [
      { label: "OWASP - XSS prevention", url: "https://owasp.org/www-community/xss-prevention" },
      { label: "GitHub - Supply chain", url: "https://docs.github.com/en/code-security/supply-chain-security" },
    ],
    visual: <SecurityMatrix stage="Malware et injections" />,
  },
  {
    title: "Brute force et credentials",
    text: "Bots testent combos fuit es ou incrementent les mots de passe.",
    details:
      "Imposer MFA ou passkeys, hasher avec Argon2/bcrypt, limiter les tentatives, appliquer captchas adaptatifs et surveiller les dumps d'identifiants.",
    impact: "Protège comptes clients et admins contre les compromissions massives.",
    sources: [
      { label: "NIST SP 800-63B", url: "https://pages.nist.gov/800-63-3/sp800-63b.html" },
      { label: "OWASP - Authentication", url: "https://cheatsheetseries.owasp.org/cheatsheets/Authentication_Cheat_Sheet.html" },
    ],
    visual: <SecurityMatrix stage="Brute force et credentials" />,
  },
  {
    title: "Scraping vs abus",
    text: "Distinguer robots utiles, extraction legitime et abus massifs.",
    details:
      "Respecter robots.txt pour les crawlers legitimes, appliquer rate limiting, reputations user-agent, captchas progressifs et canaux legaux pour partenaires data.",
    impact: "Preserve disponibilite et valeur sans bloquer le SEO.",
    sources: [
      { label: "Cloudflare - Bot management", url: "https://www.cloudflare.com/learning/bots/what-is-bot-management/" },
      { label: "Google - Control crawling", url: "https://developers.google.com/search/docs/crawling-indexing/robots/intro" },
    ],
    visual: <SecurityMatrix stage="Scraping vs abus" />,
  },
  {
    title: "Bonnes pratiques",
    text: "Journalisation, segmentation et plan de reponse assurent la resilience.",
    details:
      "Activer logs et alertes sur acces critiques, isoler reseaux (prod, preprod, dev), maintenir plans de crise et sauvegardes teste es, organiser audits et bug bounty.",
    impact: "Reduit le temps de reaction et limite l'impact financier et reputatif.",
    sources: [
      { label: "ANSSI - Guide SSI", url: "https://www.ssi.gouv.fr/" },
    ],
    visual: <SecurityBestPracticesVisual />,
  },
];

const supplement = (
  <div className="space-y-4">
    <header className="space-y-1">
      <p className="text-xs uppercase tracking-[0.35em] text-white/60">Plan d'action</p>
      <h4 className="text-xl font-semibold text-white">Defense par couches</h4>
    </header>
    <ol className="grid gap-3 md:grid-cols-4 text-sm text-white/80">
      {[
        "Visibilite: inventaire assets, telemetry, journaux",
        "Prevention: MFA, revue de code, gestion secrets",
        "Detection: SIEM, honeypots, alertes comportement",
        "Reponse: runbooks, bastion admin, exercices crise",
      ].map((item, index) => (
        <li key={item} className="rounded-3xl border border-white/12 bg-white/8 p-4">
          <p className="text-xs uppercase tracking-[0.3em] text-white/55">Etape {index + 1}</p>
          <p className="mt-2 text-white">{item}</p>
        </li>
      ))}
    </ol>
  </div>
);

const SecuritySlide: SlideComponent = ({ index, total }) => (
  <SlideTemplate
    title="Securite du Web"
    tagline="Anticiper les menaces courantes"
    description="Reperer les attaques classiques et mettre en place des garde-fous pour proteger utilisateurs et donnees."
    highlights={highlights}
    index={index}
    total={total}
    supplement={supplement}
  />
);

SecuritySlide.slideId = "security";
SecuritySlide.bulletLabel = "Securite";
SecuritySlide.glow = "from-emerald-500/45 via-teal-500/20 to-cyan-500/40";
SecuritySlide.glowAlt = "from-teal-500/25 via-emerald-400/15 to-blue-500/30";

export default SecuritySlide;
