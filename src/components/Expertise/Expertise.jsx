import Grid from "../Grid/Grid";
import styles from "./Expertise.module.css";
import { expertiseData } from "./expertiseData";

const Expertise = () => {
  const expertise = {
    title: "OUR EXPERTISE",
    subtitle: "Business industries we dive in",
    description: `Our team excels in adapting our strategies to meet the unique needs of various industries. Discover how we drive success in each sector..`,
    data: expertiseData,
  };

  return (
    <div className={styles.expertiseWrapper}>
      <Grid
        title={expertise.title}
        subtitle={expertise.subtitle}
        description={expertise.description}
        data={expertise.data}
        centerStyling={true}
      />
    </div>
  );
};

export default Expertise;
