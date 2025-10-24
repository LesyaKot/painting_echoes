import paintingProcess from "../../../public/video/paintingProcess.mp4";
import css from "./Process.module.css";

export default function Process() {
  return (
    <div className={css.wrap}>
      <video
        src={paintingProcess}
        controls
        muted
        loop
        playsInline
        className={css.video}
        // width={420}
        // height={500}
      />

      <p className={css.text}>
        Painting for me is a dialogue with silence. Every brushstroke is a step
        inward, where colors become feelings.
      </p>
    </div>
  );
}
