import profile from "../assets/profile.jpeg";

const stack = ["MongoDB", "Express", "React", "Node.js"];

export default function Hero() {
  const hoverPill = (el, hovered) => {
    const isDark = document.documentElement.classList.contains("dark");
    if (!hovered) {
      el.style.background = "transparent";
      el.style.color = "var(--muted)";
      return;
    }
    // Light hover: black bg + white text
    // Dark hover : white bg + black text
    el.style.background = isDark ? "#FAF9F6" : "#262626";
    el.style.color = isDark ? "#262626" : "#FAF9F6";
  };

  return (
    <section className="mx-auto max-w-6xl px-4 pt-16 pb-10">
      <div className="grid gap-12 md:grid-cols-2 md:items-center">
        {/* LEFT */}
        <div>
          <p className="text-xs font-semibold" style={{ color: "var(--muted)" }}>
            Core Stack
          </p>

          <div className="mt-3 flex flex-wrap gap-2">
            {stack.map((t) => (
              <span
                key={t}
                className="rounded-full px-3 py-1 text-xs font-semibold transition cursor-default"
                style={{
                  border: "1px solid var(--border)",
                  background: "transparent",
                  color: "var(--muted)",
                }}
                onMouseEnter={(e) => hoverPill(e.currentTarget, true)}
                onMouseLeave={(e) => hoverPill(e.currentTarget, false)}
              >
                {t}
              </span>
            ))}
          </div>

          {/* Headline */}
          <h1
            className="mt-6 font-extrabold tracking-tight leading-tight"
            style={{ color: "var(--text)", fontSize: "clamp(22px, 3vw, 36px)" }}
          >
            MERN Stack Developer
          </h1>

          {/* Professional subtitle */}
          <p className="mt-4 text-[15px] sm:text-base leading-relaxed muted">
            I build production-ready web applications with clean UI, secure APIs,
            and scalable architecture. Focused on performance, maintainability,
            and delivering features that solve real user problems.
          </p>

          <div className="mt-7 flex flex-wrap gap-3">
            <a href="#projects" className="btn btn-primary">
              View My Projects
            </a>
            <a
              href="/resume.pdf"
              download="Nusrat_Jahan_Dina_Resume.pdf"
              className="btn btn-ghost"
            >
              Download Resume
            </a>
            <a href="#contact" className="btn btn-ghost">
              Contact Me
            </a>
          </div>

          <div className="mt-6 flex flex-wrap items-center gap-4 text-sm">
            <a
              className="transition muted hover:opacity-80"
              href="https://github.com/nusratjahandina74"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
            <a
              className="transition muted hover:opacity-80"
              href="https://www.linkedin.com/in/nusratjahandina74/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
            <a
              className="transition muted hover:opacity-80"
              href="mailto:dinujahan@gmail.com"
            >
              Email
            </a>
          </div>
        </div>

        {/* RIGHT */}
        <div className="relative">
          <div className="card p-5 sm:p-6">
            <img
              src={profile}
              alt="Nusrat Jahan Dina"
              className="h-[320px] w-full rounded-3xl object-cover sm:h-[420px]"
              loading="lazy"
            />

            <div
              className="mt-4 flex flex-wrap items-center justify-between gap-3 rounded-2xl px-4 py-3"
              style={{
                border: "1px solid var(--border)",
                background: "transparent",
                color: "var(--muted)",
              }}
            >
              <span className="text-xs sm:text-sm">
                Open to Internship / Junior Role / Freelance
              </span>
              <span
                className="text-xs sm:text-sm"
                style={{ color: "var(--text)" }}
              >
                Dhaka, Bangladesh
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
