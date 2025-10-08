import sheep from "../../assets/sheep.jpg";
import SocialLinks from "../SocialLinks/SocialLinks";
import css from "./Hero.module.css";

export default function Hero() {
  const links = {
    instagram: "https://www.instagram.com/painting_echoes_of_my_soul",
    telegram: "https://t.me/olga_kot_ua",
    // facebook: "https://www.facebook.com/your_page",
    email: "lesyakot83@gmail.com",
  };

  return (
    <div className={css.wrap}>
      <p>
        As a visual artist, I explore the harmony between nature and human
        design. My impressionistic landscapes and architectural scenes invite
        viewers to slow down, breathe, and see beauty in simplicity."
      </p>

      <img className={css.img} src={sheep} alt={sheep} />
      <SocialLinks links={links} size={26} color="#333" />
    </div>
  );
}
