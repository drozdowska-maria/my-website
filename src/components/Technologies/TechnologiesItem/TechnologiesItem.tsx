import { motion } from "framer-motion";
import { useState } from "react";
import { useTranslation } from "react-i18next";

import styles from "./TechnologiesItem.module.css";
import {
  itemAnimationTransition,
  itemAnimationVariants,
} from "../../../utils/itemAnimation";
import { TechnologiesItemType } from "../Technologies.const";

interface TechnologiesItemProps {
  item: TechnologiesItemType;
  index: number;
}

const TechnologiesItem = ({ item, index }: TechnologiesItemProps) => {
  const { t } = useTranslation();

  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      exit="exit"
      animate="animate"
      initial="initial"
      variants={itemAnimationVariants}
      transition={itemAnimationTransition(index)}
      onMouseOver={() => setIsHovered(true)}
      onMouseOut={() => setIsHovered(false)}
      className={styles.wrapper}
      style={{
        backgroundColor: isHovered ? item.activeBg : "var(--background-dark)",
      }}
    >
      <item.Icon
        fill={isHovered ? undefined : "var(--grey)"}
        ariaLabel={t(item.title)}
      />
    </motion.div>
  );
};

export default TechnologiesItem;
