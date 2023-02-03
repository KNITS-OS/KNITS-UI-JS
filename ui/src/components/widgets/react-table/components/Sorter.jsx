import { MdArrowDownward, MdArrowUpward } from "react-icons/md";

export const Sorter = ({ column }) => {
  return (
    <span className="react-table-sorting">
      {column.isSorted ? column.isSortedDesc ? <MdArrowDownward /> : <MdArrowUpward /> : <></>}
    </span>
  );
};
