import { useState } from "react";
import styles from "./AboutItem.module.css";
import { motion } from "framer-motion";
import { AboutGraphicProps } from "../Graphics/types";
import { useTranslation } from "react-i18next";

interface AboutItemProps {
  Graphic: ({ mode }: AboutGraphicProps) => JSX.Element;
  title: string;
  index: number;
}

const AboutItem = ({ Graphic, index, title }: AboutItemProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      exit={{ height: 0 }}
      animate={{ opacity: 1, height: "100%" }}
      initial={{ opacity: 0, height: "100%" }}
      onMouseOver={() => setIsHovered(true)}
      onMouseOut={() => setIsHovered(false)}
      transition={{ delay: index * 0.2 }}
      className={styles.wrapper}
      style={{ backgroundColor: "#3d3d3d" }}
    >
      <Graphic mode={isHovered ? "color" : "black-and-white"} />
      <p>{title}</p>
    </motion.div>
  );
};

export default AboutItem;
