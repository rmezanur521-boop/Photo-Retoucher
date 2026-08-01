import BeforeAfterCard from "@/shared/cards/BeforeAfterCard";
import styles from "./PortfolioCard.module.css";

const PortfolioCard = ({ id }) => {
  return (
    <div className={styles.card}>
      <BeforeAfterCard
        variant="plain"
        beforeImage={`/assets/images/portfolio/${id}-before.jpg`}
        afterImage={`/assets/images/portfolio/${id}-after.jpg`}
      />
    </div>
  );
};

export default PortfolioCard;