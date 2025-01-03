import { useState } from "react";
import styles from "./Card.module.css";
import drawerImage from "../../assets/images/drawers.jpg";
import avatar from "../../assets/images/avatar-michelle.jpg";
import SocialMedia from "../SocialMedia/SocialMedia";
import Button from "../Button/Button";

const Card = () => {
  const [showSocialMedia, setShowSocialMedia] = useState(false);

  const handleButtonClick = () => {
    setShowSocialMedia(!showSocialMedia);
  };

  return (
    <article className={styles.card}>
      <img src={drawerImage} alt="image-header" className={styles.image} />
      <div className={styles.content}>
        <header className={styles.header}>
          <h1 className={styles["header-title"]}>
            Shift the overall look and feel by adding these wonderful touches to furniture in your
            home
          </h1>
          <p className={styles["header-text"]}>
            Ever been in a room and felt like something was missing? Perhaps it felt slightly bare
            and uninviting. I’ve got some simple tips to help you make any room feel complete.
          </p>
        </header>
        <footer className={styles.footer}>
          <div className={styles.author}>
            <img src={avatar} alt="Michelle Appleton" className={styles["author-image"]} />
            <hgroup className={styles["author-info"]}>
              <h2 className={styles["author-name"]}>Michelle Appleton</h2>
              <h3 className={styles["author-date"]}>28 Jun 2020</h3>
            </hgroup>
          </div>
          <Button onClick={handleButtonClick} clicked={showSocialMedia} />
        </footer>
        {showSocialMedia && <SocialMedia />}
      </div>
    </article>
  );
};

export default Card;
