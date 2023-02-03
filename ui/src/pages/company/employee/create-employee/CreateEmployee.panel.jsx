import { EditEmployeesPanel } from "../common/EditEmployee.panel";

export const CreateEmployeePanel = ({ onSaveNewEmployee, navigateToPanel }) => {
  let employee = {};

  return (
    <>
      <EditEmployeesPanel
        employee={employee}
        onSave={onSaveNewEmployee}
        title="Create New Employee"
        navigateToPanel={navigateToPanel}
      />
    </>
  );
};
