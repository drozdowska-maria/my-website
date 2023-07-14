import React, { useState } from "react";
import CTAAnimation from "./components/animations/CTAAnimation/CTAAnimation";
import { ActiveElementType } from "./components/animations/CTAAnimation/types";

function App() {
  const [activeElement, setActiveElement] = useState<ActiveElementType>("");
  return (
    <div>
      <h1>Hello world</h1>
      <CTAAnimation setActiveElement={setActiveElement} />
      {activeElement}
    </div>
  );
}

export default App;
