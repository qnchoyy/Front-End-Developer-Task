import clutchLogo from "../../assets/clutchLogo.png";
import heroImage from "../../assets/hero-image.png";
import logoStrip from "../../assets/logoStrip.png";
import styles from "../Hero/Hero.module.css";
import facebook from "../../assets/facebook.png";
import google from "../../assets/google.png";
import pinterest from "../../assets/pinterest.png";
import twitch from "../../assets/twitch.png";
import youTube from "../../assets/youTube.png";
import webflow from "../../assets/webflow.png";

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
          <button className={styles.btnSuccess}>Success Stories</button>
          <button className={styles.btnBook}>Book a call</button>
        </div>
        <div className={styles.heroImageWrapper}>
          <img src={heroImage} className={styles.heroImage} alt="heroImage" />
        </div>
      </div>
      <div className={styles.trustedBrands}>
        <h2>Trusted by industry leaders:</h2>
        <div className={styles.socials}>
          <div>
            <img
              src={google}
              alt="companiesLogos"
              className={styles.companies}
            />
            <img
              src={facebook}
              alt="companiesLogos"
              className={styles.companies}
            />
            <img
              src={youTube}
              alt="companiesLogos"
              className={styles.companies}
            />
          </div>
          <div>
            <img
              src={pinterest}
              alt="companiesLogos"
              className={styles.companies}
            />
            <img
              src={twitch}
              alt="companiesLogos"
              className={styles.companies}
            />
            <img
              src={webflow}
              alt="companiesLogos"
              className={styles.companies}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
