import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styles from "./Button.module.css";

const Button = ({
  children,
  to,
  onClick,
  variant = "primary",
  type = "button",
  icon = null,
  fullWidth = false,
  disabled = false,
  className = "",
}) => {
  const classes = `${styles.button} ${styles[variant]} ${
    fullWidth ? styles.fullWidth : ""
  } ${className}`.trim();

  if (to) {
    return (
      <Link to={to} className={classes}>
        <span>{children}</span>
        {icon && <span className={styles.icon}>{icon}</span>}
      </Link>
    );
  }

  return (
    <button
      type={type}
      className={classes}
      onClick={onClick}
      disabled={disabled}
    >
      <span>{children}</span>
      {icon && <span className={styles.icon}>{icon}</span>}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  to: PropTypes.string,
  onClick: PropTypes.func,
  variant: PropTypes.string,
  type: PropTypes.string,
  icon: PropTypes.node,
  fullWidth: PropTypes.bool,
  disabled: PropTypes.bool,
  className: PropTypes.string,
};

export default Button;