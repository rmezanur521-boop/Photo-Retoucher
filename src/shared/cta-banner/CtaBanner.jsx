import { ArrowRight } from "lucide-react";
import { ROUTES } from "@/constants/routes";
import Button from "@/shared/buttons/Button";
import styles from "./CtaBanner.module.css";

const CtaBanner = () => {
  return (
    <section className={styles.banner}>
      <div className={styles.overlay} />

      <div className={styles.container}>
        <div className={styles.left}>
          <img
            src="/assets/icons/your-best-work.svg"
            alt="Your best work. Our Editing."
            className={styles.tagline}
          />
          <h2 className={styles.heading}>
            Ready to save time and scale your business?
          </h2>
          <p className={styles.subtext}>
            Join thousands of businesses that trust us for high-quality image
            editing, every time.
          </p>
        </div>

        <div className={styles.divider} />

        <div className={styles.right}>
          <h3 className={styles.rightHeading}>Let&apos;s get started</h3>
          <p className={styles.subtext}>
            Upload your images and receive your first edit within 6 hours.
          </p>
          <Button
            to={ROUTES.REGISTER}
            variant="light"
            icon={<ArrowRight size={16} />}
          >
            Get Started Free
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CtaBanner;