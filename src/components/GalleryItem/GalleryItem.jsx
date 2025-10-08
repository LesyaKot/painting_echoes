import css from "./GalleryItem.module.css";
import sheep from "../../assets/sheep.jpg";
import tent from "../../assets/tent.jpg";
import castle from "../../assets/castle.jpg";
import house from "../../assets/house.jpg";
import lake from "../../assets/lake.jpg";
import bridge from "../../assets/bridge.jpg";

export default function GalleryItem() {
  return (
    <div className={css.wrap}>
      <img className={css.img} src={sheep} alt={sheep} />
      <img className={css.img} src={tent} alt={tent} />
      <img className={css.img} src={castle} alt={castle} />
      <img className={css.img} src={house} alt={house} />
      <img className={css.img} src={lake} alt={lake} />
      <img className={css.img} src={bridge} alt={bridge} />
    </div>
  );
}
