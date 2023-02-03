import { Input } from "reactstrap";

export const GlobalFilter = ({ filter, setFilter }) => {
  return (
    <Input
      className="react-table-search"
      placeholder="Search"
      value={filter || ""}
      onChange={e => setFilter(e.target.value)}
    />
  );
};
