import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiBootstrap,
  SiRedux,
  SiNodedotjs,
  SiExpress,
  SiJsonwebtokens,
  SiFirebase,
  SiMongodb,
  SiMongoose,
  SiPostgresql,
  SiMysql,
  SiGit,
  SiGithub,
  SiPostman,
  SiDocker,
  SiVercel,
  SiNetlify,
  SiRender,
  SiNpm,
  SiYarn,
  SiJest,
} from "react-icons/si";

const groups = [
  {
    title: "Frontend",
    subtitle: "UI & component-driven development",
    items: [
      { name: "HTML5", icon: SiHtml5 },
      { name: "CSS3", icon: SiCss3 },
      { name: "JavaScript (ES6+)", icon: SiJavascript },
      { name: "React", icon: SiReact },
      { name: "Next.js", icon: SiNextdotjs },
      { name: "Tailwind CSS", icon: SiTailwindcss },
      { name: "Bootstrap", icon: SiBootstrap },
      { name: "Redux / Context", icon: SiRedux },
    ],
  },
  {
    title: "Backend & API",
    subtitle: "Server logic, auth, CRUD",
    items: [
      { name: "Node.js", icon: SiNodedotjs },
      { name: "Express", icon: SiExpress },
      { name: "REST APIs", icon: SiPostman },
      { name: "JWT Auth", icon: SiJsonwebtokens },
      { name: "Firebase Auth", icon: SiFirebase },
    ],
  },
  {
    title: "Database",
    subtitle: "Data modeling & queries",
    items: [
      { name: "MongoDB", icon: SiMongodb },
      { name: "Mongoose", icon: SiMongoose },
      { name: "PostgreSQL", icon: SiPostgresql },
      { name: "MySQL", icon: SiMysql },
    ],
  },
  {
    title: "Tools & DevOps",
    subtitle: "Workflow & shipping",
    items: [
      { name: "Git", icon: SiGit },
      { name: "GitHub", icon: SiGithub },
      { name: "Postman", icon: SiPostman },
      { name: "Docker", icon: SiDocker },
      { name: "Testing (Jest)", icon: SiJest },
      { name: "Vercel", icon: SiVercel },
      { name: "Netlify", icon: SiNetlify },
      { name: "Render", icon: SiRender },
      { name: "NPM", icon: SiNpm },
      { name: "Yarn", icon: SiYarn },
    ],
  },
];

const softSkills = [
  "Problem Solving (DSA)",
  "Agile / Scrum",
  "Clean Code",
  "Team Collaboration",
  "Communication",
];

export default function Skills() {
  return (
    <section id="skills" className="container-x py-14">
      <div>
        <h2 className="text-2xl font-semibold tracking-tight">Skills</h2>
        <p className="mt-2 muted">
          A categorized view of the tools I use across the full development cycle.
        </p>
      </div>

      {/* Main Skill Cards */}
      <div className="mt-8 grid gap-6 md:grid-cols-2">
        {groups.map((g) => (
          <div
            key={g.title}
            className="card p-6 transition"
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-4px)";
              e.currentTarget.style.boxShadow = "0 20px 40px rgba(0,0,0,.08)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "none";
            }}
          >
            <div>
              <h3 className="text-sm font-semibold" style={{ color: "var(--text)" }}>
                {g.title}
              </h3>
              <p className="mt-1 text-xs muted">{g.subtitle}</p>
            </div>

            <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3">
              {g.items.map((it) => {
                const Icon = it.icon;
                return (
                  <div
                    key={it.name}
                    className="flex items-center gap-2 rounded-2xl px-3 py-2 text-sm transition cursor-default"
                    style={{
                      border: "1px solid var(--border)",
                      background: "transparent",
                      color: "var(--muted)",
                    }}
                    onMouseEnter={(e) => {
                      const isDark = document.documentElement.classList.contains("dark");
                      e.currentTarget.style.background = isDark ? "#FAF9F6" : "#262626";
                      e.currentTarget.style.color = isDark ? "#262626" : "#FAF9F6";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = "transparent";
                      e.currentTarget.style.color = "var(--muted)";
                    }}
                  >
                    <span className="text-lg">
                      <Icon />
                    </span>
                    <span className="text-xs sm:text-sm">{it.name}</span>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>

      {/* Soft Skills */}
      <div className="mt-6 card p-6">
        <h3 className="text-sm font-semibold" style={{ color: "var(--text)" }}>
          Soft Skills
        </h3>
        <p className="mt-1 text-xs muted">How I work with teams and solve problems.</p>

        <div className="mt-4 flex flex-wrap gap-2">
          {softSkills.map((s) => (
            <span
              key={s}
              className="rounded-full px-3 py-1 text-xs font-semibold"
              style={{
                border: "1px solid var(--border)",
                background: "transparent",
                color: "var(--muted)",
              }}
            >
              {s}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
