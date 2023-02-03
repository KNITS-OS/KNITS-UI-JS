import { randomIntFromInterval } from "./common";

export const customerTypesData = [
  {
    id: 1,
    customer_type: "Electrical",
  },
  {
    id: 2,
    customer_type: "Long Distance Moving",
  },
  {
    id: 3,
    customer_type: "Mail",
  },
  {
    id: 4,
    customer_type: "Appliances",
  },
  {
    id: 5,
    customer_type: "Consumer electronics",
  },
];
export function randomCustomerType() {
  return customerTypesData[randomIntFromInterval(0, 4)];
}
