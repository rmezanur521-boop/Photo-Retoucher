import BeforeAfterCard from "@/shared/cards/BeforeAfterCard";
import styles from "./ServiceHighlightCard.module.css";

const ServiceHighlightCard = ({ title, description, beforeImage, afterImage }) => {
  return (
    <div className={styles.card}>
      <BeforeAfterCard variant="plain" beforeImage={beforeImage} afterImage={afterImage} />

      <div className={styles.caption}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
      </div>
    </div>
  );
};

export default ServiceHighlightCard;