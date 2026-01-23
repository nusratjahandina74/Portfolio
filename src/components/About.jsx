export default function About() {
  return (
    <section id="about" className="container-x py-14">
      <div className="grid gap-6 md:grid-cols-3 md:items-start">
        <div>
          <h2 className="text-2xl font-semibold tracking-tight">About</h2>
          <p className="mt-2 muted">Who I am, how I work, and what I’m focused on.</p>
        </div>

        <div className="md:col-span-2">
          <div className="card p-6">
            {/* Intro */}
            <p className="muted leading-relaxed">
              I’m{" "}
              <span className="font-semibold" style={{ color: "var(--text)" }}>
                Nusrat Jahan Dina
              </span>
              , a MERN Stack Developer from Bangladesh. I enjoy turning ideas into
              fast, clean, and reliable web applications—focused on real users and
              real-world results.
            </p>

            {/* 3 compact blocks */}
            <div className="mt-6 grid gap-4 sm:grid-cols-3">
              <div className="card p-4">
                <p className="text-sm font-semibold" style={{ color: "var(--text)" }}>
                  Strength
                </p>
                <p className="mt-2 text-sm muted leading-relaxed">
                  Building complete features end-to-end with smooth UI and secure APIs.
                </p>
              </div>

              <div className="card p-4">
                <p className="text-sm font-semibold" style={{ color: "var(--text)" }}>
                  Mindset
                </p>
                <p className="mt-2 text-sm muted leading-relaxed">
                  Clean code, performance-first decisions, and scalable structure.
                </p>
              </div>

              <div className="card p-4">
                <p className="text-sm font-semibold" style={{ color: "var(--text)" }}>
                  Current Focus
                </p>
                <p className="mt-2 text-sm muted leading-relaxed">
                  Improving TypeScript + best practices for production-ready apps.
                </p>
              </div>
            </div>

            {/* Optional personal touch (short) */}
            <p className="mt-6 text-sm muted">
              Beyond coding, I like learning new tools and improving my workflow to ship
              better products.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
