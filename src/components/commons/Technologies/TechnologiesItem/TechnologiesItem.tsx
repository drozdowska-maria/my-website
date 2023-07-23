import { motion } from "framer-motion";
import { useState } from "react";
import { useTranslation } from "react-i18next";

import { TechnologiesIconProps } from "../Icons/types";
import styles from "./TechnologiesItem.module.css";

interface TechnologiesItemType {
  activeBg: string;
  title: string;
  Icon: (props: TechnologiesIconProps) => JSX.Element;
}

interface TechnologiesItemProps {
  item: TechnologiesItemType;

  index: number;
}

const TechnologiesItem = ({ item, index }: TechnologiesItemProps) => {
  const { t } = useTranslation();

  const [isHovered, setIsHovered] = useState(false);
  return (
    <motion.div
      exit={{ height: 0 }}
      animate={{ opacity: 1, height: "100%" }}
      initial={{ opacity: 0, height: "100%" }}
      transition={{ delay: index * 0.2 }}
      className={styles.wrapper}
      onMouseOver={() => setIsHovered(true)}
      onMouseOut={() => setIsHovered(false)}
      style={{ backgroundColor: isHovered ? item.activeBg : "#3d3d3d" }}
    >
      <item.Icon
        fill={isHovered ? undefined : "#d9d9d9c2"}
        ariaLabel={t(item.title)}
      />
    </motion.div>
  );
};

export default TechnologiesItem;
