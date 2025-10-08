import SlideTemplate from "@/components/slider/SlideTemplate";
import type { SlideComponent } from "@/components/slider/slideTypes";

type DomainVisualProps = {
  stage: string;
};

function DomainPrincipleVisual() {
  return (
    <div className="grid gap-3 rounded-3xl border border-white/12 bg-white/8 p-4 text-sm text-white/80 md:grid-cols-2">
      <div>
        <p className="text-xs uppercase tracking-[0.3em] text-white/60">Structure</p>
        <p className="mt-1">Nom lisible + extension (TLD) alignés avec la marque et le marché cible.</p>
      </div>
      <div>
        <p className="text-xs uppercase tracking-[0.3em] text-white/60">Services reliés</p>
        <p className="mt-1">Site, email, API et certificats exploitent la même zone DNS.</p>
      </div>
    </div>
  );
}

function DomainLifecycleVisual({ stage }: DomainVisualProps) {
  const steps = [
    { key: "Acteurs du dépôt", label: "Registre", hint: "ICANN, registre, registrar" },
    { key: "Cycle de vie", label: "Lifecycle", hint: "Enregistrement → Grace → Redemption" },
    { key: "DNS et résolution", label: "DNS", hint: "A, AAAA, CNAME, MX" },
    { key: "Bonnes pratiques", label: "Protection", hint: "DNSSEC, verrous, monitoring" },
  ];

  return (
    <div className="space-y-4">
      <div className="flex flex-col gap-3 md:flex-row md:items-center md:gap-5">
        {steps.map((step, index) => {
          const isActive = step.key === stage;
          return (
            <div key={step.key} className="flex items-center gap-3">
              <div
                className={`flex h-12 w-12 items-center justify-center rounded-full border text-xs font-semibold uppercase tracking-[0.25em] ${
                  isActive
                    ? "border-sky-300/60 bg-gradient-to-br from-sky-400/60 to-indigo-500/55 text-white"
                    : "border-white/15 bg-white/5 text-white/60"
                }`}
              >
                {index + 1}
              </div>
              <div className="min-w-[120px]">
                <p className={`text-sm font-semibold ${isActive ? "text-white" : "text-white/70"}`}>
                  {step.label}
                </p>
                <p className={`text-xs ${isActive ? "text-sky-100" : "text-white/45"}`}>{step.hint}</p>
              </div>
              {index < steps.length - 1 && <div className="hidden text-white/40 md:block">-</div>}
            </div>
          );
        })}
      </div>
      <div className="rounded-2xl border border-white/10 bg-white/6 p-4 text-xs text-white/80">
        <p>
          Un nom de domaine vit sous la responsabilité d'un registre, se réserve via un registrar et dépend d'une zone DNS pour être résolu par les navigateurs.
        </p>
      </div>
    </div>
  );
}

const highlights = [
  {
    title: "Principe",
    text: "Nom lisible pointant vers vos ressources via la zone DNS d'autorité.",
    details:
      "Un domaine représente votre identité numérique. Il associe une chaîne (example) et un TLD (.fr, .com). Le registrar gère la relation commerciale tandis que la zone DNS oriente les services (site, email, API).",
    impact: "Assure reconnaissance de la marque et facilite l'accès aux services.",
    sources: [
      { label: "ICANN - Domain Basics", url: "https://www.icann.org/" },
    ],
    visual: <DomainPrincipleVisual />,
  },
  {
    title: "Acteurs du dépôt",
    text: "Registrar, registre et titulaire (registrant) se partagent les rôles.",
    details:
      "L'ICANN accrédite les registrars (OVHcloud, Gandi...). Chaque extension (.fr, .com) est gérée par un registre (AFNIC, Verisign). Le registrant désigne contacts administratif, technique et facturation.",
    impact: "Identifier les interlocuteurs évite conflits et facilite transferts ou restaurations.",
    sources: [
      { label: "ICANN - Registries & Registrars", url: "https://www.icann.org/resources/pages/registries-2012-02-25-en" },
      { label: "AFNIC - Écosystème", url: "https://www.afnic.fr/ressources/actualites/perspectives/lecosysteme-des-noms-de-domaine/" },
    ],
    visual: <DomainLifecycleVisual stage="Acteurs du dépôt" />,
  },
  {
    title: "Cycle de vie",
    text: "Enregistrement 1-10 ans, grace period, redemption puis suppression.",
    details:
      "Après expiration, un domaine passe par une période de grâce (0-45 jours), puis redemption (30 jours payants) et enfin deletion (5 jours). Un transfert requiert un code auth-info et la levée d'un verrou.",
    impact: "Programmer les renouvellements garantit la disponibilité du service et le SEO.",
    sources: [
      { label: "ICANN - Domain Lifecycle", url: "https://www.icann.org/resources/pages/gtld-lifecycle-2012-02-25-en" },
      { label: "Verisign - Lifecycle", url: "https://www.verisign.com/en_US/domain-names/online/domain-name-registration/domain-name-lifecycle/index.xhtml" },
    ],
    visual: <DomainLifecycleVisual stage="Cycle de vie" />,
  },
  {
    title: "DNS et résolution",
    text: "Les serveurs autoritaires publient A, AAAA, CNAME, MX, TXT...",
    details:
      "Une requête parcourt la racine, le TLD puis atteint les serveurs autoritaires spécifiés chez le registrar. Les enregistrements A/AAAA pointent vers l'adresse IP, MX gère le mail, TXT sert SPF/DKIM, CAA contrôle les certificats.",
    impact: "Un DNS structuré limite la latence, sécurise les emails et évite les outages.",
    sources: [
      { label: "Cloudflare - DNS", url: "https://www.cloudflare.com/learning/dns/what-is-dns/" },
      { label: "RFC 1034", url: "https://www.rfc-editor.org/rfc/rfc1034" },
    ],
    visual: <DomainLifecycleVisual stage="DNS et résolution" />,
  },
  {
    title: "Bonnes pratiques",
    text: "Contact technique dédié, DNSSEC, WHOIS protégé, monitoring.",
    details:
      "Activer l'auto-renouvellement, séparer les comptes d'administration, utiliser DNSSEC si disponible, verrouiller le transfert (clientTransferProhibited) et recevoir des alertes sur changement WHOIS.",
    impact: "Réduit les risques de détournement de domaine et de phishing par typosquat.",
    sources: [
      { label: "CISA - DNS Security", url: "https://www.cisa.gov/resources-tools/resources/dns-security-best-practices" },
      { label: "AFNIC - DNSSEC", url: "https://www.afnic.fr/produits-et-services/dnssec/" },
    ],
    visual: <DomainLifecycleVisual stage="Bonnes pratiques" />,
  },
];

const supplement = (
  <div className="space-y-4">
    <header className="space-y-1">
      <p className="text-xs uppercase tracking-[0.35em] text-white/60">Checklist dépôt</p>
      <h4 className="text-xl font-semibold text-white">Piloter son portefeuille</h4>
    </header>
    <ul className="grid gap-3 md:grid-cols-2 text-sm text-white/80">
      {[
        "Activer l'auto-renouvellement et vérifier la carte bancaire",
        "Centraliser les identifiants registrar dans un coffre-fort",
        "Documenter les serveurs DNS autoritaires et leurs contacts",
        "Surveiller les variations WHOIS et les dyndns suspects",
      ].map((item) => (
        <li key={item} className="rounded-2xl border border-white/12 bg-white/8 p-4">
          {item}
        </li>
      ))}
    </ul>
  </div>
);

const DomainSlide: SlideComponent = ({ index, total }) => (
  <SlideTemplate
    title="Noms de domaine"
    tagline="La carte d'identité numérique"
    description="De la réservation à la résolution DNS, voici les mécanismes qui garantissent la présence en ligne d'un site."
    highlights={highlights}
    index={index}
    total={total}
    supplement={supplement}
  />
);

DomainSlide.slideId = "domain";
DomainSlide.bulletLabel = "Domaines";
DomainSlide.glow = "from-violet-500/40 via-purple-500/20 to-pink-500/35";
DomainSlide.glowAlt = "from-purple-500/25 via-fuchsia-400/15 to-rose-400/30";

export default DomainSlide;
