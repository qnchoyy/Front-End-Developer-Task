import styles from "./FaqSection.module.css";
import image from "../../assets/image.png";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

const FaqSection = () => {
  const questions = [
    "How do you measure the success?",
    "What makes your agency different from others?",
    "How long does it typically take to see results?",
    "How do you tailor your services to each client?",
    "What size businesses do you work with?",
    "What are your marketing specialists?",
  ];

  return (
    <div className={styles.faqSection}>
      <h2 className={styles.faqTitle}>
        Get the answers you are looking for about Market Masters
      </h2>
      <div className={styles.faqContent}>
        <div className={styles.faqQuestions}>
          {questions.map((question, index) => (
            <div key={index} className={styles.question}>
              <span>{question}</span>
              <span className={styles.questionIcon}>
                <FontAwesomeIcon icon={faChevronDown} className={styles.icon} />
              </span>
            </div>
          ))}
        </div>
        <div className={styles.faqImage}>
          <img src={image} alt="Team working together" />
        </div>
      </div>
    </div>
  );
};

export default FaqSection;
