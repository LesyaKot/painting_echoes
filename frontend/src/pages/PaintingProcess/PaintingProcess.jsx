import Process from "../../components/Process/Process";
import Logo from "../../components/Logo/Logo";
import Header from "../../components/Header/Header";
import Footer from "../Footer/Footer";
import css from "./PaintingProcess.module.css";

export default function PaintingProcess() {
  return (
    <>
      <div className={css.headerWrap}>
        <Logo />
        <Header />
      </div>
      <Process />
      <Footer />
    </>
  );
}
