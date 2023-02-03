import { allAuthRoles } from "../utils";

import { EmployeeDetailsPage, EMPLOYEE_DETAILS, EMPLOYEE_SEARCH, SearchEmployeesPage } from ".";

export const userMenu = [
  {
    collapse: true,
    name: "Users",
    icon: "ni ni-single-02 text-primary",
    state: "usersCollapse",
    path: "UsersMenu",
    key: "UsersMenu",
    allowedRoles: [...allAuthRoles],
    views: [
      {
        path: EMPLOYEE_SEARCH,
        name: "Employees",
        miniName: "E",
        component: <SearchEmployeesPage />,
        layout: "/admin",
        key: "Users/Employees",
        allowedRoles: [...allAuthRoles],
      },
    ],
  },
  {
    collapse: false,
    global: true,
    path: `${EMPLOYEE_DETAILS}/:id`,
    component: <EmployeeDetailsPage />,
    layout: "/admin",
    name: `${EMPLOYEE_DETAILS}/:id`,
    key: `Users/${EMPLOYEE_DETAILS}/:id`,
    allowedRoles: [...allAuthRoles],
  },
];
