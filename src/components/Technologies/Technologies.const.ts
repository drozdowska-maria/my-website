import JavaScriptIcon from "./Icons/JavaScriptIcon";
import NextjsIcon from "./Icons/NextjsIcon";
import ReactIcon from "./Icons/ReactIcon";
import ReactNativeIcon from "./Icons/ReactNativeIcon";
import TypeScriptIcon from "./Icons/TypeScriptIcon";
import { TechnologiesIconProps } from "./Icons/Icons.types";

export const technologiesData = [
  {
    activeBg: "var(--javascript-bg)",
    Icon: JavaScriptIcon,
    title: "javascript",
  },
  { activeBg: "var(--react-bg)", Icon: ReactIcon, title: "react" },
  { activeBg: "var(--nextjs-bg)", Icon: NextjsIcon, title: "nextjs" },
  { activeBg: "var(--react-bg)", Icon: ReactNativeIcon, title: "reactNative" },
  {
    activeBg: "var(--typescript-bg)",
    Icon: TypeScriptIcon,
    title: "typescript",
  },
];

export interface TechnologiesItemType {
  activeBg: string;
  title: string;
  Icon: (props: TechnologiesIconProps) => JSX.Element;
}
