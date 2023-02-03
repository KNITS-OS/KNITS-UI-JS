import { faker } from "@faker-js/faker";

import { randomAddress } from "./addresses-mocks";
import { randomCustomerType } from "./customerTypes-mocks";
import { randomEmail } from "./emails-mocks";
import { randomPhone } from "./phones-mocks";
import { randomWebsite } from "./websites-mocks";

const customers = [];
const howManyCustomers = 2000;

const createCustomers = () => {
  //howMany
  const customersData = [];

  for (let i = 0; i < 10; i++) {
    const firstName = faker.name.firstName();
    const lastName = faker.name.lastName();
    customersData.push({
      id: i + 1,
      name: firstName + " " + lastName,
      website: randomWebsite(),
      address: randomAddress(),
      phone: randomPhone(),
      email: randomEmail(),
      customer_type: randomCustomerType(),
    });
  }

  return customersData;
};

export const mockCustomers = () => {
  if (customers.length == 0) {
    const calculatedCustomers = createCustomers(howManyCustomers);
    customers.push(...calculatedCustomers);
  }
  return customers;
};
