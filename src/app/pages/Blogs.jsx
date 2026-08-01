import { useState, useMemo } from "react";
import PageHeader from "@/shared/page-header/PageHeader";
import FilterTabs from "@/shared/filter-tabs/FilterTabs";
import BlogCard from "@/features/blog/BlogCard";
import Pagination from "@/shared/pagination/Pagination";
import { BLOG_CATEGORIES, BLOG_POSTS } from "@/constants/blogData";
import styles from "./Blogs.module.css";

const POSTS_PER_PAGE = 12;

const Blogs = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);

  const filteredPosts = useMemo(() => {
    if (activeCategory === "All") {
      return BLOG_POSTS;
    }
    return BLOG_POSTS.filter((post) => post.category === activeCategory);
  }, [activeCategory]);

  const totalPages = Math.max(
    1,
    Math.ceil(filteredPosts.length / POSTS_PER_PAGE)
  );

  const visiblePosts = filteredPosts.slice(
    (currentPage - 1) * POSTS_PER_PAGE,
    currentPage * POSTS_PER_PAGE
  );

  const handleCategoryChange = (category) => {
    setActiveCategory(category);
    setCurrentPage(1);
  };

  return (
    <main>
      <PageHeader
        eyebrow="Our Blogs"
        title={
          <>
            Insights, Tips &amp; Resources
            <br />
            For Better Product Photography
          </>
        }
        subtext="Expert guides, editing techniques, ecommerce tips, and industry insights to help you create images that sell."
      />

      <section className={styles.section}>
        <div className={styles.container}>
          <FilterTabs
            categories={BLOG_CATEGORIES}
            activeCategory={activeCategory}
            onChange={handleCategoryChange}
          />

          <div className={styles.grid}>
            {visiblePosts.map((post) => (
              <BlogCard key={post.id} {...post} />
            ))}
          </div>

          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={setCurrentPage}
          />
        </div>
      </section>
    </main>
  );
};

export default Blogs;