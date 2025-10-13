import Logo from "../../components/Logo/Logo";
import Header from "../../components/Header/Header";
import Hero from "../../components/Hero/Hero";
import Footer from "../../pages/Footer/Footer";
import css from "./Home.module.css";

export default function Home() {
  return (
    <div className={css.pageWrap}>
      <div className={css.wrap}>
        <Logo />
        <Header />
      </div>
      <main className={css.main}>
        <Hero />
      </main>
      <Footer />
    </div>
  );
}
