import { AnimatePresence } from "framer-motion";
import JavaScriptIcon from "./Icons/JavaScriptIcon";
import NextjsIcon from "./Icons/NextjsIcon";
import ReactIcon from "./Icons/ReactIcon";
import ReactNativeIcon from "./Icons/ReactNativeIcon";
import TypeScriptIcon from "./Icons/TypeScriptIcon";
import TechnologiesItem from "./TechnologiesItem/TechnologiesItem";

const technologiesData = [
  { activeBg: "#F0DB4F", Icon: JavaScriptIcon, id: "javascript" },
  { activeBg: "#292929", Icon: ReactIcon, id: "react" },
  { activeBg: "#FFFFFF", Icon: NextjsIcon, id: "nextjs" },
  { activeBg: "#292929", Icon: ReactNativeIcon, id: "react-native" },
  { activeBg: "#007ACC", Icon: TypeScriptIcon, id: "typescript" },
];

const Technologies = () => {
  return (
    <>
      {technologiesData.map((technology, index) => (
        <TechnologiesItem
          key={technology.id}
          activeBg={technology.activeBg}
          Icon={technology.Icon}
          index={index}
        />
      ))}
    </>
  );
};

export default Technologies;
