import { motion } from "framer-motion";
import { useState } from "react";

import { AboutGraphicProps } from "../Graphics/types";
import styles from "./AboutItem.module.css";
import {
  itemAnimationTransition,
  itemAnimationVariants,
} from "../../../utils/itemAnimation";

interface AboutItemProps {
  Graphic: ({ mode }: AboutGraphicProps) => JSX.Element;
  title: string;
  index: number;
}

const AboutItem = ({ Graphic, index, title }: AboutItemProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      variants={itemAnimationVariants}
      exit="exit"
      animate="animate"
      initial="initial"
      transition={itemAnimationTransition(index)}
      onMouseOver={() => setIsHovered(true)}
      onMouseOut={() => setIsHovered(false)}
      className={styles.wrapper}
    >
      <Graphic mode={isHovered ? "color" : "black-and-white"} />
      <p>{title}</p>
    </motion.div>
  );
};

export default AboutItem;
