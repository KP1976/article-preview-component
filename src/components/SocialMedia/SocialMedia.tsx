import styles from "./SocialMedia.module.css";
import facebook from "../../assets/images/icon-facebook.svg";
import twitter from "../../assets/images/icon-twitter.svg";
import pinterest from "../../assets/images/icon-pinterest.svg";

const SocialMedia = () => {
  return (
    <div className={styles["social-media"]}>
      <div className={styles["social-media__container"]}>
        <span className={styles["social-media__text"]}>SHARE</span>
        <div className={styles["social-media__icons"]}>
          <a
            className={styles["social-media__link"]}
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={facebook} alt="Facebook" />
          </a>
          <a
            className={styles["social-media__link"]}
            href="https://www.twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={twitter} alt="Twitter" />
          </a>
          <a
            className={styles["social-media__link"]}
            href="https://www.pinterest.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={pinterest} alt="Pinterest" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default SocialMedia;
