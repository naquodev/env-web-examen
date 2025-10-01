import SlideTemplate from "@/components/slider/SlideTemplate";
import type { SlideComponent } from "@/components/slider/slideTypes";

const highlights = [
  {
    title: "1991 - HTML 1.0",
    text: "Tim Berners-Lee publie le premier site et definit les balises essentielles du Web documentaire.",
  },
  {
    title: "1995 - JavaScript et CSS",
    text: "Netscape ajoute l'interactivite cote client et la separation contenu / presentation avec CSS.",
  },
  {
    title: "2004-2007 - Web 2.0 et HTML5",
    text: "Le Web social et les API se generalisent tandis que HTML5 standardise video, audio et canvas.",
  },
  {
    title: "2014+ - HTTP/2 et PWAs",
    text: "Compression, multiplexage, TLS et Progressive Web Apps offrent des experiences rapides et fiables.",
  },
];

const TimelineSlide: SlideComponent = ({ index, total }) => (
  <SlideTemplate
    title="Timeline du Web"
    tagline="Les jalons fondateurs du Web"
    description="De la premiere page HTML aux experiences progressives, voici les dates qui ont faconne l'ecosysteme."
    highlights={highlights}
    index={index}
    total={total}
  />
);

TimelineSlide.slideId = "timeline";
TimelineSlide.bulletLabel = "Timeline";
TimelineSlide.glow = "from-indigo-500/45 via-blue-500/20 to-sky-400/35";
TimelineSlide.glowAlt = "from-blue-500/25 via-cyan-400/15 to-emerald-400/30";

export default TimelineSlide;
