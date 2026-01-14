import { useContext } from "react";
import ThemeContext from "../../ThemeContext.jsx";
import css from "./ThemeToggle.module.css";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <button onClick={toggleTheme} className={css.btn}>
      {theme === "dark" ? "☀️" : "🌙"}
    </button>
  );
}
