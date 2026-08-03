import { ArrowRight } from "lucide-react";
import BeforeAfterCard from "@/shared/cards/BeforeAfterCard";
import Button from "@/shared/buttons/Button";
import { ROUTES } from "@/constants/routes";
import styles from "./AllServiceCard.module.css";

const AllServiceCard = ({ service }) => {
  const { id, label, description } = service;

  return (
    <div className={styles.card}>
      <BeforeAfterCard
        variant="plain"
        beforeImage={`/assets/images/services/${id}-before.jpg`}
        afterImage={`/assets/images/services/${id}-after.jpg`}
      />

      <div className={styles.content}>
        <h3 className={styles.title}>{label}</h3>
        <p className={styles.description}>{description}</p>
        <p className={styles.price}>Starting at $0.20 per image</p>

        <div className={styles.actions}>
          <Button to={ROUTES.REGISTER} variant="primary" icon={<ArrowRight size={14} />}>
            Get My Image Edit
          </Button>
          <Button
            to={ROUTES.SERVICE_DETAILS.replace(":serviceId", id)}
            variant="outline"
            icon={<ArrowRight size={14} />}
          >
            View Details
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AllServiceCard;