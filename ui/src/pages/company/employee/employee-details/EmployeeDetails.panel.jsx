import { EditEmployeesPanel } from "../common/EditEmployee.panel";

export const EmployeeDetailsPanel = ({ employee, onSave, navigateToPanel }) => {
  return (
    <>
      <EditEmployeesPanel
        employee={employee}
        onSave={onSave}
        title="Employee Details"
        navigateToPanel={navigateToPanel}
      />
    </>
  );
};
