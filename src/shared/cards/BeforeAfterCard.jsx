import styles from "./BeforeAfterCard.module.css";

const BeforeAfterCard = ({
  beforeImage,
  afterImage,
  thumbnailImage = null,
  variant = "boxed",
}) => {
  return (
    <div className={`${styles.card} ${variant === "plain" ? styles.plain : ""}`}>
      <div className={styles.compareWrapper}>
        <div className={styles.half}>
          <img src={beforeImage} alt="Before editing" className={styles.image} />
          <span className={styles.overlay} />
          <span className={`${styles.label} ${styles.labelLeft}`}>Before</span>
        </div>

        <div className={styles.half}>
          <img src={afterImage} alt="After editing" className={styles.image} />
          <span className={`${styles.label} ${styles.labelRight}`}>After</span>
        </div>

        <span className={styles.divider} />
        <span className={styles.compareIcon} aria-hidden="true">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
            <path
              d="M9 6L3 12L9 18"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M15 6L21 12L15 18"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
      </div>

      {thumbnailImage && (
        <div className={styles.thumbnailCard}>
          <img src={thumbnailImage} alt="Preview" />
        </div>
      )}
    </div>
  );
};

export default BeforeAfterCard;