import { useEffect, useState } from "react";
import logo from "../assets/portfolio_logo.png";

const links = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

function SunIcon(props) {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" {...props}>
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
    </svg>
  );
}

function MoonIcon(props) {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" {...props}>
      <path d="M21 12.6A8.5 8.5 0 1 1 11.4 3a7 7 0 0 0 9.6 9.6Z" />
    </svg>
  );
}

function MenuIcon(props) {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" {...props}>
      <path d="M4 6h16M4 12h16M4 18h16" />
    </svg>
  );
}

function CloseIcon(props) {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" {...props}>
      <path d="M18 6 6 18M6 6l12 12" />
    </svg>
  );
}

export default function Navbar({ theme, onToggleTheme }) {
  const isDark = theme === "dark";
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => (document.body.style.overflow = "");
  }, [open]);

  const handleNav = (href) => {
    setOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const headerBg = isDark ? "rgba(26,26,26,.72)" : "rgba(250,249,246,.72)";
  const panelBg = isDark ? "rgba(26,26,26,.92)" : "rgba(250,249,246,.92)";
  const hoverColor = isDark ? "#FFFFFF" : "#262626";

  return (
    <>
      <header className="sticky top-0 z-50 border-b backdrop-blur" style={{ borderColor: "var(--border)", background: headerBg }}>
        <div className="container-x flex items-center justify-between py-3">
          <a href="#" className="flex items-center gap-2">
            <img src={logo} alt="Logo" className="h-9 w-9 rounded-xl object-contain" />
            <span className="font-extrabold tracking-tight" style={{ color: "var(--text)", fontSize: "18px" }}>
              Nusrat Jahan Dina
            </span>
          </a>

          <nav className="hidden items-center gap-6 md:flex">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-sm font-medium transition"
                style={{ color: "var(--muted)" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = hoverColor)}
                onMouseLeave={(e) => (e.currentTarget.style.color = "var(--muted)")}
              >
                {l.name}
              </a>
            ))}

            <button
              type="button"
              onClick={onToggleTheme}
              className="rounded-2xl p-2 transition"
              style={{ border: `1px solid var(--border)`, color: "var(--text)" }}
              aria-label="Toggle theme"
            >
              {isDark ? <SunIcon /> : <MoonIcon />}
            </button>
          </nav>

          <div className="md:hidden flex items-center gap-2">
            <button
              type="button"
              onClick={onToggleTheme}
              className="rounded-2xl p-2 transition"
              style={{ border: `1px solid var(--border)`, color: "var(--text)" }}
              aria-label="Toggle theme"
            >
              {isDark ? <SunIcon /> : <MoonIcon />}
            </button>

            <button
              type="button"
              onClick={() => setOpen(true)}
              className="rounded-2xl p-2 transition"
              style={{ border: `1px solid var(--border)`, color: "var(--text)" }}
              aria-label="Open menu"
            >
              <MenuIcon />
            </button>
          </div>
        </div>
      </header>

      {open && (
        <div className="fixed inset-0 z-[60]">
          <button
            type="button"
            onClick={() => setOpen(false)}
            className="absolute inset-0"
            style={{ background: "rgba(0,0,0,.45)" }}
            aria-label="Close menu overlay"
          />
          <aside
            className="absolute right-0 top-0 h-full w-[82%] max-w-[360px] border-l p-5"
            style={{ borderColor: "var(--border)", background: panelBg, color: "var(--text)" }}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <img src={logo} alt="Logo" className="h-9 w-9 rounded-xl object-contain" />
                <span className="font-extrabold" style={{ fontSize: "16px" }}>Nusrat Jahan Dina</span>
              </div>

              <button
                type="button"
                onClick={() => setOpen(false)}
                className="rounded-2xl p-2 transition"
                style={{ border: `1px solid var(--border)`, color: "var(--text)" }}
                aria-label="Close menu"
              >
                <CloseIcon />
              </button>
            </div>

            <div className="mt-8 flex flex-col gap-5">
              {links.map((l) => (
                <button
                  key={l.href}
                  type="button"
                  onClick={() => handleNav(l.href)}
                  className="text-left text-[15px] font-semibold transition"
                  style={{ color: "var(--muted)" }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = hoverColor)}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "var(--muted)")}
                >
                  {l.name}
                </button>
              ))}
            </div>

            <div className="mt-10 text-xs" style={{ color: "var(--muted)" }}>
              © {new Date().getFullYear()} Nusrat Jahan Dina
            </div>
          </aside>
        </div>
      )}
    </>
  );
}
