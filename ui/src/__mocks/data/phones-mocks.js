import { randomIntFromInterval } from "./common";

export const phonesData = [
  {
    id: 1,
    phone: "635 322 4749",
  },
  {
    id: 2,
    phone: "532 335 8413",
  },
  {
    id: 3,
    phone: "449 616 2932",
  },
  {
    id: 4,
    phone: "708 765 2656",
  },
  {
    id: 5,
    phone: "974 651 8412",
  },
  {
    id: 6,
    phone: "603 358 2245",
  },
  {
    id: 7,
    phone: "550 278 5200",
  },
  {
    id: 8,
    phone: "326 579 9292",
  },
  {
    id: 9,
    phone: "491 520 7954",
  },
  {
    id: 10,
    phone: "486 736 8806",
  },
  {
    id: 11,
    phone: "131 317 0825",
  },
  {
    id: 12,
    phone: "872 579 3002",
  },
  {
    id: 13,
    phone: "535 746 1413",
  },
  {
    id: 14,
    phone: "374 234 0820",
  },
  {
    id: 15,
    phone: "274 310 9420",
  },
  {
    id: 16,
    phone: "453 975 8469",
  },
  {
    id: 17,
    phone: "540 462 7276",
  },
  {
    id: 18,
    phone: "359 685 5180",
  },
  {
    id: 19,
    phone: "950 895 4821",
  },
  {
    id: 20,
    phone: "653 287 3036",
  },
  {
    id: 21,
    phone: "804 894 9150",
  },
  {
    id: 22,
    phone: "145 461 9291",
  },
  {
    id: 23,
    phone: "376 984 8070",
  },
  {
    id: 24,
    phone: "760 345 3811",
  },
  {
    id: 25,
    phone: "384 154 7060",
  },
  {
    id: 26,
    phone: "539 542 9151",
  },
  {
    id: 27,
    phone: "131 895 9671",
  },
  {
    id: 28,
    phone: "123 732 9558",
  },
  {
    id: 29,
    phone: "791 374 9607",
  },
  {
    id: 30,
    phone: "743 884 6144",
  },
  {
    id: 31,
    phone: "714 727 3047",
  },
  {
    id: 32,
    phone: "634 584 2981",
  },
  {
    id: 33,
    phone: "695 149 0348",
  },
  {
    id: 34,
    phone: "711 753 6741",
  },
  {
    id: 35,
    phone: "866 264 5409",
  },
  {
    id: 36,
    phone: "562 805 5558",
  },
  {
    id: 37,
    phone: "335 542 2299",
  },
  {
    id: 38,
    phone: "777 437 8339",
  },
  {
    id: 39,
    phone: "506 184 8970",
  },
  {
    id: 40,
    phone: "219 638 1196",
  },
  {
    id: 41,
    phone: "196 749 1633",
  },
  {
    id: 42,
    phone: "813 616 1745",
  },
  {
    id: 43,
    phone: "509 258 8734",
  },
  {
    id: 44,
    phone: "676 971 7098",
  },
  {
    id: 45,
    phone: "200 893 6111",
  },
  {
    id: 46,
    phone: "983 547 5659",
  },
  {
    id: 47,
    phone: "313 147 9760",
  },
  {
    id: 48,
    phone: "762 956 8710",
  },
  {
    id: 49,
    phone: "971 577 6729",
  },
  {
    id: 50,
    phone: "123 487 7038",
  },
];
export const randomPhone = () => {
  return phonesData[randomIntFromInterval(0, 49)];
};
