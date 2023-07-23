import TechnologiesItem from "./TechnologiesItem/TechnologiesItem";
import styles from "./Technologies.module.css";
import { technologiesData } from "./Technologies.const";

const Technologies = () => {
  return (
    <div className={styles.wrapper}>
      {technologiesData.map((technology, index) => (
        <TechnologiesItem
          key={technology.title}
          item={technology}
          index={index}
        />
      ))}
    </div>
  );
};

export default Technologies;
