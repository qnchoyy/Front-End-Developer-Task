import styles from "./BlogSection.module.css";
import { articles } from "./BlogSectiondata";

const BlogSection = () => {
  return (
    <div className={styles.blogSection}>
      <div className={styles.header}>
        <div>
          <p>BLOG</p>
          <h2 className={styles.title}>
            Digital marketing & industry insights
          </h2>
        </div>
        <button className={styles.viewAll}>View all articles</button>
      </div>
      <div className={styles.articles}>
        {articles.map((article, index) => (
          <div key={index} className={styles.articleCard}>
            <img
              src={article.img}
              alt={article.title}
              className={styles.image}
            />
            <h3 className={styles.articleTitle}>{article.title}</h3>
            <p className={styles.description}>{article.description}</p>
            <div className={styles.footer}>
              <div>
                <img src={article.imageUrl} alt="" />
                <span className={styles.author}>{article.author}</span>
              </div>
              <span className={styles.date}>{article.date}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogSection;
