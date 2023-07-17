import { GithubButtonIcon } from "./ButtonIcons/GithubButtonIcon";
import { LinkedinButtonIcon } from "./ButtonIcons/LinkedinButtonIcon";
import { MailButtonIcon } from "./ButtonIcons/MailButtonIcon";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.iconsWrapper}>
        <GithubButtonIcon />
        <MailButtonIcon />
        <LinkedinButtonIcon />
      </div>
      <p>Copyright © 2023, Maria Drozdowska, All rights reserved </p>
    </div>
  );
};

export default Footer;
