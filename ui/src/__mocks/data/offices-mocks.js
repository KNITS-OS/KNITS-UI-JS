import { faker } from "@faker-js/faker";

import { randomIntFromInterval } from "./common";
import { countries } from "./countries-mocks";

const officeData = [];
const howManyOffices = 30;

const createOffices = howMany => {
  const officeMockData = [];

  for (let i = 0; i < howMany; i++) {
    const country = countries()[i];
    officeMockData.push({
      id: i + 1,
      countryId: country.id,
      countryIso2: country.iso2,
      city: faker.address.cityName(),
      street: faker.address.streetAddress(),
      country: country.name,
      postalCode: faker.address.zipCodeByState(country.iso2),
    });
  }
  return officeMockData;
};

export const offices = () => {
  if (officeData.length === 0) {
    const calculatedOffices = createOffices(howManyOffices);
    officeData.push(...calculatedOffices);
  }
  return officeData;
};

export const randomOffice = () => {
  if (officeData.length === 0) {
    offices();
  }
  return officeData[randomIntFromInterval(0, officeData.length)];
};
