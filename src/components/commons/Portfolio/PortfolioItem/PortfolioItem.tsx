import { PortfolioItemType } from "../Portfolio.const";
import { motion } from "framer-motion";
import styles from "./PortfolioItem.module.css";
import { useTranslation } from "react-i18next";

interface PortfolioItemProps {
  item: PortfolioItemType;
  index: number;
}

const PortfolioItem = ({ item, index }: PortfolioItemProps) => {
  const { t } = useTranslation();

  return (
    <motion.div
      exit={{ height: 0 }}
      animate={{ opacity: 1, height: "100%" }}
      initial={{ opacity: 0, height: "100%" }}
      transition={{ delay: index * 0.2 }}
      className={styles.wrapper}
    >
      <img src={item.img} width={item.width} height={item.height} />
      <div className={styles.title}>
        <h6>{t(item.title)}</h6>
        <p>{item.createdAt}</p>
      </div>
    </motion.div>
  );
};

export default PortfolioItem;
