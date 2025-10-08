import SlideTemplate from "@/components/slider/SlideTemplate";
import type { SlideComponent } from "@/components/slider/slideTypes";

type StandardsVisualProps = {
  stage: string;
};

function StandardsConstellation({ stage }: StandardsVisualProps) {
  const clusters = [
    {
      key: "W3C et WHATWG",
      label: "Normes HTML/CSS",
      badges: ["HTML", "CSS", "DOM", "Fetch"],
    },
    {
      key: "Interopérabilité",
      label: "Web Platform Tests",
      badges: ["Blink", "Gecko", "WebKit", "Edge"],
    },
    {
      key: "Accessibilité et performance",
      label: "Accessibilité & Transport",
      badges: ["WCAG", "ARIA", "HTTP/3", "ECMAScript"],
    },
    {
      key: "Gouvernance durable",
      label: "Processus ouverts",
      badges: ["Consensus", "Patent RF", "Community", "Drafts"],
    },
  ];

  return (
    <div className="space-y-4">
      <div className="grid gap-3 md:grid-cols-2">
        {clusters.map((cluster) => {
          const isActive = cluster.key === stage;
          return (
            <div
              key={cluster.key}
              className={`rounded-3xl border p-4 transition ${
                isActive
                  ? "border-amber-200/60 bg-gradient-to-br from-amber-400/25 via-orange-500/20 to-rose-500/20 text-white"
                  : "border-white/10 bg-white/5 text-white/75"
              }`}
            >
              <p className="text-xs uppercase tracking-[0.25em] text-white/60">{cluster.label}</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {cluster.badges.map((badge) => (
                  <span
                    key={badge}
                    className={`rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] ${
                      isActive ? "bg-white/25 text-white" : "bg-white/10 text-white/70"
                    }`}
                  >
                    {badge}
                  </span>
                ))}
              </div>
            </div>
          );
        })}
      </div>
      <p className="text-xs text-white/70">
        Les standards évitent la fragmentation : mêmes APIs, mêmes attentes, moins de hacks navigateurs.
      </p>
    </div>
  );
}

const highlights = [
  {
    title: "W3C et WHATWG",
    text: "Organismes qui co-définissent HTML, CSS, DOM et Fetch.",
    details:
      "Le W3C publie des recommandations par consensus ouvert. WHATWG maintient un HTML vivant. Depuis 2019, un accord aligne les deux structures pour éviter la divergence.",
    impact: "Tous les navigateurs appliquent la même référence, ce qui limite les incompatibilités.",
    sources: [
      { label: "W3C - About", url: "https://www.w3.org/Consortium/" },
      { label: "W3C x WHATWG", url: "https://www.w3.org/2019/04/whatwg-cooperation/" },
    ],
    visual: <StandardsConstellation stage="W3C et WHATWG" />,
  },
  {
    title: "Interopérabilité",
    text: "Les Web Platform Tests valident les implémentations.",
    details:
      "Les acteurs du Web contribuent à une suite de tests partagés (WPT). Une fonctionnalité n'est considérée stable qu'une fois vérifiée sur Blink, Gecko et WebKit.",
    impact: "Réduit les hacks CSS ou JS spécifiques et accélère le debug multi-navigateurs.",
    sources: [
      { label: "web-platform-tests", url: "https://web-platform-tests.org/" },
      { label: "W3C - Interop", url: "https://www.w3.org/standards/about/interoperability" },
    ],
    visual: <StandardsConstellation stage="Interopérabilité" />,
  },
  {
    title: "Accessibilité et performance",
    text: "WCAG, ARIA, ECMAScript et HTTP/3 cadrent expérience et vitesse.",
    details:
      "WCAG et ARIA guident l'accessibilité des interfaces. TC39 fait évoluer ECMAScript chaque année. L'IETF publie HTTP/2 et HTTP/3 pour optimiser transport et sécurité.",
    impact: "Garantit des expériences inclusives et rapides, même sur réseaux limités.",
    sources: [
      { label: "W3C - WCAG", url: "https://www.w3.org/TR/WCAG22/" },
      { label: "IETF - HTTP/3", url: "https://www.rfc-editor.org/rfc/rfc9114" },
    ],
    visual: <StandardsConstellation stage="Accessibilité et performance" />,
  },
  {
    title: "Gouvernance durable",
    text: "Processus ouverts, brevets libres, groupes communautaires.",
    details:
      "Les spécifications W3C adoptent la politique Royalty-Free. Les drafts sont publics, les issues discutées dans des groupes ouverts et les implémentations pilotent l'évolution via feedback.",
    impact: "Préserve la confiance entre éditeurs, intégrateurs et constructeurs.",
    sources: [
      { label: "W3C Patent Policy", url: "https://www.w3.org/Consortium/Patent-Policy-20200915/" },
      { label: "W3C Process", url: "https://www.w3.org/Consortium/Process/" },
    ],
    visual: <StandardsConstellation stage="Gouvernance durable" />,
  },
];

const supplement = (
  <div className="space-y-4">
    <header className="space-y-1">
      <p className="text-xs uppercase tracking-[0.35em] text-white/60">Empilement</p>
      <h4 className="text-xl font-semibold text-white">De la couche réseau aux frameworks</h4>
    </header>
    <div className="grid gap-3 md:grid-cols-4 text-sm text-white/80">
      {[
        { tier: "Transport", items: "HTTP/3, TLS 1.3" },
        { tier: "Langages", items: "HTML, CSS, ECMAScript" },
        { tier: "APIs Web", items: "Fetch, WebAuthn, WebGPU" },
        { tier: "Frameworks", items: "React, Vue, Svelte, Angular" },
      ].map((layer) => (
        <div key={layer.tier} className="rounded-3xl border border-white/12 bg-white/8 p-4">
          <p className="text-xs uppercase tracking-[0.3em] text-white/55">{layer.tier}</p>
          <p className="mt-2 text-white">{layer.items}</p>
        </div>
      ))}
    </div>
  </div>
);

const StandardsSlide: SlideComponent = ({ index, total }) => (
  <SlideTemplate
    title="Standards du Web"
    tagline="Orchestrer l'interopérabilité"
    description="Les standards garantissent que navigateurs et plateformes interprètent le même code sans chaos."
    highlights={highlights}
    index={index}
    total={total}
    supplement={supplement}
  />
);

StandardsSlide.slideId = "standards";
StandardsSlide.bulletLabel = "Standards";
StandardsSlide.glow = "from-amber-400/40 via-orange-500/20 to-rose-500/35";
StandardsSlide.glowAlt = "from-orange-500/25 via-amber-400/15 to-red-400/30";

export default StandardsSlide;
