import styles from "./SectionTitle.module.css";

const SectionTitle = ({
  eyebrow,
  heading,
  highlight,
  subtext,
  align = "center",
  divider = false,
}) => {
  return (
    <div className={`${styles.wrapper} ${styles[align]}`}>
      {eyebrow && <span className={styles.eyebrow}>{eyebrow}</span>}
      <h2 className={styles.heading}>
        {heading} {highlight && <span className={styles.highlight}>{highlight}</span>}
      </h2>
      {subtext && <p className={styles.subtext}>{subtext}</p>}
      {divider && <span className={styles.divider} />}
    </div>
  );
};

export default SectionTitle;