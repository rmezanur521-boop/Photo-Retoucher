import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Clock, ArrowRight } from "lucide-react";
import styles from "./BlogCard.module.css";

const BlogCard = ({ id, title, author, date, category, readTime }) => {
  return (
    <article className={styles.card}>
      <Link to={`/blog/${id}`} className={styles.imageWrapper}>
        <img
          src={`/assets/images/blog/${id}.png`}
          alt={title}
          className={styles.image}
        />
      </Link>

      <div className={styles.content}>
        <span className={styles.meta}>
          BY {author.toUpperCase()} &bull; {date}
        </span>

        <h3 className={styles.title}>
          <Link to={`/blog/${id}`}>{title}</Link>
        </h3>

        <div className={styles.footer}>
          <div className={styles.footerLeft}>
            <span className={styles.category}>{category.toUpperCase()}</span>
            <span className={styles.divider} />
            <span className={styles.readTime}>
              <Clock size={13} /> {readTime}
            </span>
          </div>

          <Link to={`/blog/${id}`} className={styles.learnMore}>
            Learn more <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </article>
  );
};

BlogCard.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  readTime: PropTypes.string.isRequired,
};

export default BlogCard;