import { faker } from "@faker-js/faker";

const contracts = [];
const howManyContracts = 2000;

const createContracts = howMany => {
  const contractsData = [];

  for (let i = 0; i < howMany; i++) {
    const title = faker.name.jobTitle();
    const description = faker.commerce.productDescription();
    contractsData.push({
      id: i + 1,
      title,
      description,
      contentFiles: [],
    });
  }

  return contractsData;
};

export const mockContracts = () => {
  if (contracts.length == 0) {
    const calculatedContracts = createContracts(howManyContracts);
    contracts.push(...calculatedContracts);
  }
  return contracts;
};
