import { Chip } from "@mui/material";
import styles from "./Card.module.css";

function Card({ image, title, count, type }) {
  return (
    <div className={styles.card}>
      <img src={image} alt={title} className={styles.image} />

      <div className={styles.bottom}>
        <Chip
          label={`${count} ${type === "song" ? "Likes" : "Follows"}`}
          size="small"
          className={styles.chip}
        />
        <p className={styles.title}>{title}</p>
      </div>
    </div>
  );
}

export default Card;
