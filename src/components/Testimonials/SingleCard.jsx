import styles from "./Testimonials.module.css";
const SingleCard = ({
  logo,
  description,
  authorImg,
  authorName,
  authorPosition,
}) => {
  return (
    <div className={styles.singleCardContainer}>
      <img className={styles.logo} src={logo} alt="" />
      <p className={styles.description}>{description}</p>
      <div className={styles.author}>
        <img src={authorImg} alt="" />
        <div>
          <h1 className={styles.authorName}>{authorName}</h1>
          <p className={styles.authorPosition}>{authorPosition}</p>
        </div>
      </div>
    </div>
  );
};

export default SingleCard;
