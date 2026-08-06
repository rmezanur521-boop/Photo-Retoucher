import PropTypes from "prop-types";
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

PageHeader.propTypes = {
  eyebrow: PropTypes.string,
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.array, PropTypes.node]),
  highlight: PropTypes.string,
  subtext: PropTypes.string,
  align: PropTypes.string,
  divider: PropTypes.bool,
  background: PropTypes.bool,
  className: PropTypes.string,
};

export default PageHeader;