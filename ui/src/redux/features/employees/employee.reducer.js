import { AppActionType } from "redux/app/utils/types.actions";

const initialState = {
  entities: [],
  entity: null,
  isLoading: false,
  isSuccess: false,
  error: {},
};

export const employeeReducer = (employeeState = initialState, action) => {
  const { type, payload } = action;
  const { entities, entity } = employeeState;

  let updatedEmployees = [];
  let employeesToKeep = [];

  switch (type) {
    case AppActionType.SEARCH_EMPLOYEES:
      return {
        isLoading: false,
        isSuccess: true,
        error: {},
        entities: payload,
        entity: null,
      };

    case AppActionType.SEARCH_EMPLOYEE:
      // eslint-disable-next-line no-case-declarations
      const foundEmployee = employeeState.entities.find(
        ({ id }) => id !== payload
      );

      return {
        isLoading: false,
        isSuccess: true,
        error: {},
        entities,
        entity: foundEmployee ? foundEmployee : null,
      };

    case AppActionType.CREATE_EMPLOYEE:
      return {
        isLoading: false,
        isSuccess: true,
        error: {},
        entities: [...employeeState.entities, payload],
        entity: payload,
      };

    case AppActionType.UPDATE_EMPLOYEE:
      updatedEmployees = employeeState.entities.map((employee) => {
        if (employee.id === payload.id) {
          return {
            ...employee,
            ...payload,
          };
        }
        return employee;
      });

      return {
        isLoading: false,
        isSuccess: true,
        error: {},
        entities: updatedEmployees,
        entity: payload,
      };

    case AppActionType.DELETE_EMPLOYEE:
      employeesToKeep = employeeState.entities.filter(
        ({ id }) => id !== payload
      );

      return {
        isLoading: false,
        isSuccess: true,
        error: {},
        entities: employeesToKeep,
        entity,
      };

    default:
      return employeeState;
  }
};
