import { useState } from "react";
import styles from "./Header.module.css";
import logo from "../../assets/logo.png";
import burgerMenu from "../../assets/burgerMenu.png";
import search1 from "../../assets/search1.png";
import earth1 from "../../assets/earth1.png";
import frame3 from "../../assets/frame3.png";
import frame4 from "../../assets/frame4.png";
import frame5 from "../../assets/frame5.png";
import magnet1 from "../../assets/magnet1.png";
import vector1 from "../../assets/vector1.png";
import frame8 from "../../assets/frame8.png";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

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
                    <img src={search1} alt="" />
                    SEO Optimisation
                  </li>
                  <li>
                    <img src={earth1} alt="" />
                    Paid Media
                  </li>
                  <li>
                    <img src={frame3} alt="" />
                    Email Marketing
                  </li>
                  <li>
                    <img src={frame4} alt="" />
                    Influencer Marketing
                  </li>
                  <li>
                    <img src={frame5} alt="" />
                    Social Media
                  </li>
                  <li>
                    <img src={magnet1} alt="" />
                    Lead Generation
                  </li>
                  <li>
                    <img src={vector1} alt="" />
                    Web Design
                  </li>
                  <li>
                    <img src={frame8} alt="" />
                    Web Development
                  </li>
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
