import css from "./Logo.module.css";

export default function Logo() {
  return (
    <div className={css.wrap}>
      <p className={css.logo}>Echoes of My Soul</p>
      {/* <p className={css.logotext}>
        Art is my language. Through pastel hues and the movement of my brush, I
        capture nature’s beauty.
      </p> */}
    </div>
  );
}
