import SlideTemplate from "@/components/slider/SlideTemplate";
import type { SlideComponent } from "@/components/slider/slideTypes";

type TimelineVisualProps = {
  index: number;
  total: number;
  period: string;
  impact?: string;
};

function TimelineVisual({ index, total, period, impact }: TimelineVisualProps) {
  const progress = total > 1 ? index / (total - 1) : 0.5;

  return (
    <div className="space-y-4">
      <div className="relative h-24">
        <div className="absolute left-0 right-0 top-1/2 h-[3px] -translate-y-1/2 rounded-full bg-gradient-to-r from-sky-400/40 via-cyan-400/50 to-purple-500/45" />
        <div
          className="absolute top-1/2 h-12 w-12 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/40 bg-gradient-to-br from-sky-500/80 to-blue-500/60 shadow-[0_15px_40px_-12px_rgba(60,160,255,0.8)]"
          style={{ left: `calc(${progress * 100}% - 24px)` }}
        >
          <div className="absolute inset-[6px] rounded-full border border-white/60 bg-slate-950/80" />
        </div>
        <div className="absolute left-0 right-0 top-0 flex justify-between text-[10px] font-semibold uppercase tracking-[0.35em] text-white/60">
          <span>{(period.split(" - ")[0] ?? period).trim()}</span>
          <span>{(period.split(" - ")[1] ?? "")?.trim()}</span>
        </div>
      </div>
      {impact && <p className="text-sm text-white/75">{impact}</p>}
    </div>
  );
}

type TimelineEntry = {
  title: string;
  text: string;
  details: string;
  impact: string;
  sources: { label: string; url: string }[];
};

const timelineEntries: TimelineEntry[] = [
  {
    title: "1989 - Vision du Web",
    text: "Tim Berners-Lee imagine un système hypertexte mondial au CERN.",
    details:
      "Le mémo Information Management: A Proposal décrit un réseau de documents reliés par URL, HTML et HTTP pour partager les connaissances internes sur des machines hétérogènes.",
    impact: "Pose les briques conceptuelles du Web ouvert et interopérable.",
    sources: [
      { label: "CERN - Birth of the Web", url: "https://home.cern/science/computing/birth-web" },
      { label: "W3C - History", url: "https://www.w3.org/History.html" },
    ],
  },
  {
    title: "1990 - Serveur et navigateur",
    text: "info.cern.ch, httpd et WorldWideWeb sortent du laboratoire.",
    details:
      "Le premier serveur tourne sur NeXT, accompagné du navigateur/éditeur et de pages démonstration. HTTP/0.9 assure la livraison du texte brut.",
    impact: "Démocratise la publication en permettant d'auto-héberger un site.",
    sources: [
      { label: "CERN - First Website", url: "https://home.cern/resources/image/first-website" },
      { label: "W3C - WorldWideWeb", url: "https://www.w3.org/People/Berners-Lee/WorldWideWeb.html" },
    ],
  },
  {
    title: "1993 - Mosaic 1.0",
    text: "NCSA Mosaic affiche texte et images dans la même fenêtre.",
    details:
      "Disponible sur X11, Windows et Mac, Mosaic simplifie l'installation et inspire la création de Netscape Navigator. Il popularise également le protocole HTTP.",
    impact: "Ouvre le Web au grand public avec une expérience visuelle riche.",
    sources: [
      { label: "NCSA - Mosaic", url: "https://ncsa.illinois.edu/about/history/" },
      { label: "Internet Hall of Fame", url: "https://www.internethalloffame.org/inductees/ncsa-mosaic-team" },
    ],
  },
  {
    title: "1994-1995 - W3C, Netscape, JS et CSS",
    text: "Le W3C coordonne les standards pendant que Netscape innove.",
    details:
      "Le World Wide Web Consortium harmonise HTML, HTTP et URI. Netscape introduit Navigator, JavaScript (Brendan Eich) et CSS (Håkon Wium Lie) pour séparer structure et présentation.",
    impact: "Fixe les règles tout en ajoutant interactivité et mise en forme.",
    sources: [
      { label: "W3C - About", url: "https://www.w3.org/Consortium/" },
      { label: "MDN - History of JavaScript", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Introduction#history" },
    ],
  },
  {
    title: "1998 - CSS2 et DOM Level 1",
    text: "Le W3C publie CSS2 et unifie la manipulation du DOM.",
    details:
      "CSS2 apporte positionnement, médias et typographie. DOM Level 1 standardise les API pour naviguer et modifier HTML et XML.",
    impact: "Renforce la compatibilité multi-navigateurs et facilite les interfaces dynamiques.",
    sources: [
      { label: "W3C - CSS2", url: "https://www.w3.org/TR/CSS2/" },
      { label: "W3C - DOM Level 1", url: "https://www.w3.org/TR/REC-DOM-Level-1/" },
    ],
  },
  {
    title: "2004-2007 - Ajax et HTML5",
    text: "Le Web 2.0 démocratise les applications interactives.",
    details:
      "Gmail, Google Maps et Facebook popularisent Ajax. WHATWG puis W3C rédigent HTML5 pour intégrer vidéo, audio, canvas et stockage local.",
    impact: "Transforme le Web documentaire en plateforme applicative sociale.",
    sources: [
      { label: "WHATWG - HTML History", url: "https://html.spec.whatwg.org/multipage/introduction.html#history" },
      { label: "O'Reilly - Web 2.0", url: "https://www.oreilly.com/pub/a/web2/archive/what-is-web-20.html" },
    ],
  },
  {
    title: "2008-2012 - Chrome, V8 et mobile-first",
    text: "Chrome introduit V8 tandis que le responsive design devient norme.",
    details:
      "Chrome adopte un moteur JavaScript JIT et un modèle multi-processus. Ethan Marcotte théorise le responsive design (2010), les navigateurs mobiles poussent les web apps.",
    impact: "Boost les performances et impose une approche multi-écran.",
    sources: [
      { label: "Google - Introducing Chrome", url: "https://googleblog.blogspot.com/2008/09/google-chrome-now-live.html" },
      { label: "A List Apart - Responsive", url: "https://alistapart.com/article/responsive-web-design/" },
    ],
  },
  {
    title: "2015-2016 - HTTP/2 et TLS automatisé",
    text: "HTTP/2 et Let's Encrypt rendent vitesse et sécurité par défaut.",
    details:
      "HTTP/2 (RFC 7540) apporte multiplexage et compression des en-têtes. Let's Encrypt automatise la délivrance de certificats gratuits et popularise HSTS.",
    impact: "Généralise le HTTPS et réduit la latence des sites modernes.",
    sources: [
      { label: "RFC 7540", url: "https://httpwg.org/specs/rfc7540.html" },
      { label: "Let's Encrypt - GA", url: "https://letsencrypt.org/2016/04/12/le-milestone-ga.html" },
    ],
  },
  {
    title: "2019 - WebAuthn et FIDO2",
    text: "WebAuthn devient recommandation W3C pour l'authent sans mot de passe.",
    details:
      "L'alliance FIDO et le W3C finalisent WebAuthn Level 1. Les navigateurs acceptent passkeys, clés de sécurité et authentificateurs plateforme.",
    impact: "Accélère l'adoption de l'authentification forte côté Web.",
    sources: [
      { label: "W3C - WebAuthn", url: "https://www.w3.org/TR/webauthn-1/" },
      { label: "FIDO Alliance", url: "https://fidoalliance.org/web-authentication/" },
    ],
  },
  {
    title: "2020-2023 - WebAssembly et WebGPU",
    text: "Le Web exécute du code natif et accède au GPU moderne.",
    details:
      "WebAssembly devient recommandation W3C en 2020. WebGPU atteint Chrome 113 (2023) et offre un accès de bas niveau au GPU pour graphisme et machine learning.",
    impact: "Permet des expériences quasi natives (3D, IA, montage) dans le navigateur.",
    sources: [
      { label: "W3C - WebAssembly", url: "https://www.w3.org/TR/wasm-core-1/" },
      { label: "Chrome Dev - WebGPU", url: "https://developer.chrome.com/blog/webgpu-release/" },
    ],
  },
  {
    title: "2024-2025 - Interop et Baseline",
    text: "Interop 2024 et Baseline alignent les navigateurs evergreen.",
    details:
      "Chrome, Edge, Firefox et Safari ciblent 26 thèmes critiques (forms, scroll, a11y). Baseline 2024 recense les APIs supportées par tous les navigateurs modernes.",
    impact: "Simplifie la livraison sans polyfills et fiabilise les roadmaps produits.",
    sources: [
      { label: "web.dev - Interop 2024", url: "https://web.dev/interop-2024/" },
      { label: "MDN - Baseline", url: "https://developer.mozilla.org/en-US/docs/MDN/Guidelines/Regional_guidelines/Baseline" },
    ],
  },
];

const highlights = timelineEntries.map((entry, index, array) => ({
  ...entry,
  visual: (
    <TimelineVisual
      index={index}
      total={array.length}
      period={entry.title}
      impact={entry.impact}
    />
  ),
}));

const supplement = (
  <div className="space-y-4">
    <header className="space-y-1">
      <p className="text-xs uppercase tracking-[0.35em] text-white/60">Synthèse</p>
      <h4 className="text-xl font-semibold text-white">Trois vagues du Web moderne</h4>
    </header>
    <div className="grid gap-4 md:grid-cols-3">
      {[
        {
          label: "Web documentaire",
          period: "1989-1998",
          focus: "HTML, HTTP, CSS et premiers navigateurs graphiques",
        },
        {
          label: "Web applicatif",
          period: "1999-2016",
          focus: "Ajax, APIs REST, mobile-first, HTTP/2 et TLS partout",
        },
        {
          label: "Web expérience",
          period: "2017-2025",
          focus: "Progressive Web Apps, WebAssembly, WebGPU, Interop",
        },
      ].map((segment) => (
        <div
          key={segment.label}
          className="rounded-3xl border border-white/12 bg-slate-950/55 p-5 shadow-[0_18px_45px_-22px_rgba(20,60,140,0.55)]"
        >
          <p className="text-xs uppercase tracking-[0.3em] text-white/55">{segment.period}</p>
          <h5 className="mt-2 text-lg font-semibold text-white">{segment.label}</h5>
          <p className="mt-3 text-sm text-white/78">{segment.focus}</p>
        </div>
      ))}
    </div>
  </div>
);

const TimelineSlide: SlideComponent = ({ index, total }) => (
  <SlideTemplate
    title="Timeline du Web"
    tagline="Les jalons fondateurs du Web"
    description="Des mémos du CERN aux programmes Interop 2025, retrouvez les dates et innovations clés qui ont façonné la plateforme Web."
    highlights={highlights}
    index={index}
    total={total}
    supplement={supplement}
  />
);

TimelineSlide.slideId = "timeline";
TimelineSlide.bulletLabel = "Timeline";
TimelineSlide.glow = "from-indigo-500/45 via-blue-500/20 to-sky-400/35";
TimelineSlide.glowAlt = "from-blue-500/25 via-cyan-400/15 to-emerald-400/30";

export default TimelineSlide;
