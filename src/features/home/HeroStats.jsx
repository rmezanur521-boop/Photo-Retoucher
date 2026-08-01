import styles from "./HeroStats.module.css";

const STATS = [
  {
    icon: "/assets/icons/image-icon.png",
    value: "50,000+",
    label: "Image Edited Daily",
  },
  {
    icon: "/assets/icons/users-icon.png",
    value: "42,000+",
    label: "Happy Clients",
  },
  {
    icon: "/assets/icons/satisfaction-icon.png",
    value: "98%",
    label: "Client Satisfaction",
  },
  {
    icon: "/assets/icons/turnaround-icon.png",
    value: "6-24h",
    label: "Average Turnaround",
  },
];

const HeroStats = () => {
  return (
    <div className={styles.statsBar}>
      <div className={styles.container}>
        {STATS.map(({ icon, value, label }, i) => (
          <div className={styles.stat} key={i}>
            <div className={styles.iconCircle}>
              <img src={icon} alt={label} className={styles.statIcon} />
            </div>
            <div className={styles.statText}>
              <span className={styles.statValue}>{value}</span>
              <span className={styles.statLabel}>{label}</span>
            </div>
            {i < STATS.length - 1 && <div className={styles.divider} />}
          </div>
        ))}
      </div>
    </div>
  );
};

export default HeroStats;