import styles from "./ThumbnailCompareCard.module.css";

const ThumbnailCompareCard = ({ beforeImage, afterImage }) => {
  return (
    <div className={styles.thumb}>
      <div className={styles.half}>
        <img src={beforeImage} alt="Before" className={styles.image} />
      </div>
      <div className={styles.half}>
        <img src={afterImage} alt="After" className={styles.image} />
      </div>
    </div>
  );
};

export default ThumbnailCompareCard;