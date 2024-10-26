import styles from "../UI/Button.module.css";

export default function Button({ children }) {
  return <button className={styles.button}>{children}</button>;
}
