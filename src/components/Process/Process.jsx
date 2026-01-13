import paintingProcess from "../../../public/video/paintingProcess.mp4";
import paint from "../../../public/video/paint.mp4";
import css from "./Process.module.css";

export default function Process() {
  return (
    <div className={css.wrap}>
      <div className={css.wrapPart}>
        <video
          src={paintingProcess}
          controls
          muted
          loop
          playsInline
          className={css.video}
        />

        <p className={css.text}>
          Painting for me is a dialogue with silence. Every brushstroke is a
          step inward, where colors become feelings.
        </p>
      </div>

      <div className={css.wrapPart}>
        <video
          src={paint}
          controls
          muted
          loop
          playsInline
          className={css.video}
        />

        <p className={css.text}>
          Art is how warm, carefree summers find their way back to me.
        </p>
      </div>
    </div>
  );
}
