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

      {/* <button className={styles["share-button"]}>
        <svg
          className={styles["share-button__icon"]}
          xmlns="http://www.w3.org/2000/svg"
          width="15"
          height="13"
        >
          <path d="M15 6.495L8.766.014V3.88H7.441C3.33 3.88 0 7.039 0 10.936v2.049l.589-.612C2.59 10.294 5.422 9.11 8.39 9.11h.375v3.867L15 6.495z" />
        </svg>
      </button> */}
    </div>
  );
};

export default SocialMedia;
