import { useTranslation } from "react-i18next";
import styles from "./HamburgerButton.module.css";

interface HamburgerButtonProps {
  open: boolean;
  onClick: () => void;
}

const HamburgerButton = ({ open, onClick }: HamburgerButtonProps) => {
  const { t } = useTranslation();

  return (
    <button
      onClick={onClick}
      aria-label={open ? t("closeMenu") : t("openManu")}
      aria-pressed={open}
      className={`${styles.button} ${open ? styles.open : ""}`}
    >
      <span />
      <span />
      <span />
    </button>
  );
};

export default HamburgerButton;
