export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t py-8" style={{ borderColor: "var(--border)" }}>
      <div className="container-x flex flex-col items-center justify-between gap-4 sm:flex-row">
        <p className="text-sm muted">© {year} Nusrat Jahan Dina. All rights reserved.</p>

        <div className="flex gap-4 text-sm muted">
          <a href="https://github.com/nusratjahandina74" target="_blank" rel="noreferrer" className="hover:underline">
            GitHub
          </a>
          <a href="https://www.linkedin.com/in/nusratjahandina74/" target="_blank" rel="noreferrer" className="hover:underline">
           LinkedIn
          </a>
          <a href="mailto:dinujahan@gmail.com" className="hover:underline">
            Email
          </a>
          <a href="/resume.pdf" download className="hover:underline">
            Resume
          </a>
        </div>
      </div>
    </footer>
  );
}
