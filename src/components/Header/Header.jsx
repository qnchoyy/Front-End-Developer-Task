import { useState } from "react";
import styles from "./Header.module.css";
import logo from "../../assets/logo.png";
import burgerMenu from "../../assets/burgerMenu.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronDown,
  faMagnifyingGlass,
  faGlobe,
  faEnvelope,
  faStar,
  // faReact
} from "@fortawesome/free-solid-svg-icons";

export default function Header() {
  const [isServicesOpen, setIsServicesopen] = useState(false);

  return (
    <header className={styles.header}>
      <div className={styles.wrapper}>
        <div className={styles.logo}>
          <img src={logo} alt="logo" />
        </div>
        <nav className={styles.nav}>
          <ul>
            <li>
              <button
                onClick={() => setIsServicesopen(!isServicesOpen)}
                className={styles.dropdown}
              >
                Services
                <FontAwesomeIcon icon={faChevronDown} className={styles.icon} />
              </button>
              {isServicesOpen && (
                <ul className={`${styles.dropdownMenu} ${styles.open}`}>
                  <li>
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                    SEO Optimisation
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faGlobe} />
                    Paid Media
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faEnvelope} />
                    Email Marketing
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faStar} />
                    Influencer Marketing
                  </li>
                  <li>
                    {/* <FontAwesomeIcon icon={faReact} /> */}
                    Social Media
                  </li>
                  <li>Lead Generation</li>
                  <li>Web Design</li>
                  <li>Web Development</li>
                </ul>
              )}
            </li>
            <li>
              Industries
              <FontAwesomeIcon icon={faChevronDown} className={styles.icon} />
            </li>
            <li>Success stories</li>
            <li>About us</li>
            <li>Blog</li>
            <li>Contact</li>
          </ul>
        </nav>
        <nav className={styles.burgerMenu}>
          <img src={burgerMenu} alt="" />
        </nav>
        <button className={styles.bookCallButton}>Book a call</button>
      </div>
    </header>
  );
}
