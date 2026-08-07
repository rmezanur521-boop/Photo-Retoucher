import { useSearchParams } from "react-router-dom";
import PageHeader from "@/shared/page-header/PageHeader";
import SectionTitle from "@/shared/section-title/SectionTitle";
import ServiceCard from "@/shared/cards/ServiceCard";
import BlogCard from "@/features/blog/BlogCard";
import { useSearch } from "@/hooks/useSearch";
import styles from "./Search.module.css";

const Search = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("q") || "";
  const { services, blogs } = useSearch(query);
  const hasResults = services.length > 0 || blogs.length > 0;

  return (
    <main>
      <PageHeader
        eyebrow="Search"
        title={`Results for "${query}"`}
      />

      <section className={styles.section}>
        <div className={styles.container}>
          {!hasResults && (
            <p className={styles.emptyState}>
              No services or blog posts matched your search.
            </p>
          )}

          {services.length > 0 && (
            <div className={styles.group}>
              <SectionTitle
                align="left"
                heading="Matching services"
              />
              <div className={styles.serviceGrid}>
                {services.map((service) => (
                  <ServiceCard
                    key={service.id}
                    id={service.id}
                    label={service.label}
                    description={service.description}
                  />
                ))}
              </div>
            </div>
          )}

          {blogs.length > 0 && (
            <div className={styles.group}>
              <SectionTitle
                align="left"
                heading="Matching blog posts"
              />
              <div className={styles.blogGrid}>
                {blogs.map((post) => (
                  <BlogCard
                    key={post.id}
                    id={post.id}
                    title={post.title}
                    author={post.author}
                    date={post.date}
                    category={post.category}
                    readTime={post.readTime}
                  />
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
    </main>
  );
};

export default Search;