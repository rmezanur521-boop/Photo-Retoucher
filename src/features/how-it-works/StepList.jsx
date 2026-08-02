import { HOW_IT_WORKS_STEPS, STEP_ONE } from "@/constants/howItWorksData";
import styles from "./StepList.module.css";

const StepList = () => {
  return (
    <section className={styles.steps}>
      <div className={styles.container}>
        <div className={styles.stepOneCard}>
          <div className={styles.stepOneGrid}>
            <div className={styles.fileTypesColumn}>
              {STEP_ONE.fileTypes.map((type) => (
                <span key={type} className={styles.fileTypeChip}>
                  {type}
                </span>
              ))}
            </div>

            <div className={styles.uploadBox}>
              <img
                src="/assets/icons/upload-cloud.svg"
                alt=""
                className={styles.uploadIcon}
              />
              <p className={styles.uploadText}>
                Drag & drop your images here
                <br />
                or <span className={styles.uploadLink}>Browse file</span>
              </p>
              <span className={styles.uploadSupport}>
                Support .jpeg, .png, .PSD, .RAW
              </span>

              <div className={styles.uploadMeta}>
                <span>{STEP_ONE.uploadCount}</span>
                <span>{STEP_ONE.uploadSize}</span>
                <div className={styles.uploadProgressTrack}>
                  <div
                    className={styles.uploadProgressFill}
                    style={{ width: `${STEP_ONE.uploadProgress}%` }}
                  />
                </div>
                <span>{STEP_ONE.uploadProgress}%</span>
              </div>

              <div className={styles.uploadThumbs}>
                {STEP_ONE.thumbnails.map((thumb) => (
                  <img
                    key={thumb}
                    src={thumb}
                    alt=""
                    className={styles.uploadThumb}
                  />
                ))}
              </div>
            </div>

            <div className={styles.stepOneText}>
              <span className={styles.stepLabel}>Step {STEP_ONE.step}</span>
              <h3 className={styles.stepOneTitle}>{STEP_ONE.title}</h3>
              <p className={styles.stepOneDescription}>
                {STEP_ONE.description}
              </p>
              <p className={styles.stepOneNote}>{STEP_ONE.note}</p>
              <ul className={styles.checklist}>
                {STEP_ONE.checklist.map((item) => (
                  <li key={item}>
                    <img
                      src="/assets/icons/check-circle-blue.svg"
                      alt=""
                      className={styles.checkIcon}
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {HOW_IT_WORKS_STEPS.map((item) => (
          <div
            key={item.id}
            className={`${styles.stepRow} ${
              item.imagePosition === "right"
                ? styles.imageRight
                : styles.imageLeft
            }`}
          >
            <div className={styles.stepImageColumn}>
              <img
                src={item.image}
                alt={item.title}
                className={styles.stepImage}
              />
            </div>

            <div className={styles.stepTextColumn}>
              <span className={styles.stepLabel}>Step {item.step}</span>
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