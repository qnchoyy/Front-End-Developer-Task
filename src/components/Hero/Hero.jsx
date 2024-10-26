import clutchLogo from "../../assets/clutchLogo.png";
import heroImage from "../../assets/hero-image.png";
import logoStrip from "../../assets/logoStrip.png";
import styles from "../Hero/Hero.module.css";
import Button from "../UI/Button";

export default function Hero() {
  return (
    <div className={styles.heroContainer}>
      <div className={styles.heroSmallText}>
        <img
          src={clutchLogo}
          alt="clutchLogo"
          className={styles.heroSmallTextImg}
        />
        <p className={styles.heroSmallTextParagraph}> 4.9 / 5 on Clutch</p>
      </div>
      <div className={styles.heroBigText}>
        <h1 className={styles.heroBigTextHeading}>
          Drive revenue and retention with growth experts that know how to win
        </h1>
        <p className={styles.heroBigTextParagraph}>
          Choose us as your digital marketing agency and propel your business to
          new heights with our award-winning digital marketing services and
          proprietary technology platform.
        </p>
        <div className={styles.btnsContainer}>
          <button className={styles.btnSuccess}>Succes Stories</button>
          <Button>Book a call</Button>
        </div>
        <img src={heroImage} className={styles.heroImage} alt="heroImage" />
      </div>
      <div className={styles.trustedBrands}>
        <h2>Trusted by industry leaders:</h2>
      </div>
      <img src={logoStrip} alt="companiesLogos" className={styles.companies} />
    </div>
  );
}
