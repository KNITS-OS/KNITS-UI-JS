import { cloneElement } from "react";

export const TableUtilitiesWrapper = ({ children, selectedFlatRows, toggleAllRowsSelected }) => {
  const selectedEntities = selectedFlatRows.map(row => row.original);
  return (
    <>{cloneElement(children, { selectedFlatRows: selectedEntities, toggleAllRowsSelected })}</>
  );
};
