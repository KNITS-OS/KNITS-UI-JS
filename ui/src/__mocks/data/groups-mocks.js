import { faker } from "@faker-js/faker";

import { randomBusinessUnit } from "./business-units-mocks";

const groups = [];
const howManyGroups = 10;

const createGroups = howMany => {
  const groupsData = [];

  for (let i = 0; i < howMany; i++) {
    const description = faker.company.catchPhrase();
    const active = faker.datatype.boolean();

    groupsData.push({
      id: i + 1,
      name: randomBusinessUnit().name,
      description: description,
      active: active,
      members: [],
      memberIds: [],
    });
  }

  return groupsData;
};

export const mockGroups = () => {
  if (groups.length == 0) {
    const calculatedGroups = createGroups(howManyGroups);
    groups.push(...calculatedGroups);
  }
  return groups;
};
