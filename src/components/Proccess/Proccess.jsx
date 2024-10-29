import Button from "../UI/Button";
import styles from "./Proccess.module.css";
import darts from "../../assets/darts.png";
import chess from "../../assets/chess.png";
import piechart from "../../assets/piechart.png";
import rocket2 from "../../assets/rocket2.png";

const Proccess = () => {
  return (
    <div className={styles.container}>
      <div className={styles.texts}>
        <div className={styles.left}>
          <h1>Our process</h1>
          <p>
            At Market Masters, we streamline your path to digital marketing
            success through a clear and collaborative process.
          </p>
        </div>
        <div className={styles.right}>
          <Button>Book a Call</Button>
        </div>
      </div>
      <div className={styles.steps}>
        <div className={styles.step}>
          <img src={darts} alt="" />
          <h3>Goal setting</h3>
          <p>
            Every successful project begins with a thorough consultation. We
            start by understanding your business.
          </p>
        </div>
        <div className={styles.step}>
          <img src={chess} alt="" />
          <h3>Strategy planning</h3>
          <p>
            After the consultation, our team develops a comprehensive strategy
            tailored to your specific needs.
          </p>
        </div>
        <div className={styles.step}>
          <img src={rocket2} alt="" />
          <h3>Implementation</h3>
          <p>
            We manage all aspects of the execution, ensuring that every campaign
            is launched smoothly.
          </p>
        </div>
        <div className={styles.step}>
          <img className={styles.icon} src={piechart} alt="" />
          <h3>Evaluation</h3>
          <p>
            After launching the campaigns, we closely monitor their performance
            and gather data.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Proccess;
