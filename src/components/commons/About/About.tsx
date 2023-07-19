import AboutItem from "./AboutItem/AboutItem";
import GraduateGraphic from "./Graphics/GraduateGraphic/GraduateGraphic";
import styles from "./About.module.css";
import BrushesGraphic from "./Graphics/BrushesGraphic/BrushesGraphic";
import ArchitectGraphic from "./Graphics/ArchitectGraphic/ArchitectGraphic";
import CertificateGraphic from "./Graphics/CertificateGraphic/CertificateGraphic";
import ProgrammerGraphic from "./Graphics/ProgrammerGraphic/ProgrammerGraphic";

const aboutData = [
  {
    id: "about-1",
    Graphic: GraduateGraphic,
    title: "graduateTitle",
  },
  {
    id: "about-2",
    Graphic: BrushesGraphic,
    title: "paintingTitle",
  },
  {
    id: "about-3",
    Graphic: ArchitectGraphic,
    title: "architectTitle",
  },
  {
    id: "about-4",
    Graphic: CertificateGraphic,
    title: "certificateTitle",
  },
  {
    id: "about-5",
    Graphic: ProgrammerGraphic,
    title: "programmerTitle",
  },
];

const About = () => {
  return (
    <div className={styles.wrapper}>
      {aboutData.map((about, index) => (
        <AboutItem
          key={about.id}
          Graphic={about.Graphic}
          index={index}
          title={about.title}
        />
      ))}
    </div>
  );
};

export default About;
