import { AppActionType } from "redux/app/utils/types.actions";


const initialState = {
  entities: [],
  entity: {},
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
    
    case AppActionType.SEARCH_EMPLOYEE_LOADING:
    case AppActionType.SEARCH_EMPLOYEES_LOADING:
    case AppActionType.CREATE_EMPLOYEE_LOADING:
    case AppActionType.UPDATE_EMPLOYEE_LOADING:
    case AppActionType.DELETE_EMPLOYEE_LOADING:
      return {
        isLoading: true,
        isSuccess: false,
        error: {},       
        entities,
        entity,
      };

    case AppActionType.SEARCH_EMPLOYEE_ERROR:
    case AppActionType.SEARCH_EMPLOYEES_ERROR:
    case AppActionType.CREATE_EMPLOYEE_ERROR:
    case AppActionType.UPDATE_EMPLOYEE_ERROR:
    case AppActionType.DELETE_EMPLOYEE_ERROR:
      return {
        isLoading: false,
        isSuccess: false,
        error: payload,
        entities,      
        entity,
      };

    case AppActionType.CREATE_EMPLOYEE_COMPLETE:
      return {
        isLoading: false,
        isSuccess: true,
        error: {},
        entities: [...employeeState.entities, payload],
        entity: payload,    
      };

    case AppActionType.SEARCH_EMPLOYEE_COMPLETE:
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

    case AppActionType.SEARCH_EMPLOYEES_COMPLETE:
      return {
        isLoading: false,
        isSuccess: true,
        error: {},
        entities: payload,
        entity,
      };

    case AppActionType.UPDATE_EMPLOYEE_COMPLETE:
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

    case AppActionType.DELETE_EMPLOYEE_COMPLETE:
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