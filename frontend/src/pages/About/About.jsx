import { useState } from "react";
import Header from "../../components/Header/Header";
import Logo from "../../components/Logo/Logo";
import Footer from "../Footer/Footer";
import ContactModal from "../../components/ContactModal/ContactModal";
import css from "./About.module.css";

const images = import.meta.glob("/src/assets/profile.{webp,png,jpg,jpeg,gif}", {
  eager: true,
});
const profileImage = Object.values(images)[0]?.default || null;

export default function About() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className={css.wrap}>
      <div className={css.headerWrap}>
        <Logo />
        <Header />
      </div>

      <div className={css.aboutWrap}>
        <div className={css.imageWrap}>
          {profileImage && (
            <img src={profileImage} alt="Artist" className={css.img} />
          )}
        </div>

        <div className={css.textWrap}>
          <p className={css.text}>
            {" "}
            My name is Olha Kotkova — a Ukrainian artist and trained architect.
            I merge architectural precision with artistic intuition to explore
            the dialogue between space, form, and emotion — blending structure
            with creativity. Drawing has never been just a hobby for me — it is
            my passion and voice. Every color, every line, every composition
            reflects my inner landscape. My works are not simply images; they
            are fragments of my emotions, memories, and reflections of the world
            around me.
          </p>
          <p className={css.text}>
            Through impressionistic shades of gray and pastel, I capture
            nature’s fog and the quiet beauty of aged walls.
          </p>
          <button className={css.btn} onClick={() => setIsModalOpen(true)}>
            Contact Me!
          </button>
        </div>
      </div>

      <Footer />

      {isModalOpen && <ContactModal onClose={() => setIsModalOpen(false)} />}
    </div>
  );
}
