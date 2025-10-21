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
import church from "../../assets/church.jpg";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { useContext } from "react";
import ThemeContext from "../../ThemeContext.jsx";

export default function GalleryItem() {
  const { theme } = useContext(ThemeContext);
  const [selectedIndex, setSelectedIndex] = useState(null);

  const images = [
    castle,
    house,
    sheep,
    tent,
    river,
    bridge,
    lake,
    village,
    church,
  ];

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
    <div className={`${css.wrap} ${theme === "light" ? css.light : css.dark}`}>
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
