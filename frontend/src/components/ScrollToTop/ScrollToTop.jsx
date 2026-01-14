import { FaAnglesUp } from "react-icons/fa6";

import css from "./ScrollToTop.module.css";

export default function ScrollToTop() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className={css.scrollToTop} onClick={scrollToTop}>
      <FaAnglesUp width={80} />
    </div>
  );
}
