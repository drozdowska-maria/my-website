import { useState } from "react";
import { useTranslation } from "react-i18next";

import { ActiveElementType } from "../../animations/CTAAnimation/types";
import HamburgerButton from "./HamburgerButton/HamburgerButton";
import HeaderButton from "./HeaderButton/HeaderButton";
import Logo from "./Logo/Logo";
import styles from "./Header.module.css";

const languages = ["en", "pl"];

interface HeaderProps {
  activeElement: ActiveElementType;
  setActiveElement: (arg: ActiveElementType) => void;
}

const Header = ({ activeElement, setActiveElement }: HeaderProps) => {
  const { t, i18n } = useTranslation();

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
            {t("about")}
          </HeaderButton>
          <HeaderButton
            isActive={activeElement === "monitor"}
            onClick={() => handleActiveElement("monitor")}
          >
            {t("technologies")}
          </HeaderButton>
          <HeaderButton
            isActive={activeElement === "cup"}
            onClick={() => handleActiveElement("cup")}
          >
            {t("portfolio")}
          </HeaderButton>
          <div className={styles.languageWrapper}>
            {languages.map((language, index, array) => (
              <div className={styles.languageWrapper} key={language}>
                <HeaderButton
                  onClick={() => i18n.changeLanguage(language)}
                  isActive={i18n.resolvedLanguage === language}
                >
                  {language}
                </HeaderButton>
                {index !== array.length - 1 && (
                  <div className={styles.languageDivider} />
                )}
              </div>
            ))}
          </div>
        </div>
        <div
          className={`${styles.backdrop} ${openDrawer ? styles.open : ""}`}
        />
      </div>
    </div>
  );
};

export default Header;
