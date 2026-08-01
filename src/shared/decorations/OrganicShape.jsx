import styles from "./OrganicShape.module.css";

const POSITION_CLASS_MAP = {
  "bottom-left": styles.bottomLeft,
  "top-right": styles.topRight,
  "top-left": styles.topLeft,
  "bottom-right": styles.bottomRight,
};

const OrganicShape = ({ position = "bottom-left", className = "" }) => {
  const positionClass = POSITION_CLASS_MAP[position] || styles.bottomLeft;

  return (
    <svg
      className={`${styles.shape} ${positionClass} ${className}`}
      viewBox="0 0 218 473"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M74 209.5C154 367.9 58 450.833 0 472.5L-4.13073e-05 0L218 -1.90582e-05C210.8 14.4 172.333 31 154 37.5C56.4 78.7 60 169.333 74 209.5Z"
        fill="#E3EAFE"
      />
    </svg>
  );
};

export default OrganicShape;