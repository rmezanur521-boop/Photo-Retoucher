import SectionTitle from "@/shared/section-title/SectionTitle";
import styles from "./PageHeader.module.css";

const PageHeader = ({
  eyebrow,
  title,
  highlight,
  subtext,
  align = "center",
  divider = false,
  background = true,
  className,
}) => {
  return (
    <section
      className={`${styles.header} ${!background ? styles.noBackground : ""} ${className || ""}`}
    >
      <div className={styles.container}>
        <SectionTitle
          eyebrow={eyebrow}
          heading={title}
          highlight={highlight}
          subtext={subtext}
          align={align}
          divider={divider}
          wrapperClassName={styles.sectionTitleWrapper}
          eyebrowClassName={styles.eyebrow}
          headingClassName={styles.heading}
          subtextClassName={styles.subtext}
        />
      </div>
    </section>
  );
};

export default PageHeader;