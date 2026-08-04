import OrganicShape from "@/shared/decorations/OrganicShape";
import styles from "./PageHeader.module.css";

const PageHeader = ({ eyebrow, title, subtext }) => {
  return (
    <section className={styles.header}>
      
      <OrganicShape position="bottom-left" width={120} color="#e3eafe" zIndex={0} flipY />

      <div className={styles.container}>
        {eyebrow && <span className={styles.eyebrow}>{eyebrow}</span>}
        <h1 className={styles.heading}>{title}</h1>
        {subtext && <p className={styles.subtext}>{subtext}</p>}
      </div>
    </section>
  );
};

export default PageHeader;