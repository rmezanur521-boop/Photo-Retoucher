import { Link } from "react-router-dom";
import { ROUTES } from "@/constants/routes";
import OrganicShape from "@/shared/decorations/OrganicShape";
import styles from "./AuthLayout.module.css";

const AuthLayout = ({ formContent, illustrationContent }) => {
  return (
    <div className={styles.wrapper}>
        <OrganicShape
          position="bottom-left"
          width={160}
          color="#e3eafe"
          zIndex={0}
          flipY
          className={styles.cornerShape}
        />
        <OrganicShape
          position="top-right"
          width={200}
          color="#e3eafe"
          zIndex={0}
          flipX
          top={-40}
          className={styles.cornerShape}
        />

      <div className={styles.formCard}>
        <Link to={ROUTES.HOME} className={styles.logo}>
          <img
            src="/assets/logos/logo-icon.svg"
            alt="Photo Retoucher"
            className={styles.logoIcon}
          />
          <span className={styles.logoText}>
            <img src="/assets/logos/logo-text.svg"/>
          </span>
        </Link>

        {formContent}
      </div>

      <div className={styles.illustrationCard}>{illustrationContent}</div>
    </div>
  );
};

export default AuthLayout;