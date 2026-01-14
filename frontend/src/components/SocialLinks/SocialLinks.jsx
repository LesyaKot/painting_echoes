import css from "./SocialLinks.module.css";

export default function SocialLinks({ links = {}, size = 20, color = "#fff" }) {
  const { instagram, telegram, facebook, email } = links;

  const commonProps = {
    width: size,
    height: size,
    fill: "none",
    stroke: color,
    strokeWidth: 1.5,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    role: "img",
    // xmlns: "http://www.w3.org/2000/svg",
  };

  return (
    <nav className={css.wrap} aria-label="Social links">
      {instagram && (
        <a
          className={css.link}
          href={instagram}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
          title="Instagram"
        >
          <svg {...commonProps} viewBox="0 0 24 24" className={css.icon}>
            <rect x="3" y="3" width="18" height="18" rx="5" ry="5" />
            <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" />
            <path d="M17.5 6.5h.01" />
          </svg>
        </a>
      )}

      {telegram && (
        <a
          className={css.link}
          href={telegram}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Telegram"
          title="Telegram"
        >
          <svg {...commonProps} viewBox="0 0 24 24" className={css.icon}>
            <path d="M22 2L11 13" />
            <path d="M22 2l-7 20-4-9-9-4 20-7z" />
          </svg>
        </a>
      )}

      {facebook && (
        <a
          className={css.link}
          href={facebook}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Facebook"
          title="Facebook"
        >
          <svg {...commonProps} viewBox="0 0 24 24" className={css.icon}>
            <path d="M18 2h-3a4 4 0 00-4 4v3H8v4h3v8h4v-8h3l1-4h-4V6a1 1 0 011-1h3z" />
          </svg>
        </a>
      )}
      {email && (
        <a
          className={css.link}
          href={`mailto:${email}`}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Email"
          title="Email"
        >
          <svg {...commonProps} viewBox="0 0 24 24" className={css.icon}>
            <rect x="2" y="4" width="20" height="16" rx="2" ry="2" />
            <polyline points="22,6 12,13 2,6" />
          </svg>
        </a>
      )}
    </nav>
  );
}
