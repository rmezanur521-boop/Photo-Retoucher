import styles from "./OrganicShape.module.css";

const POSITION_CLASS_MAP = {
  "top-left": styles.topLeft,
  "top-right": styles.topRight,
  "bottom-left": styles.bottomLeft,
  "bottom-right": styles.bottomRight,
};

const OrganicShape = ({
  position = "bottom-left",
  width = 150,
  color = "#E3EAFE",
  opacity = 1,
  rotation = 0,
  flipX = false,
  flipY = false,
  zIndex = 0,
  top,
  right,
  bottom,
  left,

  style = {},

  className = "",
}) => {
  const positionClass =
    POSITION_CLASS_MAP[position] || styles.bottomLeft;

  const transform = `
    rotate(${rotation}deg)
    scaleX(${flipX ? -1 : 1})
    scaleY(${flipY ? -1 : 1})
  `;

  return (
    <svg
      className={`${styles.shape} ${positionClass} ${className}`}
      viewBox="0 0 218 473"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      style={{
        width,
        opacity,
        zIndex,
        transform,

        top,
        right,
        bottom,
        left,

        ...style,
      }}
    >
      <path
        d="M74 209.5C154 367.9 58 450.833 0 472.5L0 0H218C210.8 14.4 172.333 31 154 37.5C56.4 78.7 60 169.333 74 209.5Z"
        fill={color}
      />
    </svg>
  );
};

export default OrganicShape;