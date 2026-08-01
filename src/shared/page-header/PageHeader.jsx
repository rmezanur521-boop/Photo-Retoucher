import OrganicShape from "@/shared/decorations/OrganicShape";
import styles from "./PageHeader.module.css";

const PageHeader = ({ eyebrow, title, subtext }) => {
  return (
    <section className={styles.header}>
      <OrganicShape position="bottom-left" />
      <OrganicShape position="top-right" />

      <div className={styles.container}>
        {eyebrow && <span className={styles.eyebrow}>{eyebrow}</span>}
        <h1 className={styles.heading}>{title}</h1>
        {subtext && <p className={styles.subtext}>{subtext}</p>}
      </div>
    </section>
  );
};

export default PageHeader;