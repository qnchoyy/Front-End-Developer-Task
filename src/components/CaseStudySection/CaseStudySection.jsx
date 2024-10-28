import styles from "./CaseStudySection.module.css";
import caseStudy1 from "../../assets/caseStudy1.png";
import caseStudy2 from "../../assets/caseStudy2.png";
import CaseStudyCard from "./CaseStudyCard";

export default function CaseStudySection() {
  const caseStudies = [
    {
      image: caseStudy1,
      title: "Transforming brand presence for radiance cosmetics",
      description:
        "The strategic digital marketing efforts for Radiance Cosmetics not only enhanced their online presence but also converted that presence into tangible sales results, proving the effectiveness of a well-rounded digital approach in the competitive beauty industry.",
      keywords: 562,
      trafficGrowth: 266,
      conversionRate: 8,
    },
    {
      image: caseStudy2,
      title: "Elevating brand presence for Luxe Apparel",
      description:
        "The strategic digital marketing efforts transformed the brand’s online presence and sales performance, marking a significant achievement in the competitive fashion industry.",
      keywords: 562,
      trafficGrowth: 266,
      conversionRate: 8,
    },
  ];

  return (
    <section className={styles.caseStudySection}>
      <div className={styles.container}>
        <div className={styles.leftSide}>
          <h2>Proud of our success stories</h2>
          <p>
            In our case studies you will find inspiring success stories from
            brands like Brand A, Brand B, Brand C. They show how Market Masters
            help to optimize website performance and increase bottom-line.
          </p>
        </div>
        <div className={styles.rightSide}>
          <button>View all case studies</button>
        </div>
      </div>
      <div className={styles.caseStudyContainer}>
        {caseStudies.map((study, index) => (
          <CaseStudyCard key={index} {...study} />
        ))}
      </div>
    </section>
  );
}
