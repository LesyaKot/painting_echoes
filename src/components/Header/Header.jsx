import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Squash as Hamburger } from "hamburger-react";
import css from "./Header.module.css";
import data from "../Data";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuClick = () => {
    setMenuOpen(false);
  };

  return (
    <div className={css.wrap}>
      <Link to="/" className={css.link}>
        <h1>{data.HeaderTitle}</h1>
      </Link>
      <div className={css.hamburger}>
        <Hamburger toggled={menuOpen} toggle={setMenuOpen} />
      </div>
      <nav className={`${css.nav} ${menuOpen ? css.navOpen : ""}`}>
        <ul className={css.list}>
          <li className={css.listItem}>
            <Link to="/" onClick={handleMenuClick}>
              Home
            </Link>
          </li>
          <li className={css.listItem}>
            <Link to="/about" onClick={handleMenuClick}>
              About me
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
