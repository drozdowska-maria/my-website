import { useState } from "react";
import styles from "./TechnologiesItem.module.css";
import { motion } from "framer-motion";

interface TechnologiesItemProps {
  activeBg: string;
  Icon: ({ fill }: { fill?: string }) => JSX.Element;
  index: number;
}

const TechnologiesItem = ({ activeBg, Icon, index }: TechnologiesItemProps) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <motion.div
      exit={{ opacity: 0, transition: { delay: index * 0.06 } }}
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      transition={{ delay: index * 0.2 }}
      className={styles.wrapper}
      onMouseOver={() => setIsHovered(true)}
      onMouseOut={() => setIsHovered(false)}
      style={{ backgroundColor: isHovered ? activeBg : "#3d3d3d" }}
    >
      <Icon fill={isHovered ? undefined : "#d9d9d9c2"} />
    </motion.div>
  );
};

export default TechnologiesItem;
