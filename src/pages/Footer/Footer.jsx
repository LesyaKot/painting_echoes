import React from "react";
import css from "./Footer.module.css";
import data from "../../components/Data";

export default function Footer() {
  return (
    <footer className={css.footer}>
      <div className={css.wrap}>
        <p>{data.FooterText}</p>
        <p style={{ marginTop: "5px", fontSize: "12px" }}>
          Designed and developed by{" "}
          <a
            href="https://github.com/LesyaKot"
            style={{ textDecoration: "none", color: "#F4A261" }}
          >
            Olya Kotkova
          </a>
        </p>
      </div>
    </footer>
  );
}
