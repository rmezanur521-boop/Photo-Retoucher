import { ArrowLeft, ArrowRight } from "lucide-react";
import styles from "./Pagination.module.css";

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const pages = Array.from({ length: totalPages }, (_, index) => index + 1);

  return (
    <div className={styles.pagination}>
      <button
        type="button"
        className={styles.navButton}
        disabled={currentPage === 1}
        onClick={() => onPageChange(currentPage - 1)}
      >
        <ArrowLeft size={14} /> Preview
      </button>

      {pages.map((page) => (
        <button
          key={page}
          type="button"
          className={`${styles.pageButton} ${
            page === currentPage ? styles.pageButtonActive : ""
          }`}
          onClick={() => onPageChange(page)}
        >
          {page}
        </button>
      ))}

      <button
        type="button"
        className={styles.navButton}
        disabled={currentPage === totalPages}
        onClick={() => onPageChange(currentPage + 1)}
      >
        Next <ArrowRight size={14} />
      </button>
    </div>
  );
};

export default Pagination;