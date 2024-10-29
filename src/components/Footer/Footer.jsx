import styles from "./Footer.module.css";
import logo from "../../assets/logo.png";
import ytube from "../../assets/ytube.png";
import x from "../../assets/x.png";
import instagram from "../../assets/instagram.png";
import linkedin from "../../assets/linkedin.png";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.logoAndSocials}>
        <img src={logo} className={styles.logo}></img>
        <div className={styles.socials}>
          <img className={styles.icon} src={linkedin} alt="linkedinLogo" />

          <img className={styles.icon} src={instagram} alt="instagramLogo" />

          <img className={styles.icon} src={x} alt="xLogo" />

          <img className={styles.icon} src={ytube} alt="youtubeLogo" />
        </div>
      </div>

      <div className={styles.links}>
        <div className={styles.column}>
          <h4 className={styles.columnTitle}>Services</h4>
          <ul>
            <li>SEO Optimisation</li>
            <li>Paid media</li>
            <li>Email marketing</li>
            <li>Influencer marketing</li>
            <li>Social media</li>
            <li>Lead generation</li>
            <li>Web design</li>
            <li>Web development</li>
          </ul>
        </div>
        <div className={styles.column}>
          <h4 className={styles.columnTitle}>Industries</h4>
          <ul>
            <li>Marketplaces</li>
            <li>Fintech & Banking</li>
            <li>Fashion & Apparel</li>
            <li>Pet care</li>
            <li>Food & Beverage</li>
            <li>Automotive</li>
            <li>SaaS</li>
            <li>eCommerce</li>
          </ul>
        </div>
        <div className={styles.column}>
          <h4 className={styles.columnTitle}>Company</h4>
          <ul>
            <li>About us</li>
            <li>Careers</li>
            <li>Contact us</li>
            <li>Blog</li>
            <li>Success stories</li>
          </ul>
        </div>
        <div className={styles.column}>
          <h4 className={styles.columnTitle}>Contacts</h4>
          <ul>
            <li>(111) 111-1111</li>
            <li>office@companyname.com</li>
            <li>4882 Pooh Bear Lane, South Carolina, SC</li>
          </ul>
        </div>
      </div>

      <div className={styles.footerBottom}>
        <p>
          Build by <a href="#">Fundamental Studio</a>. Powered by{" "}
          <a href="#">WordPress</a>
        </p>
        <div className={styles.legalLinks}>
          <a href="#">Privacy policy</a>
          <a href="#">Terms of service</a>
          <a href="#">Cookie settings</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
