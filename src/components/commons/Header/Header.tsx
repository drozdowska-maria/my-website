import { ActiveElementType } from "../../animations/CTAAnimation/types";
import styles from "./Header.module.css";
import HeaderButton from "./HeaderButton/HeaderButton";
import Logo from "./Logo/Logo";

interface HeaderProps {
  activeElement: ActiveElementType;
  setActiveElement: (arg: ActiveElementType) => void;
}

const Header = ({ activeElement, setActiveElement }: HeaderProps) => {
  // TODO: translations
  // TODO: mobile
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <Logo
          isActive={!activeElement}
          onLogoClick={() => setActiveElement("")}
        />
        <div className={styles.buttonWrapper}>
          <HeaderButton
            isActive={activeElement === "drafting-triangle"}
            onClick={() => setActiveElement("drafting-triangle")}
          >
            o mnie
          </HeaderButton>
          <HeaderButton
            isActive={activeElement === "monitor"}
            onClick={() => setActiveElement("monitor")}
          >
            technologie
          </HeaderButton>
          <HeaderButton
            isActive={activeElement === "cup"}
            onClick={() => setActiveElement("cup")}
          >
            portfolio
          </HeaderButton>
          {/* TODO: language dropdown */}
        </div>
      </div>
    </div>
  );
};

export default Header;
