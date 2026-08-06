import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom"
import BeforeAfterCard from "@/shared/cards/BeforeAfterCard";
import styles from "./ServiceCard.module.css";

const ServiceCard = ({ id, label, description }) => {
  return (
    <div className={styles.card}>
      <BeforeAfterCard
        variant="plain"
        beforeImage={`/assets/images/services/${id}-before.jpg`}
        afterImage={`/assets/images/services/${id}-after.jpg`}
      />

      <h3 className={styles.title}>{label}</h3>
      <p className={styles.description}>{description}</p>

      <Link to={`/services/${id}`} className={styles.link}>
        Learn More <ArrowRight size={14} />
      </Link>
    </div>
  );
};

export default ServiceCard;