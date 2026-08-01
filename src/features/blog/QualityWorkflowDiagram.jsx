import {
  QUALITY_WORKFLOW_STEPS,
  QUALITY_WORKFLOW_FORMATS,
} from "@/constants/blogData";
import styles from "./QualityWorkflowDiagram.module.css";

const QualityWorkflowDiagram = () => {
  return (
    <div className={styles.diagram}>
      <h3 className={styles.title}>
        Path Photo Retouching Quality Control Workflow
      </h3>

      <div className={styles.stepsRow}>
        {QUALITY_WORKFLOW_STEPS.map((step) => (
          <div key={step.id} className={styles.step}>
            <div className={styles.iconWrapper}>
              <img src={`/assets/icons/workflow/${step.id}.svg`} alt="" />
            </div>
            <h4 className={styles.stepTitle}>{step.title}</h4>
            <p className={styles.stepDescription}>{step.description}</p>
          </div>
        ))}
      </div>

      <div className={styles.formatsRow}>
        {QUALITY_WORKFLOW_FORMATS.map((format) => (
          <span key={format} className={styles.formatBadge}>
            <span className={styles.formatLabel}>{format}</span>
          </span>
        ))}
      </div>

      <p className={styles.caption}>Delivered in your preferred format.</p>
    </div>
  );
};

export default QualityWorkflowDiagram;