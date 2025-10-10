import css from "./About.module.css";
import photo4 from "../../assets/photo4.jpg";

export default function About() {
  return (
    <div className={css.wrap}>
      <div className={css.textWrap}>
        <h1 className={css.text}>About Me</h1>
        <p className={css.title}>
          Through impressionistic shades of gray and pastel, I capture nature’s
          fog and the quiet beauty of aged walls.
        </p>
        <p className={css.text}>
          My name is Olha Kotkova — a Ukrainian artist and trained architect. I
          merge architectural precision with artistic intuition to explore the
          dialogue between space, form, and emotion — blending structure with
          creativity. Drawing has never been just a hobby for me — it is my
          passion and voice. Every color, every line, every composition reflects
          my inner landscape. My works are not simply images; they are fragments
          of my emotions, memories, and reflections of the world around me.
        </p>
      </div>

      <img className={css.img} src={photo4} alt={photo4}></img>
    </div>
  );
}
