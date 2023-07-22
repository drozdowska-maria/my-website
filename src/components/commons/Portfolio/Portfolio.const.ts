import sea from "../../../assets/images/sea.png";
import japan from "../../../assets/images/japan.png";
import volitality from "../../../assets/images/volitality.png";
import blowballFlowers from "../../../assets/images/blowball_flowers.png";
import floatingIslands from "../../../assets/images/floating_islands.png";
import birds from "../../../assets/images/birds.png";
import waterfall from "../../../assets/images/waterfall.png";
import tristanAndIsolde from "../../../assets/images/tristan_and_isolde.png";
import astronaut from "../../../assets/images/astronaut.png";
import tuscany from "../../../assets/images/tuscany.png";

export const portfolioData = [
  {
    title: "sea",
    img: sea,
    width: 568,
    height: 400,
    createdAt: "2023",
    id: "portfolio-1",
  },
  {
    title: "japan",
    img: japan,
    width: 486,
    height: 408,
    createdAt: "2022",
    id: "portfolio-2",
  },
  {
    title: "volitality",
    img: volitality,
    width: 204,
    height: 408,
    createdAt: "2022",
    id: "portfolio-3",
  },
  {
    title: "blowball_flowers",
    img: blowballFlowers,
    width: 402,
    height: 408,
    createdAt: "2022",
    id: "portfolio-4",
  },
  {
    title: "floating_islands",
    img: floatingIslands,
    width: 494,
    height: 410,
    createdAt: "2021",
    id: "portfolio-5",
  },
  {
    title: "waterfall",
    img: waterfall,
    width: 194,
    height: 406,
    createdAt: "2021",
    id: "portfolio-6",
  },
  {
    title: "tristan_and_isolde",
    img: tristanAndIsolde,
    width: 278,
    height: 398,
    createdAt: "2020",
    id: "portfolio-7",
  },
  {
    title: "astronaut",
    img: astronaut,
    width: 284,
    height: 400,
    createdAt: "2020",
    id: "portfolio-8",
  },
  {
    title: "tuscany",
    img: tuscany,
    width: 280,
    height: 400,
    createdAt: "2020",
    id: "portfolio-9",
  },
  {
    title: "birds",
    img: birds,
    width: 288,
    height: 408,
    createdAt: "2020",
    id: "portfolio-10",
  },
];

export interface PortfolioItemType {
  title: string;
  img: string;
  width: number;
  height: number;
  createdAt: string;
}
