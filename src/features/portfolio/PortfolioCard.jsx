import PropTypes from "prop-types";
import BeforeAfterCard from "@/shared/cards/BeforeAfterCard";
import styles from "./PortfolioCard.module.css";

const PortfolioCard = ({ id }) => {
  return (
    <div className={styles.card}>
      <BeforeAfterCard
        variant="plain"
        beforeImage={`/assets/images/services/${id}-before.jpg`}
        afterImage={`/assets/images/services/${id}-after.jpg`}
      />
    </div>
  );
};

PortfolioCard.propTypes = {
  id: PropTypes.string.isRequired,
};

export default PortfolioCard;