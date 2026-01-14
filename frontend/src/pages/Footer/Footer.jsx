import { useContext } from "react";
import ThemeContext from "../../ThemeContext";
import css from "./Footer.module.css";
import { FaInstagram, FaTelegramPlane, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  const { theme } = useContext(ThemeContext);

  return (
    <footer
      className={`${css.footer} ${theme === "dark" ? css.dark : css.light}`}
    >
      <div className={css.container}>
        <div className={css.left}>
          <p>© {new Date().getFullYear()} Echoes of My Soul</p>
        </div>
        <div className={css.right}>
          <a
            href="https://www.instagram.com/painting_echoes_of_my_soul"
            target="_blank"
            rel="noreferrer"
          >
            <FaInstagram />
          </a>
          <a href="https://t.me/olga_kot_ua" target="_blank" rel="noreferrer">
            <FaTelegramPlane />
          </a>
          <a href="mailto:olya.kotkova04@gmail.com">
            <FaEnvelope />
          </a>
        </div>
      </div>
    </footer>
  );
}
