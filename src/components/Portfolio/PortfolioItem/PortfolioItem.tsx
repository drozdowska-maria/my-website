import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

import {
  itemAnimationTransition,
  itemAnimationVariants,
} from "../../../utils/itemAnimation";
import { PortfolioItemType } from "../Portfolio.const";
import styles from "./PortfolioItem.module.css";

interface PortfolioItemProps {
  item: PortfolioItemType;
  index: number;
}

const PortfolioItem = ({ item, index }: PortfolioItemProps) => {
  const { t } = useTranslation();

  return (
    <motion.div
      exit="exit"
      animate="animate"
      initial="initial"
      transition={itemAnimationTransition(index)}
      variants={itemAnimationVariants}
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
