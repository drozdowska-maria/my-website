import styles from "./HamburgerButton.module.css";

interface HamburgerButtonProps {
  open: boolean;
  onClick: () => void;
}

const HamburgerButton = ({ open, onClick }: HamburgerButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={`${styles.button} ${open ? styles.open : ""}`}
    >
      <span />
      <span />
      <span />
    </button>
  );
};

export default HamburgerButton;
