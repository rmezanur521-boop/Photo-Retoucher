import { Link } from "react-router-dom";
import { ROUTES } from "@/constants/routes";
import styles from "./AuthLayout.module.css";

const AuthLayout = ({ formContent, illustrationContent }) => {
  return (
    <div className={styles.wrapper}>
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