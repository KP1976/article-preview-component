import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.attribution}>
      Challenge by{" "}
      <a
        className={styles["attribution-link"]}
        href="https://www.frontendmentor.io?ref=challenge"
        target="_blank"
      >
        Frontend Mentor
      </a>
      . Coded by{" "}
      <a className={styles["attribution-link"]} href="#">
        Krzysztof Pawłowski
      </a>
      .
    </footer>
  );
};

export default Footer;
