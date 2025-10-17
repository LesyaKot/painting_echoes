import { useState, useEffect } from "react";
import css from "./GalleryItem.module.css";
import sheep from "../../assets/sheep.jpg";
import tent from "../../assets/tent.jpg";
import castle from "../../assets/castle.jpg";
import house from "../../assets/house.jpg";
import lake from "../../assets/lake.jpg";
import bridge from "../../assets/bridge.jpg";
import river from "../../assets/river.jpg";
import village from "../../assets/village.jpg";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

export default function GalleryItem() {
  const images = [castle, house, sheep, tent, river, bridge, lake, village];
  const [selectedIndex, setSelectedIndex] = useState(null);

  const handleClick = (index) => setSelectedIndex(index);
  const handleClose = () => setSelectedIndex(null);

  const handleNext = (e) => {
    e.stopPropagation();
    setSelectedIndex((prev) => (prev + 1) % images.length);
  };

  const handlePrev = (e) => {
    e.stopPropagation();
    setSelectedIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") handleClose();
      if (e.key === "ArrowRight") handleNext(e);
      if (e.key === "ArrowLeft") handlePrev(e);
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  return (
    <div className={css.wrap}>
      <div className={css.gallery}>
        {images.map((img, index) => (
          <img
            key={index}
            className={css.img}
            src={img}
            alt={`Artwork ${index + 1}`}
            onClick={() => handleClick(index)}
          />
        ))}
      </div>

      {selectedIndex !== null && (
        <div className={css.overlay} onClick={handleClose}>
          <button
            className={`${css.navButton} ${css.left}`}
            onClick={handlePrev}
          >
            <FaArrowLeft />
          </button>

          <img
            src={images[selectedIndex]}
            alt="enlarged artwork"
            className={css.enlarged}
          />

          <button
            className={`${css.navButton} ${css.right}`}
            onClick={handleNext}
          >
            <FaArrowRight />
          </button>
        </div>
      )}
    </div>
  );
}
