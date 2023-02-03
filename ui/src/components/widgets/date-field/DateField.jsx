import moment from "moment";
import ReactDatetime from "react-datetime";

import { FormGroup } from "reactstrap";

import { DATE_FILTER_FORMAT } from "variables/app.consts";

export const DateField = ({ id, label, value, setValue, ...props }) => {
  return (
    <FormGroup>
      <label className="form-control-label" htmlFor={id}>
        {label}
      </label>
      <ReactDatetime
        {...props}
        timeFormat={false}
        dateFormat={DATE_FILTER_FORMAT}
        closeOnSelect
        value={value ? moment(value).format(DATE_FILTER_FORMAT) : ""}
        renderInput={props => {
          return <input {...props} value={value ? moment(value).format(DATE_FILTER_FORMAT) : ""} />;
        }}
        onChange={dateAsMoment => {
          setValue(moment(dateAsMoment));
        }}
      />
    </FormGroup>
  );
};
