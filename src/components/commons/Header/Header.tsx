import { useState } from "react";
import { ActiveElementType } from "../../animations/CTAAnimation/types";
import HamburgerButton from "./HamburgerButton/HamburgerButton";
import styles from "./Header.module.css";
import HeaderButton from "./HeaderButton/HeaderButton";
import Logo from "./Logo/Logo";

interface HeaderProps {
  activeElement: ActiveElementType;
  setActiveElement: (arg: ActiveElementType) => void;
}

const Header = ({ activeElement, setActiveElement }: HeaderProps) => {
  const [openDrawer, setOpenDrawer] = useState(false);

  const toggleDrawer = () => {
    setOpenDrawer((prevValue) => !prevValue);
  };

  const handleActiveElement = (value: ActiveElementType) => {
    if (!value) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
    setActiveElement(value);
    setOpenDrawer(false);
  };
  // TODO: translations
  return (
    <div className={`${styles.wrapper} ${openDrawer ? styles.open : ""}`}>
      <div className={styles.container}>
        <div className={`${styles.row} ${openDrawer ? styles.open : ""}`}>
          <Logo
            isActive={!activeElement}
            onLogoClick={() => handleActiveElement("")}
          />
          <HamburgerButton open={openDrawer} onClick={toggleDrawer} />
        </div>
        <div
          className={`${styles.buttonWrapper} ${openDrawer ? styles.open : ""}`}
        >
          <HeaderButton
            isActive={activeElement === "drafting-triangle"}
            onClick={() => handleActiveElement("drafting-triangle")}
          >
            o mnie
          </HeaderButton>
          <HeaderButton
            isActive={activeElement === "monitor"}
            onClick={() => handleActiveElement("monitor")}
          >
            technologie
          </HeaderButton>
          <HeaderButton
            isActive={activeElement === "cup"}
            onClick={() => handleActiveElement("cup")}
          >
            portfolio
          </HeaderButton>
          {/* TODO: language dropdown */}
        </div>
        <div
          className={`${styles.backdrop} ${openDrawer ? styles.open : ""}`}
        />
      </div>
    </div>
  );
};

export default Header;
