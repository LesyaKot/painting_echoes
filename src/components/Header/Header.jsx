import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Squash as Hamburger } from "hamburger-react";
import css from "./Header.module.css";
import data from "../Data";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isLight, setIsLight] = useState(() => {
    return localStorage.getItem("theme") === "light";
  });

  useEffect(() => {
    const observer = new MutationObserver(() => {
      const isLightNow = document.body.classList.contains("light-theme");
      setIsLight(isLightNow);
    });
    observer.observe(document.body, {
      attributes: true,
      attributeFilter: ["class"],
    });
    return () => observer.disconnect();
  }, []);

  return (
    <div className={css.wrap}>
      <Link to="/" className={css.link}>
        <h1 className={css.title}>{data.HeaderTitle}</h1>
      </Link>

      <div className={css.hamburger}>
        <Hamburger
          toggled={menuOpen}
          toggle={setMenuOpen}
          color={isLight ? "#1e1e1e" : "#ffffff"}
        />
      </div>

      <nav className={`${css.nav} ${menuOpen ? css.navOpen : ""}`}>
        <ul className={css.list}>
          <li className={css.listItem}>
            <Link to="/" onClick={() => setMenuOpen(false)}>
              Home
            </Link>
          </li>
          <li className={css.listItem}>
            <Link to="/about" onClick={() => setMenuOpen(false)}>
              About me
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
