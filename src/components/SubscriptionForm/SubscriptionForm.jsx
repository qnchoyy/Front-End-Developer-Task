import styles from "./SubscriptionForm.module.css";

const SubscriptionForm = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>Ready to Unleash Your Potential?</h2>
      <p className={styles.subheading}>
        Enter your email address below to subscribe to our newsletter
      </p>
      <form className={styles.form}>
        <div className={styles.inputContainer}>
          <input
            type="email"
            placeholder="Enter your email address"
            className={styles.input}
          />
          <button type="submit" className={styles.button}>
            Subscribe
          </button>
        </div>
      </form>
    </div>
  );
};

export default SubscriptionForm;
