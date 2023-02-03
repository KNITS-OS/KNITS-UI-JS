// https://typeofnan.dev/setup-a-typescript-react-redux-project/
export function typedAction(type, payload) {
  return { type, payload };
}

export const AppActionType = {
  SEARCH_EMPLOYEE: "SEARCH_EMPLOYEE",
  SEARCH_EMPLOYEES: "SEARCH_EMPLOYEES",
  CREATE_EMPLOYEE: "CREATE_EMPLOYEE",
  UPDATE_EMPLOYEE: "UPDATE_EMPLOYEE",
  DELETE_EMPLOYEE: "DELETE_EMPLOYEE",
};

Object.freeze(AppActionType);
