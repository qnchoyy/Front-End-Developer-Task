import Grid from "../Grid/Grid";
import { servicesData } from "./services";

const ServicesSection = () => {
  const serviceSectionData = {
    title: "OUR SERVICES",
    subtitle: "We've got you covered",
    description: `Our mission is to elevate your brand to new heights. Our
           results-driven approach has successfully scaled businesses across
           diverse sectors, harnessing the power of digital marketing to drive
          remarkable growth.`,
    btnDescription: "View all services",
    data: servicesData,
  };

  return (
    <Grid
      title={serviceSectionData.title}
      subtitle={serviceSectionData.subtitle}
      description={serviceSectionData.description}
      btnDescription={serviceSectionData.btnDescription}
      data={serviceSectionData.data}
    />
  );
};

export default ServicesSection;
