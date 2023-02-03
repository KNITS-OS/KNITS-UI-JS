import { MdAttachFile } from "react-icons/md";

export const FileInput = ({ id, ...props }) => {
  return (
    <>
      <label id="fileUpload" className="attachment-button" htmlFor={id}>
        <MdAttachFile size={17} />
      </label>
      <input id={id} className="hidden" type="file" multiple {...props} />
    </>
  );
};
