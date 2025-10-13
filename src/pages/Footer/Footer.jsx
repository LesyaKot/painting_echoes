import { FaInstagram, FaTelegramPlane, FaEnvelope } from "react-icons/fa";
import css from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={css.footer}>
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
