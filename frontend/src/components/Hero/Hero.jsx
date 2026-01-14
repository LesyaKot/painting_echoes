import sheep from "../../assets/sheep.jpg";
import photo2 from "../../assets/photo2.jpg";
import SocialLinks from "../SocialLinks/SocialLinks";
import css from "./Hero.module.css";

export default function Hero() {
  const links = {
    instagram: "https://www.instagram.com/painting_echoes_of_my_soul",
    telegram: "https://t.me/olga_kot_ua",
    // facebook: "https://www.facebook.com/your_page",
    email: "olya.kotkova04@gmail.com",
  };

  return (
    <div className={css.wrap}>
      <img className={css.photo2} src={photo2} alt={sheep} />
      <div className={css.textSocialsWrap}>
        <p className={css.text}>
          As a visual artist, I explore the harmony between nature and human
          design. My impressionistic landscapes and architectural scenes invite
          viewers to slow down, breathe, and see beauty in simplicity.
        </p>
        <SocialLinks links={links} size={18} color="#333" />
      </div>
    </div>
  );
}
