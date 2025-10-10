import Header from "../../components/Header/Header";
import Footer from "../Footer/Footer";
import css from "./About.module.css";
import data from "../../components/Data";

const images = import.meta.glob(
  "../../assets/profile/*.{webp,png,jpg,jpeg,gif}",
  {
    eager: true,
  }
);

const profileImage = images.length > 0 ? images[0] : null;

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
      <Header />
      <div className={css.title}>
        <div className={css.imageWrap}>
          {profileImage && (
            <img src={profile} alt="Artist's Profile" className={css.img} />
          )}
        </div>
        <div className={css.textWrap}>
          <h1>{data.AboutHeading}</h1>
          <p>{data.AboutTextParagraph1}</p>
          <p>{data.AboutTextParagraph2}</p>
          <button onClick={handleClick} className={css.contactButton}>
            {data.AboutButtonText}
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
}
