import React, { useState } from "react";
import CTAAnimation from "./components/animations/CTAAnimation/CTAAnimation";
import { ActiveElementType } from "./components/animations/CTAAnimation/types";
import styles from "./App.module.css";
function App() {
  const [activeElement, setActiveElement] = useState<ActiveElementType>("");
  return (
    <div className={styles.container}>
      <div className={styles.svgWrapper}>
        <CTAAnimation
          setActiveElement={setActiveElement}
          activeElement={activeElement}
        />
      </div>
      <div className={styles.content}>
        <h1 className={styles.header}>
          {activeElement
            ? activeElement
            : "Kliknij w element i dowiedz się więcej"}
        </h1>

        {activeElement && (
          <button onClick={() => setActiveElement("")}>zamknij</button>
        )}
      </div>
    </div>
  );
}

export default App;
