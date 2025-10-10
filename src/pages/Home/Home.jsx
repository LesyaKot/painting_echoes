import Logo from "../../components/Logo/Logo";
import Header from "../../components/Header/Header";
import Hero from "../../components/Hero/Hero";
import css from "./Home.module.css";

export default function Home() {
  return (
    <div>
      <div className={css.wrap}>
        <Logo />
        <Header />
      </div>
      <Hero />
    </div>
  );
}
