import Button from "../UI/Button";
import styles from "./OurResults.module.css";
import icon1 from "../../assets/icon1.png";
import icon2 from "../../assets/icon2.png";
import icon3 from "../../assets/icon3.png";

export default function OurResults() {
  return (
    <div className={styles.container}>
      <div className={styles.results}>
        <h2 className={styles.title}>OUR RESULTS</h2>
        <h3 className={styles.subtitle}>Market Masters by the numbers</h3>
        <p className={styles.description}>
          Our mission is to elevate your brand to new heights. Our
          results-driven approach has successfully scaled businesses across
          diverse sectors, harnessing the power of digital marketing to drive
          remarkable growth.
        </p>
      </div>
      <div className={styles.metrics}>
        <div className={styles.cardHighlight}>
          <h4>A quantifiable journey of marketing excellence</h4>
          <p>
            Explore the numbers that tell the story of our projects,
            experiences, and the talented team behind our success.
          </p>
          <div className={styles.buttonCall}>
            <Button>Book a call</Button>
          </div>
        </div>
        <div className={styles.card}>
          <div className={styles.icon}>
            <img src={icon1} alt="" />
          </div>
          <div>
            <h3>$84M</h3>
            <p>Trackable revenue generated across our portfolio</p>
          </div>
        </div>
        <div className={styles.card}>
          <div className={styles.icon}>
            <img src={icon2} alt="" />
          </div>
          <div>
            <h3>230%</h3>
            <p>Average yearly growth rate across our clients</p>
          </div>
        </div>
        <div className={styles.card}>
          <div className={styles.icon}>
            <img src={icon3} alt="" />
          </div>
          <div>
            <h3>90%</h3>
            <p>Increase in ROAS compared to previous results</p>
          </div>
        </div>
      </div>
    </div>
  );
}
