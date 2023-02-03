import { TwoMouseEventActionButtons } from "components/widgets";

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
      accessor: "internationalName",
      Header: "Int Name",
    },
    {
      accessor: "title",
      Header: "Title",
    },
    {
      accessor: "businessUnit",
      Header: "bUnit",
    },
    {
      accessor: "companyCode",
      Header: "companyCode",
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
