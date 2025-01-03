import styles from "./Button.module.css";

interface ButtonProps {
  onClick: () => void;
  clicked: boolean;
}

const Button: React.FC<ButtonProps> = ({ onClick, clicked }) => {
  return (
    <button
      className={`${styles["share-button"]} ${clicked ? styles.active : ""}`}
      onClick={onClick}
      aria-label="Share"
    >
      <svg
        className={`${styles["share-button__icon"]} ${clicked ? styles.active2 : ""}`}
        xmlns="http://www.w3.org/2000/svg"
        width="15"
        height="13"
      >
        <path d="M15 6.495L8.766.014V3.88H7.441C3.33 3.88 0 7.039 0 10.936v2.049l.589-.612C2.59 10.294 5.422 9.11 8.39 9.11h.375v3.867L15 6.495z" />
      </svg>
    </button>
  );
};

export default Button;
