import PropTypes from "prop-types";
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

ServiceHighlightCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  beforeImage: PropTypes.string.isRequired,
  afterImage: PropTypes.string.isRequired,
};

export default ServiceHighlightCard;