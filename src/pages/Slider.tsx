import { useCallback, useEffect, useId, useState } from "react";

import { SliderNavigationProvider } from "@/components/slider/SliderNavigationContext";
import DomainSlide from "@/pages/slides/DomainSlide";
import HomeSlide from "@/pages/slides/HomeSlide";
import SecuritySlide from "@/pages/slides/SecuritySlide";
import StandardsSlide from "@/pages/slides/StandardsSlide";
import TimelineSlide from "@/pages/slides/TimelineSlide";
import UrlSlide from "@/pages/slides/UrlSlide";
import type { SlideComponent } from "../components/slider/slideTypes";

const slides: SlideComponent[] = [
  HomeSlide,
  TimelineSlide,
  UrlSlide,
  DomainSlide,
  StandardsSlide,
  SecuritySlide,
];

export default function Slider() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [transitionDirection, setTransitionDirection] = useState<
    "forward" | "backward"
  >("forward");
  const sliderLabelId = useId();
  const slidePanelId = useId();
  const totalSlides = slides.length;
  const ActiveSlide = slides[activeIndex];

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowRight") {
        event.preventDefault();
        setTransitionDirection("forward");
        setActiveIndex((prev) => (prev + 1) % totalSlides);
      }
      if (event.key === "ArrowLeft") {
        event.preventDefault();
        setTransitionDirection("backward");
        setActiveIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [totalSlides]);

  const goToSlide = useCallback(
    (targetIndex: number) => {
      setActiveIndex((currentIndex) => {
        if (targetIndex === currentIndex) {
          return currentIndex;
        }
        const forwardDistance =
          (targetIndex - currentIndex + totalSlides) % totalSlides;
        const backwardDistance =
          (currentIndex - targetIndex + totalSlides) % totalSlides;
        setTransitionDirection(
          forwardDistance <= backwardDistance ? "forward" : "backward"
        );
        return targetIndex;
      });
    },
    [totalSlides]
  );

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, left: 0, behavior: "auto" });
    }
  }, [activeIndex]);
  const goToSlideId = useCallback(
    (slideId: string) => {
      const targetIndex = slides.findIndex((slide) => slide.slideId === slideId);
      if (targetIndex === -1) {
        return;
      }
      goToSlide(targetIndex);
    },
    [goToSlide]
  );

  return (
    <SliderNavigationProvider
      value={{ activeSlideId: ActiveSlide.slideId, goToSlideId }}
    >
      <section
        className="relative isolate flex min-h-screen items-center justify-center px-6 pb-32 pt-24 md:px-12"
        role="region"
        aria-roledescription="Carousel"
        aria-labelledby={sliderLabelId}
      >
        <div
          className="absolute inset-0 -z-20 overflow-hidden"
          aria-hidden="true"
        >
          <div
            className={`pointer-events-none absolute left-1/2 top-20 h-[28rem] w-[28rem] -translate-x-1/2 rounded-full bg-gradient-to-br blur-3xl transition-all duration-700 ease-out ${ActiveSlide.glow}`}
          />
          <div
            className={`pointer-events-none absolute bottom-16 right-24 h-80 w-80 translate-x-1/3 rounded-full bg-gradient-to-tr blur-[140px] transition-all duration-700 ease-out ${ActiveSlide.glowAlt}`}
          />
        </div>
        <div
          className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.05)_0%,_rgba(10,10,40,0.75)_55%,_rgba(5,5,20,0.9)_100%)]"
          aria-hidden="true"
        />
        <article className="relative z-10 w-full max-w-6xl">
          <div
            className="relative overflow-hidden rounded-[36px] border border-white/15 bg-white/10 px-8 py-12 shadow-[0_45px_120px_-20px_rgba(10,20,60,0.75)] backdrop-blur-3xl md:px-14 md:py-16"
            id={slidePanelId}
            aria-live="polite"
          >
            <div
              className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_25%_20%,rgba(255,255,255,0.35),transparent_60%)] opacity-70"
              aria-hidden="true"
            />
            <div
              key={ActiveSlide.slideId}
              className="slide-portal"
              data-direction={transitionDirection}
            >
              <div className="slide-portal__shockwave" aria-hidden="true">
                <span className="slide-portal__ring" />
                <span className="slide-portal__ring" />
                <span className="slide-portal__spark" />
              </div>
              <ActiveSlide index={activeIndex} total={totalSlides} />
            </div>
          </div>
        </article>
        <nav
          className="fixed bottom-7 left-1/2 z-30 flex -translate-x-1/2 items-center gap-4 rounded-full border border-white/20 bg-white/10 px-6 py-3 shadow-[0_25px_80px_-30px_rgba(10,20,60,0.9)] backdrop-blur-3xl"
          aria-label="Navigation des slides"
        >
          {slides.map((SlideItem, index) => {
            const isActive = index === activeIndex;
            return (
              <button
                key={SlideItem.slideId}
                type="button"
                aria-pressed={isActive}
                aria-label={`Afficher ${SlideItem.bulletLabel}`}
                aria-controls={slidePanelId}
                aria-current={isActive ? "true" : undefined}
                onClick={() => goToSlide(index)}
                className={`relative h-3.5 w-3.5 rounded-full border border-white/40 transition-all duration-300 ease-out focus:outline-none focus-visible:ring-2 focus-visible:ring-white/80 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent ${
                  isActive
                    ? "scale-125 bg-white shadow-[0_0_35px_rgba(255,255,255,0.55)]"
                    : "bg-white/30 hover:bg-white/60"
                }`}
              >
                <span className="sr-only">{SlideItem.bulletLabel}</span>
              </button>
            );
          })}
        </nav>
      </section>
    </SliderNavigationProvider>
  );
}
