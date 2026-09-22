"use client";

import { useEffect } from "react";

// Page-wide motion, all driven through CSS custom properties / classes so the markup stays server-rendered:
//  - [data-reveal] elements get .in when they scroll into view
//  - --mx/--my follow the pointer (background spotlight), --cx/--cy per .card (hover glow)
//  - --progress on <html> = scroll progress 0..1 (top bar + timeline rail)
export function Effects() {
  useEffect(() => {
    const root = document.documentElement;
    const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;

    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && (e.target.classList.add("in"), io.unobserve(e.target))),
      { rootMargin: "0px 0px -12% 0px" },
    );
    document.querySelectorAll("[data-reveal]").forEach((el) => (reduce ? el.classList.add("in") : io.observe(el)));

    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const max = root.scrollHeight - innerHeight;
        root.style.setProperty("--progress", String(max > 0 ? scrollY / max : 0));
        const rail = document.querySelector<HTMLElement>(".timeline");
        if (rail) {
          const r = rail.getBoundingClientRect();
          const p = Math.min(1, Math.max(0, (innerHeight * 0.55 - r.top) / r.height));
          rail.style.setProperty("--fill", String(p));
        }
      });
    };
    const onMove = (e: PointerEvent) => {
      root.style.setProperty("--mx", `${e.clientX}px`);
      root.style.setProperty("--my", `${e.clientY}px`);
      const card = (e.target as HTMLElement).closest<HTMLElement>(".card");
      if (card) {
        const r = card.getBoundingClientRect();
        card.style.setProperty("--cx", `${e.clientX - r.left}px`);
        card.style.setProperty("--cy", `${e.clientY - r.top}px`);
      }
    };

    onScroll();
    addEventListener("scroll", onScroll, { passive: true });
    addEventListener("resize", onScroll);
    addEventListener("pointermove", onMove, { passive: true });
    return () => {
      io.disconnect();
      removeEventListener("scroll", onScroll);
      removeEventListener("resize", onScroll);
      removeEventListener("pointermove", onMove);
    };
  }, []);

  return <div className="progress" aria-hidden />;
}
