import styles from "./Contact.module.scss";

import { FaEnvelope } from "react-icons/fa";

const Contact = () => {
  return (
    <section id="contact" className={styles.contact}>
      <div className={`container ${styles.container}`}>
        <h2>Interested in working together?</h2>
        <a href="#" className="btn">
          Say Hello <span className="sr-only">Via Email</span>
          <FaEnvelope className="icon-envelope" />
        </a>
      </div>
    </section>
  );
};
export default Contact;
