import { randomIntFromInterval } from "./common";

export const addressesData = [
  {
    id: 1,
    address: "87944 Johnson Park",
  },
  {
    id: 2,
    address: "2 Old Gate Point",
  },
  {
    id: 3,
    address: "168 Esker Circle",
  },
  {
    id: 4,
    address: "60908 Pierstorff Trail",
  },
  {
    id: 5,
    address: "175 Buena Vista Terrace",
  },
  {
    id: 6,
    address: "11 Farwell Avenue",
  },
  {
    id: 7,
    address: "46773 Dunning Way",
  },
  {
    id: 8,
    address: "28671 Utah Drive",
  },
  {
    id: 9,
    address: "40 Victoria Place",
  },
  {
    id: 10,
    address: "4 Esker Court",
  },
  {
    id: 11,
    address: "21811 Elka Junction",
  },
  {
    id: 12,
    address: "2 Quincy Trail",
  },
  {
    id: 13,
    address: "35 Hoepker Avenue",
  },
  {
    id: 14,
    address: "29423 Kedzie Center",
  },
  {
    id: 15,
    address: "990 Trailsway Point",
  },
  {
    id: 16,
    address: "729 Kings Drive",
  },
  {
    id: 17,
    address: "5939 Claremont Park",
  },
  {
    id: 18,
    address: "1727 Westport Drive",
  },
  {
    id: 19,
    address: "23 Spenser Drive",
  },
  {
    id: 20,
    address: "1 Carberry Lane",
  },
  {
    id: 21,
    address: "24377 Jay Trail",
  },
  {
    id: 22,
    address: "44 Stang Terrace",
  },
  {
    id: 23,
    address: "03 Maryland Parkway",
  },
  {
    id: 24,
    address: "47377 Barby Park",
  },
  {
    id: 25,
    address: "92 Nelson Pass",
  },
  {
    id: 26,
    address: "5 Hazelcrest Point",
  },
  {
    id: 27,
    address: "156 Melrose Place",
  },
  {
    id: 28,
    address: "6857 Loftsgordon Street",
  },
  {
    id: 29,
    address: "0 Montana Hill",
  },
  {
    id: 30,
    address: "7450 Stone Corner Point",
  },
  {
    id: 31,
    address: "4 Fulton Circle",
  },
  {
    id: 32,
    address: "6 Coleman Drive",
  },
  {
    id: 33,
    address: "0757 Glendale Junction",
  },
  {
    id: 34,
    address: "160 Roth Trail",
  },
  {
    id: 35,
    address: "20101 3rd Trail",
  },
  {
    id: 36,
    address: "1 Grayhawk Alley",
  },
  {
    id: 37,
    address: "6289 Melby Hill",
  },
  {
    id: 38,
    address: "60 Crest Line Place",
  },
  {
    id: 39,
    address: "21494 Coolidge Lane",
  },
  {
    id: 40,
    address: "3647 Grim Parkway",
  },
  {
    id: 41,
    address: "84525 Scoville Place",
  },
  {
    id: 42,
    address: "5 Bobwhite Avenue",
  },
  {
    id: 43,
    address: "7 Thompson Hill",
  },
  {
    id: 44,
    address: "1 La Follette Junction",
  },
  {
    id: 45,
    address: "91 Debs Road",
  },
  {
    id: 46,
    address: "47 Morrow Road",
  },
  {
    id: 47,
    address: "72476 Marcy Road",
  },
  {
    id: 48,
    address: "0568 Spaight Lane",
  },
  {
    id: 49,
    address: "5564 Stoughton Junction",
  },
  {
    id: 50,
    address: "7 Dunning Center",
  },
];
export const randomAddress = () => {
  return addressesData[randomIntFromInterval(0, 49)];
};
