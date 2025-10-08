import SlideTemplate from "@/components/slider/SlideTemplate";
import type { SlideComponent } from "@/components/slider/slideTypes";

type UrlVisualProps = {
  stage: string;
};

function UrlStructureVisual({ stage }: UrlVisualProps) {
  const segments = [
    {
      key: "Schéma et autorité",
      label: "Schéma + Autorité",
      sample: "https://api.exemple.fr",
      description: "Protocole, sous-domaine, domaine et TLD déterminent la cible",
    },
    {
      key: "Chemin et ressources",
      label: "Chemin",
      sample: "/produits/123",
      description: "Segments REST lisibles et hiérarchie fonctionnelle",
    },
    {
      key: "Paramètres et fragments",
      label: "Paramètres",
      sample: "?q=filtre&lang=fr#section-2",
      description: "Query côté serveur, fragment côté client ou SPA",
    },
    {
      key: "Statuts et redirections",
      label: "Statuts",
      sample: "301 → 308",
      description: "Redirections permanentes ou temporaires, gestion SEO",
    },
  ];

  return (
    <div className="space-y-4">
      <div className="overflow-hidden rounded-2xl border border-white/15 bg-slate-900/20">
        <div className="flex flex-wrap">
          {segments.map((segment) => {
            const isActive = segment.key === stage;
            return (
              <div
                key={segment.key}
                className={`flex min-w-[160px] flex-1 flex-col gap-1 border-b border-r border-white/5 px-4 py-3 text-xs uppercase tracking-[0.25em] last:border-r-0 md:text-[11px] ${
                  isActive ? "bg-gradient-to-br from-cyan-400/30 to-sky-500/30 text-white" : "text-white/60"
                }`}
              >
                <span>{segment.label}</span>
                <code className={`text-sm font-mono tracking-tight ${isActive ? "text-white" : "text-white/70"}`}>
                  {segment.sample}
                </code>
              </div>
            );
          })}
        </div>
      </div>
      <p className="text-xs text-white/70">
        {segments.find((segment) => segment.key === stage)?.description ?? ""}
      </p>
    </div>
  );
}

const highlights = [
  {
    title: "Schéma et autorité",
    text: "https:// indique le protocole sécurisé et l'hôte précise la zone exposée.",
    details:
      "Le schéma RFC 3986 suit la forme schéma://utilisateur:motdepasse@hôte:port. https force TLS et le port 443 par défaut. L'autorité regroupe sous-domaine, domaine et extension (TLD).",
    impact: "Valider certificat et hôte évite les alertes navigateur et protège les données.",
    sources: [
      { label: "RFC 3986", url: "https://www.rfc-editor.org/rfc/rfc3986" },
      { label: "MDN - URL overview", url: "https://developer.mozilla.org/en-US/docs/Learn/Common_questions/Web_mechanics/What_is_a_URL" },
    ],
    visual: <UrlStructureVisual stage="Schéma et autorité" />,
  },
  {
    title: "Chemin et ressources",
    text: "Les segments /produits/123 désignent la ressource cible.",
    details:
      "Le chemin doit être cohérent avec la hiérarchie fonctionnelle. Utiliser des slugs compréhensibles, respecter la casse et ajouter des extensions lorsqu'elles ont du sens (.json, .pdf).",
    impact: "Un routing clair facilite SEO, mise en cache CDN et support client.",
    sources: [
      { label: "RFC 3986 - Path", url: "https://www.rfc-editor.org/rfc/rfc3986#section-3.3" },
      { label: "REST Resource Naming", url: "https://restfulapi.net/resource-naming/" },
    ],
    visual: <UrlStructureVisual stage="Chemin et ressources" />,
  },
  {
    title: "Paramètres et fragments",
    text: "?utm_source=campagne transporte des filtres. #section reste côté client.",
    details:
      "Les query strings transmettent tri, pagination ou tracking (utm_*). Encoder les caractères réservés, filtrer côté serveur et éviter d'y exposer des secrets. Le fragment (#id) n'est jamais envoyé au serveur.",
    impact: "Limiter les paramètres réduit le duplicate content et les injections.",
    sources: [
      { label: "RFC 3986 - Query", url: "https://www.rfc-editor.org/rfc/rfc3986#section-3.4" },
      { label: "Google Analytics UTM", url: "https://support.google.com/analytics/answer/10915502" },
    ],
    visual: <UrlStructureVisual stage="Paramètres et fragments" />,
  },
  {
    title: "Statuts et redirections",
    text: "301/308 pour du permanent, 302/307 pour du temporaire.",
    details:
      "Une redirection renvoie un code 3xx et un en-tête Location. 301 et 308 préservent le référencement lors d'un déplacement définitif. 302 et 307 servent aux tests ou à la maintenance. Limiter les chaînes à deux sauts maximum.",
    impact: "Dirige correctement les utilisateurs et conserve le PageRank.",
    sources: [
      { label: "MDN - Redirections", url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Redirections" },
      { label: "MDN - 301 vs 302", url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/301" },
    ],
    visual: <UrlStructureVisual stage="Statuts et redirections" />,
  },
];

const supplement = (
  <div className="space-y-4">
    <header className="space-y-1">
      <p className="text-xs uppercase tracking-[0.35em] text-white/60">Checklist URL</p>
      <h4 className="text-xl font-semibold text-white">Points à vérifier</h4>
    </header>
    <ul className="grid gap-3 md:grid-cols-2 text-sm text-white/80">
      {[
        "Certificat TLS valide et HSTS actif",
        "URL canonique définie pour éviter le duplicate",
        "Paramètres filtrés et limités côté serveur",
        "Chaînes de redirection limitées à deux sauts",
      ].map((item) => (
        <li key={item} className="rounded-2xl border border-white/12 bg-white/8 p-4">
          {item}
        </li>
      ))}
    </ul>
  </div>
);

const UrlSlide: SlideComponent = ({ index, total }) => (
  <SlideTemplate
    title="URL : anatomie et statut"
    tagline="Lire une URL comme un pro"
    description="Schéma, chemin, paramètres et statuts composent une URL robuste et exploitable."
    highlights={highlights}
    index={index}
    total={total}
    supplement={supplement}
  />
);

UrlSlide.slideId = "url";
UrlSlide.bulletLabel = "URL";
UrlSlide.glow = "from-cyan-400/45 via-teal-400/20 to-emerald-400/35";
UrlSlide.glowAlt = "from-teal-400/25 via-cyan-300/15 to-blue-400/30";

export default UrlSlide;
