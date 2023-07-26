import { useState } from "react";
import { useTranslation } from "react-i18next";

import HamburgerButton from "./HamburgerButton/HamburgerButton";
import HeaderButton from "./HeaderButton/HeaderButton";
import Logo from "./Logo/Logo";
import styles from "./Header.module.css";
import { ActiveElementType } from "../CTAAnimation/types";

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

  const handleElement = (value: ActiveElementType) => {
    let newActiveElement = value;
    if (activeElement === value || !value) {
      newActiveElement = "";
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
    setActiveElement(newActiveElement);
    setOpenDrawer(false);
  };

  return (
    <div className={`${styles.wrapper} ${openDrawer ? styles.open : ""}`}>
      <div className={styles.container}>
        <div className={styles.row}>
          <Logo
            isActive={!activeElement}
            onLogoClick={() => handleElement("")}
          />
          <HamburgerButton open={openDrawer} onClick={toggleDrawer} />
        </div>
        <div
          className={`${styles.buttonWrapper} ${openDrawer ? styles.open : ""}`}
        >
          <HeaderButton
            isActive={activeElement === "drafting-triangle"}
            onClick={() => handleElement("drafting-triangle")}
          >
            {t("about")}
          </HeaderButton>
          <HeaderButton
            isActive={activeElement === "monitor"}
            onClick={() => handleElement("monitor")}
          >
            {t("technologies")}
          </HeaderButton>
          <HeaderButton
            isActive={activeElement === "cup"}
            onClick={() => handleElement("cup")}
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
