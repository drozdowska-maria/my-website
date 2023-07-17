import { ButtonHTMLAttributes } from "react";
import styles from "./HeaderButton.module.css";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  isActive: boolean;
};

const HeaderButton = (props: ButtonProps) => {
  const { children, className, isActive, ...restProps } = props;

  return (
    <button
      {...restProps}
      className={`${styles.button} ${className} ${
        isActive ? styles.activeButton : ""
      }`}
    >
      {children}
      <div
        className={`${styles.border} ${isActive ? styles.activeBorder : ""}`}
      />
    </button>
  );
};

export default HeaderButton;
