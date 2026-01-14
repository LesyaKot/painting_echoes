import { useRef } from "react";
import emailjs from "@emailjs/browser";
import css from "./ContactModal.module.css";

export default function ContactModal({ onClose }) {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_p4hh72a",
        "template_kpiq6wp",
        form.current,
        "xCE1pwvWO-oJ70xAj"
      )
      .then(
        () => {
          alert("Message sent ✅");
          onClose();
        },
        (error) => {
          alert("Error: " + error.text);
        }
      );
  };

  return (
    <div className={css.overlay} onClick={onClose}>
      <div className={css.modal} onClick={(e) => e.stopPropagation()}>
        <button className={css.close} onClick={onClose}>
          ✕
        </button>
        <h2 className={css.title}>Say Hey 👋</h2>

        <form ref={form} onSubmit={sendEmail} className={css.form}>
          <input
            name="from_name"
            type="text"
            placeholder="Your Name"
            required
          />
          <input
            name="reply_to"
            type="email"
            placeholder="Your Email"
            required
          />
          <input name="phone" type="tel" placeholder="Phone" />
          <textarea name="message" placeholder="Your Message..." required />
          <button type="submit" className={css.btn}>
            Send
          </button>
        </form>
      </div>
    </div>
  );
}
