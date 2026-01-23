import { useEffect, useMemo, useRef, useState } from "react";
import { projects } from "../data/projects";

function ArrowLeft(props) {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" {...props}>
      <path d="M15 18l-6-6 6-6" />
    </svg>
  );
}
function ArrowRight(props) {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" {...props}>
      <path d="M9 18l6-6-6-6" />
    </svg>
  );
}

const ProjectCard = ({ p }) => {
  return (
    <article
      className="card overflow-hidden transition h-full flex flex-col"
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "translateY(-4px)";
        e.currentTarget.style.boxShadow = "0 20px 40px rgba(0,0,0,.08)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "translateY(0)";
        e.currentTarget.style.boxShadow = "none";
      }}
    >
      {/* Thumbnail */}
      <div className="relative h-48 w-full overflow-hidden shrink-0">
        <img
          src={p.thumbnail}
          alt={p.title}
          className="h-full w-full object-cover object-top"
          loading="lazy"
        />
        {p.featured && (
          <span
            className="absolute left-3 top-3 rounded-full px-3 py-1 text-xs font-semibold"
            style={{ background: "var(--text)", color: "var(--bg)" }}
          >
            Featured
          </span>
        )}
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col grow">
        <h3 className="text-lg font-semibold" style={{ color: "var(--text)" }}>
          {p.title}
        </h3>

        <div className="mt-3 flex flex-wrap gap-2">
          {p.tech.map((t) => (
            <span
              key={t}
              className="rounded-full px-3 py-1 text-xs font-semibold"
              style={{ border: "1px solid var(--border)", color: "var(--muted)" }}
            >
              {t}
            </span>
          ))}
        </div>

        <ul className="mt-4 list-disc pl-5 text-sm muted space-y-1">
          {p.features.map((f) => (
            <li key={f}>{f}</li>
          ))}
        </ul>

        <div className="mt-4 text-sm">
          <p className="font-semibold" style={{ color: "var(--text)" }}>Challenge</p>
          <p className="muted">{p.challenge}</p>

          <p className="mt-2 font-semibold" style={{ color: "var(--text)" }}>Solution</p>
          <p className="muted">{p.solution}</p>
        </div>

        {/* Actions always at bottom */}
        <div className="mt-auto pt-5 flex flex-wrap gap-3">
          <a href={p.live} target="_blank" rel="noreferrer" className="btn btn-primary px-4 py-2">
            Live Demo
          </a>
          <a href={p.github} target="_blank" rel="noreferrer" className="btn btn-ghost px-4 py-2">
            GitHub
          </a>
        </div>
      </div>
    </article>
  );
};


export default function Projects() {
  const slides = useMemo(() => projects, []);
  const [index, setIndex] = useState(0);
  const [perView, setPerView] = useState(window.innerWidth >= 1024 ? 2 : 1);

  const isDown = useRef(false);
  const startX = useRef(0);
  const deltaX = useRef(0);

  useEffect(() => {
    const onResize = () => setPerView(window.innerWidth >= 1024 ? 2 : 1);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const maxIndex = Math.max(0, slides.length - perView);

  const go = (i) => {
    const bounded = Math.min(Math.max(i, 0), maxIndex);
    setIndex(bounded);
  };

  const next = () => go(index + 1);
  const prev = () => go(index - 1);

  const THRESHOLD = 60;

  const onDown = (e) => {
    isDown.current = true;
    deltaX.current = 0;
    startX.current = e.clientX ?? (e.touches?.[0]?.clientX || 0);
  };

  const onMove = (e) => {
    if (!isDown.current) return;
    const x = e.clientX ?? (e.touches?.[0]?.clientX || 0);
    deltaX.current = x - startX.current;
  };

  const onUp = () => {
    if (!isDown.current) return;
    isDown.current = false;

    if (Math.abs(deltaX.current) < THRESHOLD) return;
    if (deltaX.current < 0) next();
    else prev();
    deltaX.current = 0;
  };

  // gap-6 = 24px
  const transform = `translateX(calc(-${index * 100}% - ${index * 24}px))`;

  return (
    <section id="projects" className="container-x py-14">
      <div>
        <h2 className="text-2xl font-semibold tracking-tight">Projects</h2>
      </div>

      {/* Carousel */}
      <div
        className="mt-8 overflow-hidden"
        onMouseDown={onDown}
        onMouseMove={onMove}
        onMouseUp={onUp}
        onMouseLeave={onUp}
        onTouchStart={onDown}
        onTouchMove={onMove}
        onTouchEnd={onUp}
        style={{ cursor: "grab", userSelect: "none" }}
      >
        <div className="flex gap-6 transition-transform duration-500 ease-out" style={{ transform }}>
          {slides.map((p) => (
            <div
              key={p.title}
              className={`shrink-0 ${perView === 2 ? "w-[calc(50%-12px)]" : "w-full"}`}
            >
              <ProjectCard p={p} />
            </div>
          ))}
        </div>
      </div>

      {/* ✅ Bottom Controls (Left/Right only) */}
      <div className="mt-5 flex items-center justify-between">
        <button
          type="button"
          onClick={prev}
          disabled={index === 0}
          className="btn btn-ghost px-4 py-2 disabled:opacity-50"
          aria-label="Previous project"
          title="Previous"
        >
          <ArrowLeft />
        </button>

        <span className="text-xs muted">
          {index + 1} / {maxIndex + 1}
        </span>

        <button
          type="button"
          onClick={next}
          disabled={index === maxIndex}
          className="btn btn-ghost px-4 py-2 disabled:opacity-50"
          aria-label="Next project"
          title="Next"
        >
          <ArrowRight />
        </button>
      </div>
    </section>
  );
}
