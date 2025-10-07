import GalleryItem from "../GalleryItem/GalleryItem";
import css from "./Gallery.module.css";

export default function Gallery() {
  return (
    <div className={css.wrap}>
      <GalleryItem />
    </div>
  );
}
