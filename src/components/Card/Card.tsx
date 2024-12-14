import styles from "./Card.module.css";

const Card = () => {
  return (
    <article className={styles.card}>
      <img src="./src/assets/images/drawers.jpg" alt="image-header" className={styles.image} />
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
            <img
              src="./src/assets/images/avatar-michelle.jpg"
              alt="Michelle Appleton"
              className={styles["author-image"]}
            />
            <hgroup className={styles["author-info"]}>
              <h2 className={styles["author-name"]}>Michelle Appleton</h2>
              <h3 className={styles["author-date"]}>28 Jun 2020</h3>
            </hgroup>
          </div>
          <button className={styles["share-button"]}>
            <img src="./src/assets/images/icon-share.svg" alt="share" />
          </button>
        </footer>
      </div>
    </article>
  );
};

export default Card;
