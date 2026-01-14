import css from "./Logo.module.css";

export default function Logo() {
  return (
    <div className={css.wrap}>
      <p className={css.logo}>Echoes of My Soul</p>
    </div>
  );
}
