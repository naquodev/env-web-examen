import { useEffect, useRef } from "react";

export default function CursorChaos() {
  const coreRef = useRef<HTMLDivElement>(null);
  const haloRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    const body = document.body;
    body.classList.add("has-custom-cursor");

    const coreEl = coreRef.current;
    const haloEl = haloRef.current;

    if (!coreEl || !haloEl) {
      return () => {
        body.classList.remove("has-custom-cursor");
      };
    }

    let targetX = window.innerWidth / 2;
    let targetY = window.innerHeight / 2;
    let haloX = targetX;
    let haloY = targetY;
    let rafId = 0;
    let hideTimeout = 0;
    let pressTimeout = 0;

    const setVisible = (isVisible: boolean) => {
      const visibility = isVisible ? "true" : "false";
      coreEl.dataset.visible = visibility;
      haloEl.dataset.visible = visibility;
    };

    const render = () => {
      haloX += (targetX - haloX) * 0.12;
      haloY += (targetY - haloY) * 0.12;

      coreEl.style.left = `${targetX}px`;
      coreEl.style.top = `${targetY}px`;
      haloEl.style.left = `${haloX}px`;
      haloEl.style.top = `${haloY}px`;

      const deltaX = targetX - haloX;
      const deltaY = targetY - haloY;
      const velocity = Math.hypot(deltaX, deltaY);
      const scale = Math.min(1.1 + velocity / 240, 1.5);
      const blur = Math.min(12 + velocity / 4, 26);

      haloEl.style.setProperty("--halo-scale", `${scale}`);
      haloEl.style.setProperty("--halo-blur", `${blur}px`);

      rafId = requestAnimationFrame(render);
    };

    const handleMove = (event: PointerEvent) => {
      targetX = event.clientX;
      targetY = event.clientY;
      setVisible(true);
      window.clearTimeout(hideTimeout);
      hideTimeout = window.setTimeout(() => setVisible(false), 1200);
    };

    const handleDown = () => {
      coreEl.classList.add("is-pressed");
      haloEl.classList.add("is-pressed");
      window.clearTimeout(pressTimeout);
      pressTimeout = window.setTimeout(() => {
        coreEl.classList.remove("is-pressed");
        haloEl.classList.remove("is-pressed");
      }, 220);
    };

    const handleLeave = () => {
      setVisible(false);
    };

    window.addEventListener("pointermove", handleMove);
    window.addEventListener("pointerdown", handleDown);
    window.addEventListener("pointerleave", handleLeave);

    setVisible(false);
    rafId = requestAnimationFrame(render);

    return () => {
      body.classList.remove("has-custom-cursor");
      cancelAnimationFrame(rafId);
      window.clearTimeout(hideTimeout);
      window.clearTimeout(pressTimeout);
      window.removeEventListener("pointermove", handleMove);
      window.removeEventListener("pointerdown", handleDown);
      window.removeEventListener("pointerleave", handleLeave);
    };
  }, []);

  return (
    <div className="cursor-fx" aria-hidden="true">
      <div ref={haloRef} className="cursor-fx__halo" />
      <div ref={coreRef} className="cursor-fx__core">
        <span className="cursor-fx__pulse" aria-hidden="true" />
      </div>
    </div>
  );
}
