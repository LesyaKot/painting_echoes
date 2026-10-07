import { useContext } from 'react';
import ThemeContext from '../../ThemeContext';
import css from './Logo.module.css';

export default function Logo() {
  const { theme } = useContext(ThemeContext);
  return (
    <div className={`${css.wrap} ${theme === 'dark' ? css.dark : css.light}`}>
      <p className={css.logo}>Echoes of My Soul</p>
    </div>
  );
}
