import { useTranslation } from "react-i18next";

import AboutItem from "./AboutItem/AboutItem";
import styles from "./About.module.css";
import { aboutData } from "./About.const";

const About = () => {
  const { t } = useTranslation();

  return (
    <div className={styles.wrapper}>
      {aboutData.map((about, index) => (
        <AboutItem
          key={about.id}
          Graphic={about.Graphic}
          index={index}
          title={t(about.title)}
        />
      ))}
    </div>
  );
};

export default About;
