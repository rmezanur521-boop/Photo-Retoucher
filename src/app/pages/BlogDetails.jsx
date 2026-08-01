import { useParams } from "react-router-dom";
import { Share2 } from "lucide-react";
import {
  BLOG_POSTS,
  BLOG_TABLE_OF_CONTENTS,
  BLOG_TAGS,
} from "@/constants/blogData";
import BlogCard from "@/features/blog/BlogCard";
import QualityWorkflowDiagram from "@/features/blog/QualityWorkflowDiagram";
import styles from "./BlogDetails.module.css";

const BlogDetails = () => {
  const { blogId } = useParams();

  const post = BLOG_POSTS.find((item) => item.id === blogId) || BLOG_POSTS[0];
  const relatedPosts = BLOG_POSTS.filter((item) => item.id !== post.id).slice(
    0,
    3
  );

  const processExplanationText =
    "A professional service should be able to explain the process clearly – who edits the image, who reviews it, and what happens before delivery.";

  return (
    <main>
      <section className={styles.header}>
        <div className={styles.headerContainer}>
          <span className={styles.eyebrow}>{post.category}</span>
          <h1 className={styles.title}>{post.title}</h1>
          <p className={styles.subtext}>
            Picking the wrong photo retouching company costs more than the
            invoice. Use these five red flags to vet any retouching agency
            before you commit.
          </p>
        </div>
      </section>

      <section className={styles.content}>
        <div className={styles.contentContainer}>
          <aside className={styles.sidebar}>
            <h4 className={styles.sidebarTitle}>In This Article</h4>
            <ul className={styles.tocList}>
              {BLOG_TABLE_OF_CONTENTS.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>

            <button type="button" className={styles.shareButton}>
              <Share2 size={16} /> Share This Article
            </button>
          </aside>

          <article className={styles.article}>
            <img
              src={`/assets/images/blog/${post.id}-cover.jpg`}
              alt={post.title}
              className={styles.coverImage}
            />

            <p>
              Some providers are excellent. Many are not. The gap between a
              quick fix and a reliable long-term partner usually only shows
              up when something breaks. Before you outsource photo editing,
              run through the five red flags below. Each one highlights a
              risk that can cost ecommerce teams time, money, and trust.
            </p>

            <p>
              Ask any retouching company how quality is checked before
              delivery. If the answer is vague, that tells you a lot.
            </p>

            <QualityWorkflowDiagram />

            <p>{processExplanationText}</p>
            <p>{processExplanationText}</p>

            <div className={styles.tags}>
              {BLOG_TAGS.map((tag) => (
                <span key={tag} className={styles.tag}>
                  {tag.toUpperCase()}
                </span>
              ))}
            </div>
          </article>
        </div>
      </section>

      <section className={styles.relatedSection}>
        <div className={styles.relatedContainer}>
          <h3 className={styles.relatedTitle}>You Might Also Like</h3>
          <div className={styles.relatedGrid}>
            {relatedPosts.map((item) => (
              <BlogCard key={item.id} {...item} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default BlogDetails;