import { useTranslation } from "react-i18next";
import styles from "./ButtonIcon.module.css";

export const LinkedinButtonIcon = () => {
  const { t } = useTranslation();

  return (
    <a
      className={styles.link}
      aria-label={t("linkedin")}
      href="https://www.linkedin.com/in/drozdowska-maria/"
      target="_blank"
    >
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clip-path="url(#clip0_43_270)">
          <path
            d="M23.75 13.869L23.75 23.75L19.262 23.75L19.262 15.601C19.262 14.2878 18.8693 13.2987 18.2522 12.6418C17.6354 11.9853 16.8113 11.6793 15.9896 11.7054C14.3359 11.7578 12.733 13.1428 12.733 15.601L12.733 23.75L8.264 23.75L8.264 8.25L12.732 8.25L12.732 10.155L13.2019 10.2738C14.1852 8.45423 16.8162 7.43312 19.2347 7.84876C20.4326 8.05466 21.5574 8.61163 22.3829 9.58092C23.2072 10.5488 23.75 11.9478 23.75 13.869ZM4.73 3.5C4.73 4.74483 3.73004 5.75 2.5 5.75C1.26996 5.75 0.27 4.74483 0.27 3.5C0.27 2.25611 1.27003 1.25 2.5 1.25C3.72997 1.25 4.73 2.25611 4.73 3.5ZM0.25 23.75L0.25 8.25L4.75 8.25L4.75 23.75L0.25 23.75Z"
            className={styles.icon}
          />
        </g>
        <defs>
          <clipPath id="clip0_43_270">
            <rect width="24" height="24" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </a>
  );
};
