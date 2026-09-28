// import { FaAnglesUp } from 'react-icons/fa6';

// import css from './ScrollToTop.module.css';

// export default function ScrollToTop() {
//   const scrollToTop = () => {
//     window.scrollTo({ top: 0, behavior: 'smooth' });
//   };

//   return (
//     <div className={css.scrollToTop} onClick={scrollToTop}>
//       <FaAnglesUp width={80} />
//     </div>
//   );
// }
import { FaAnglesUp } from 'react-icons/fa6';

export default function ScrollToTop() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Жорстко фіксуємо стилі прямо в коді, щоб теми не могли їх зламати
  const strictStyle = {
    position: 'fixed',
    bottom: '50px',
    right: '20px',
    backgroundColor: '#332c28', // Ваш колір кнопки
    color: '#ffffff', // Біла стрілочка
    padding: '12px',
    borderRadius: '8px',
    cursor: 'pointer',
    zIndex: 9999999, // Максимальний шар поверх усього на сайті
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  };

  return (
    <div style={strictStyle} onClick={scrollToTop}>
      <FaAnglesUp size={24} />
    </div>
  );
}
