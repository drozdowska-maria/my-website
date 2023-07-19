import { useState } from "react";
import CTAAnimation from "./components/animations/CTAAnimation/CTAAnimation";
import { ActiveElementType } from "./components/animations/CTAAnimation/types";
import styles from "./App.module.css";
import Header from "./components/commons/Header/Header";
import Footer from "./components/commons/Footer/Footer";
import Technologies from "./components/commons/Technologies/Technologies";
import { AnimatePresence } from "framer-motion";
import About from "./components/commons/About/About";

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
        </AnimatePresence>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
