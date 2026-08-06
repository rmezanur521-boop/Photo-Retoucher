import { cloneElement, isValidElement } from "react";
import styles from "./SectionTitle.module.css";

const renderHeading = (heading, highlight, styles) => {
  if (Array.isArray(heading)) {
    return heading.map((part, index) => {
      if (typeof part === "string") {
        return <span key={index}>{part}</span>;
      }
      if (isValidElement(part)) {
        return cloneElement(part, { key: index });
      }
      return (
        <span
          key={index}
          className={part.highlight ? styles.highlight : undefined}
        >
          {part.text}
        </span>
      );
    });
  }

  return (
    <>
      {heading} {highlight && <span className={styles.highlight}>{highlight}</span>}
    </>
  );
};

const SectionTitle = ({
  eyebrow,
  heading,
  highlight,
  subtext,
  align = "center",
  divider = false,
  wrapperClassName,
  eyebrowClassName,
  headingClassName,
  subtextClassName,
}) => {
  return (
    <div
      className={`${styles.wrapper} ${styles[align]} ${wrapperClassName || ""}`}
    >
      {eyebrow && (
        <span className={`${styles.eyebrow} ${eyebrowClassName || ""}`}>
          {eyebrow}
        </span>
      )}
      <h2 className={`${styles.heading} ${headingClassName || ""}`}>
        {renderHeading(heading, highlight, styles)}
      </h2>
      {subtext && (
        <p className={`${styles.subtext} ${subtextClassName || ""}`}>
          {subtext}
        </p>
      )}
      {divider && <span className={styles.divider} />}
    </div>
  );
};

export default SectionTitle;