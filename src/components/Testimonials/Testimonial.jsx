import stars from "../../assets/stars.png";
import cLogo from "../../assets/cLogo.png";
import SingleCard from "./SingleCard";
import { testimonialsData } from "./testimonialsData";
import styles from "./Testimonials.module.css";

const Testimonials = () => {
  return (
    <div className={styles.container}>
      <div className={styles.text}>
        <div className={styles.leftSide}>
          <h1>TESTIMONIALS</h1>
          <h2>Trusted by worldwide companies</h2>
          <p>
            Our mission is to elevate your brand to new heights. Our
            results-driven approach has successfully scaled businesses across
            diverse sectors, harnessing the power of digital marketing to drive
            remarkable growth
          </p>
        </div>
        <div className={styles.rightSide}>
          <div className={styles.images}>
            <img src={stars} alt="" />
            <img src={cLogo} alt="" />
            <p>38 Reviews</p>
          </div>
          <div>
            <h4>Rate us on clutch →</h4>
          </div>
        </div>
      </div>

      <div className={styles.cardsContainer}>
        {testimonialsData.map((testimonial) => (
          <SingleCard
            key={testimonial.title}
            title={testimonial.title}
            logo={testimonial.logo}
            description={testimonial.description}
            authorImg={testimonial.authorImg}
            authorName={testimonial.authorName}
            authorPosition={testimonial.authorPosition}
          />
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
