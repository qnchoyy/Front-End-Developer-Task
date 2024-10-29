import styles from "../Grid/Grid.module.css";

const Grid = ({
  title,
  subtitle,
  description,
  btnDescription,
  data,
  centerStyling,
}) => {
  return (
    <div className={styles.container}>
      <div className={centerStyling ? styles.centerHeader : styles.header}>
        <div className={!centerStyling && styles.left}>
          <h2 className={styles.title}>{title}</h2>
          <h3 className={styles.subtitle}>{subtitle}</h3>
        </div>
        <p className={styles.description}>{description}</p>
      </div>
      <div className={styles.servicesGrid}>
        {data.map((service, index) => (
          <div key={index} className={styles.card}>
            <img src={service.icon} className={styles.icon}></img>
            <h4 className={styles.serviceTitle}>{service.title}</h4>
            <p className={styles.serviceDescription}>{service.description}</p>
            <a href="#" className={styles.learnMore}>
              Learn more →
            </a>
          </div>
        ))}
      </div>
      {btnDescription && (
        <button className={styles.viewAllButton}>{btnDescription}</button>
      )}
    </div>
  );
};

export default Grid;
