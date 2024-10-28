import styles from "./CaseStudySection.module.css";

const CaseStudyCard = ({
  image,
  title,
  description,
  keywords,
  trafficGrowth,
  conversionRate,
}) => {
  return (
    <div className={styles.caseStudyCard}>
      <img src={image} alt={title} className={styles.caseStudyImg} />
      <div className={styles.texts}>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
      <div className={styles.caseStudyStats}>
        <div>
          <strong>{keywords}+</strong> Keywords
        </div>
        <div>
          <strong>{trafficGrowth}%</strong> Organic traffic growth
        </div>
        <div>
          <strong>{conversionRate}X</strong> Conversion rate
        </div>

        <button className={styles.learnMoreBtn}>Learn more</button>
      </div>
    </div>
  );
};

export default CaseStudyCard;
