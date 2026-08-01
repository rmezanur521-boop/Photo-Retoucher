import styles from "./FilterTabs.module.css";

const FilterTabs = ({ categories, activeCategory, onChange }) => {
  return (
    <div className={styles.tabs}>
      {categories.map((category) => (
        <button
          key={category}
          type="button"
          className={`${styles.tab} ${
            activeCategory === category ? styles.tabActive : ""
          }`}
          onClick={() => onChange(category)}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default FilterTabs;