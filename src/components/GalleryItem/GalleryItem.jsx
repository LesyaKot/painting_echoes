import css from "./GalleryItem.module.css";
import sheep from "../../assets/sheep.jpg";

export default function GalleryItem() {
  return <img className={css.img} src={sheep} alt={sheep} />;
}
