import AboutHero from "../components/AboutHero";
import styles from "../style";
import { ContactMe } from "../components";

const About = () => {
  return (
    <>
    <div className={`bg-white ${styles.paddingX} ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <AboutHero />
      </div>
    </div>
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <ContactMe />
      </div>
    </div>
    </>
  );
};

export default About;