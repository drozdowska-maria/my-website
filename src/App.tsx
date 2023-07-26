import { useState } from "react";
import { AnimatePresence } from "framer-motion";

import { ActiveElementType } from "./components/CTAAnimation/types";
import Header from "./components/Header/Header";
import CTAAnimation from "./components/CTAAnimation/CTAAnimation";
import Technologies from "./components/Technologies/Technologies";
import About from "./components/About/About";
import Portfolio from "./components/Portfolio/Portfolio";
import Footer from "./components/Footer/Footer";
import styles from "./App.module.css";

function App() {
  const [activeElement, setActiveElement] = useState<ActiveElementType>("");

  return (
    <div className={styles.mainWrapper}>
      <Header
        activeElement={activeElement}
        setActiveElement={setActiveElement}
      />
      <div className={styles.svgWrapper}>
        <CTAAnimation
          setActiveElement={setActiveElement}
          activeElement={activeElement}
        />
      </div>
      <div
        className={`${styles.content} ${!!activeElement ? styles.active : ""}`}
      >
        <AnimatePresence mode="wait">
          {activeElement === "monitor" && <Technologies />}
          {activeElement === "drafting-triangle" && <About />}
          {activeElement === "cup" && <Portfolio />}
        </AnimatePresence>
      </div>
      <Footer />
    </div>
  );
}

export default App;
