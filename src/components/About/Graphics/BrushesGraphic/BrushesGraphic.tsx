import { AboutGraphicProps } from "../types";
import styles from "./BrushesGraphic.module.css";

const BrushesGraphic = ({ mode }: AboutGraphicProps) => {
  return (
    <svg
      width="235"
      height="81"
      viewBox="0 0 235 81"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g
        className={`${styles.brush} ${
          mode === "black-and-white" ? "" : styles.brush1Animated
        }`}
      >
        <rect
          x="33.069"
          y="55.0539"
          width="10.7563"
          height="9.79424"
          transform="rotate(89.1377 33.069 55.0539)"
          className={`${styles.base} ${styles.metal}`}
        />
        <rect
          x="24.6786"
          y="52.2027"
          width="16.3196"
          height="23.287"
          transform="rotate(88.7597 24.6786 52.2027)"
          className={`${styles.base} ${styles.brushTip}`}
        />
        <path d="M2.74747 58.5813L14.8875 58.2881" className={styles.base} />
        <path
          d="M228.516 63.3855C222.011 63.8534 31.5865 63.8805 31.5865 63.8805L31.5696 57.1341C31.5696 57.1341 220.595 55.8429 228.499 56.6391C236.403 57.4354 235.021 62.9176 228.516 63.3855Z"
          className={`${styles.base} ${
            mode === "black-and-white"
              ? styles.brushHandGrey
              : styles.brush1HandColor
          }`}
        />
      </g>
      <g
        className={`${styles.brush} ${
          mode === "black-and-white" ? "" : styles.brush2Animated
        }`}
      >
        <rect
          x="185.521"
          y="22.5802"
          width="9.72025"
          height="7.93354"
          transform="rotate(-91.4198 185.521 22.5802)"
          className={`${styles.base} ${styles.metal}`}
        />
        <path
          d="M191.956 13.9844L204.15 1.17143C206.305 4.0546 207.997 6.64745 209.21 9.08868C211.383 13.4649 212.016 17.3539 211.015 21.5547C210.172 25.0961 208.167 28.859 204.946 33.3223L192.133 21.1291L191.956 13.9844Z"
          className={`${styles.base} ${styles.brushTip}`}
        />
        <path
          d="M209.21 9.08868C207.997 6.64745 206.305 4.0546 204.15 1.17143L191.956 13.9844L192.133 21.1291L204.946 33.3223C208.167 28.859 210.172 25.0961 211.015 21.5547C212.016 17.3539 211.383 13.4649 209.21 9.08868ZM209.21 9.08868L202.629 11.9327"
          className={styles.base}
        />
        <path
          d="M30.2649 15.8196C35.4072 15.297 186.078 13.9975 186.078 13.9975L186.158 20.9058C186.158 20.9058 36.6075 23.4905 30.3457 22.7279C24.0839 21.9653 25.1225 16.3422 30.2649 15.8196Z"
          className={`${styles.base} ${
            mode === "black-and-white"
              ? styles.brushHandGrey
              : styles.brush2HandColor
          }`}
        />
      </g>
    </svg>
  );
};

export default BrushesGraphic;
