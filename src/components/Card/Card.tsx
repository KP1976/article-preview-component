import styles from "./Card.module.css";

const Card = () => {
  return (
    <article className={styles.card}>
      <img src="./src/assets/images/drawers.jpg" alt="image-header" className={styles.image} />
      <div className={styles.content}>
        <header className="card__header">
          <h1 className="card__header-title">
            Shift the overall look and feel by adding these wonderful touches to furniture in your
            home
          </h1>
          <p className="card__header-text">
            Ever been in a room and felt like something was missing? Perhaps it felt slightly bare
            and uninviting. I’ve got some simple tips to help you make any room feel complete.
          </p>
        </header>
        <footer className="card__footer">
          <div className="card__author">
            <img
              src="./src/assets/images/avatar-michelle.jpg"
              alt="Michelle Appleton"
              className="card__author-image"
            />
            <hgroup className="card__author-info">
              <h2 className="card__author-name">Michelle Appleton</h2>
              <h3 className="card__author-date">28 Jun 2020</h3>
            </hgroup>
          </div>
          <div className="card__share">
            <button className="card__share-button">
              <img
                src="./src/assets/images/icon-share.svg"
                alt="share"
                className="card__share-icon"
              />
            </button>
          </div>
        </footer>
      </div>
    </article>
  );
};

export default Card;
