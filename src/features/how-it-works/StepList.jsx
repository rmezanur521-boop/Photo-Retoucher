import { HOW_IT_WORKS_STEPS } from "@/constants/howItWorksData";
import styles from "./StepList.module.css";

const StepList = () => {
  return (
    <section className={styles.steps}>
      <div className={styles.container}>
        {HOW_IT_WORKS_STEPS.map((item, index) => (
          <div key={item.id} className={styles.stepItem}>
            <div className={styles.stepMarker}>
              <span className={styles.stepNumber}>{item.step}</span>
              {index !== HOW_IT_WORKS_STEPS.length - 1 && (
                <span className={styles.stepLine} />
              )}
            </div>

            <div className={styles.stepContent}>
              <h3 className={styles.stepTitle}>{item.title}</h3>
              <p className={styles.stepDescription}>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default StepList;