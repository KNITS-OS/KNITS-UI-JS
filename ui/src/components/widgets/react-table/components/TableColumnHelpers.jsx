import { Button } from "reactstrap";

export const TwoMouseEventActionButtons = ({ onDetailsButtonClick, onRemoveButtonClick }) => {
  return {
    accessor: "action",
    Header: "",
    Cell: ({ row }) => {
      const item = row.original;
      if (!item.id) return <></>;

      const id = item.id.toString();
      return (
        <div className="table-action-button-group">
          <Button
            id={id}
            className="btn-icon m-1"
            type="button"
            color="info"
            onClick={onDetailsButtonClick}
          >
            <span id={id} className="btn-inner--icon">
              <i id={id} className="ni ni-badge" />
            </span>
          </Button>

          <Button
            id={id}
            className="btn-icon m-1"
            color="danger"
            type="button"
            onClick={onRemoveButtonClick}
          >
            <span id={id} className="btn-inner--icon">
              <i id={id} className="ni ni-fat-remove" />
            </span>
          </Button>
        </div>
      );
    },
  };
};
