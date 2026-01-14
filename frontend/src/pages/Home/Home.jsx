import Logo from "../../components/Logo/Logo";
import Header from "../../components/Header/Header";
import Hero from "../../components/Hero/Hero";
import Footer from "../../pages/Footer/Footer";
import GalleryItem from "../../components/GalleryItem/GalleryItem";
import ScrollToTop from "../../components/ScrollToTop/ScrollToTop";
import { useEffect, useState } from "react";
import css from "./Home.module.css";

export default function Home() {
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const checkScrollTop = () => {
      if (!showScroll && window.pageYOffset > 300) {
        setShowScroll(true);
      } else if (showScroll && window.pageYOffset <= 300) {
        setShowScroll(false);
      }
    };

    window.addEventListener("scroll", checkScrollTop);
    return () => {
      window.removeEventListener("scroll", checkScrollTop);
    };
  }, [showScroll]);

  return (
    <div className={css.pageWrap}>
      <div className={css.wrap}>
        <Logo />
        <Header />
      </div>
      <main className={css.main}>
        {/* <Hero /> */}
        <GalleryItem />
      </main>
      <Footer />
      {showScroll && <ScrollToTop />}
    </div>
  );
}
