import { portfolioData } from "./Portfolio.const";
import PortfolioItem from "./PortfolioItem/PortfolioItem";
import styles from "./Potrfolio.module.css";

const Portfolio = () => {
  return (
    <div className={styles.wrapper}>
      {portfolioData.map((item, index) => (
        <PortfolioItem item={item} index={index} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;
