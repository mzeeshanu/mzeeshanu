"use client";

import { useEffect, useState } from "react";

// Reads every element with data-year and shows the year of the one crossing the middle of the viewport.
// This is also where the aging portrait will hook in later.
export function YearCounter({ now }: { now: number }) {
  const [year, setYear] = useState(now);

  useEffect(() => {
    const els = [...document.querySelectorAll<HTMLElement>("[data-year]")];
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) if (e.isIntersecting) setYear(Number(e.target.getAttribute("data-year")));
      },
      { rootMargin: "-50% 0px -50% 0px" },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <div className="year" aria-hidden>
      <small>You are in</small>
      <span>{year}</span>
    </div>
  );
}
