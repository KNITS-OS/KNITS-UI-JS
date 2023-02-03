import { TwoMouseEventActionButtons } from "components/widgets/react-table";

export const employeesTableColumns = ({ onDetailsButtonClick, onRemoveButtonClick }) => {
  return [
    {
      accessor: "id",
      Header: "id",
    },
    {
      accessor: "firstName",
      Header: "First Name",
    },
    {
      accessor: "lastName",
      Header: "Last Name",
    },
    {
      accessor: "jobTitle.name",
      Header: "Job Title",
    },
    {
      accessor: "businessUnit.name",
      Header: "Business Unit",
    },
    {
      accessor: "office.country",
      Header: "country",
    },
    {
      accessor: "startDate",
      Header: "Hire Date",
    },
    TwoMouseEventActionButtons({ onDetailsButtonClick, onRemoveButtonClick }),
  ];
};
