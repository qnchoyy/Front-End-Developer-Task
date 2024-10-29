import BlogSection from "./components/BlogSection/BlogSection";
import CaseStudySection from "./components/CaseStudySection/CaseStudySection";
import Expertise from "./components/Expertise/Expertise";
import FaqSection from "./components/FaqSection/FaqSection";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Proccess from "./components/Proccess/Proccess";
import OurResults from "./components/Results/OurResults";
import ServicesSection from "./components/ServicesSections/ServicesSection";
import SubscriptionForm from "./components/SubscriptionForm/SubscriptionForm";
import Testimonials from "./components/Testimonials/Testimonial";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <OurResults />
      <ServicesSection />
      <CaseStudySection />
      <Expertise />
      <Testimonials />
      <Proccess />
      <FaqSection />
      <BlogSection />
      <SubscriptionForm />
      <Footer />
    </>
  );
}

export default App;
