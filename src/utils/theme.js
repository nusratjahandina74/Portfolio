export const getTheme = () => {
  const saved = localStorage.getItem("theme");
  return saved === "dark" ? "dark" : "light";
};

export const applyTheme = (theme) => {
  const root = document.documentElement;
  const isDark = theme === "dark";
  root.classList.toggle("dark", isDark);
  localStorage.setItem("theme", isDark ? "dark" : "light");
};
