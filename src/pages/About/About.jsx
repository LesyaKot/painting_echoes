import Header from "../../components/Header/Header";
import Logo from "../../components/Logo/Logo";
import Footer from "../Footer/Footer";
import css from "./About.module.css";
import data from "../../components/Data";

const images = import.meta.glob("/src/assets/profile.{webp,png,jpg,jpeg,gif}", {
  eager: true,
});

const profileImage = Object.values(images)[0]?.default || null;

export default function About() {
  const handleClick = () => {
    const email = data.AboutEmail;
    const subject = data.AboutEmailSubject;
    const emailLink = document.createElement("a");
    emailLink.href = `mailto:${email}?subject=${encodeURIComponent(subject)}`;
    emailLink.click();
  };

  return (
    <div className={css.wrap}>
      <div className={css.headerWrap}>
        <Logo />
        <Header />
      </div>
      <div className={css.aboutWrap}>
        <div className={css.imageWrap}>
          {profileImage && (
            <img
              src={profileImage}
              alt="Artist's Profile"
              className={css.img}
            />
          )}
        </div>
        <div className={css.textWrap}>
          <h1 className={css.title}>{data.AboutHeading}</h1>
          <p className={css.text}>{data.AboutTextParagraph1}</p>
          <p className={css.text}>{data.AboutTextParagraph2}</p>
          <button className={css.btn} onClick={handleClick}>
            {data.AboutButtonText}
          </button>
        </div>
      </div>

      <Footer />
    </div>
  );
}
