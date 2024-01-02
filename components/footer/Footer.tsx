import styles from "./Footer.module.scss";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.container}`}>
        <p>Joshua Saunders</p>
        <a href="https://github.com/J-Saun/J-Saun">View on Github</a>
      </div>
    </footer>
  );
};

export default Footer;
