import Swal from "sweetalert2";

const errorAlert = async (message, title) =>
  Swal.fire({
    icon: "error",
    title: title ? title : "Error",
    text: message,
  });

const successAlert = async (message, title) =>
  Swal.fire({
    icon: "success",
    title: title ? title : "Success",
    text: message,
  });

const warningAlert = async (message, title) =>
  Swal.fire({
    icon: "warning",
    title: title ? title : "Attention!",
    text: message,
  });

const confirmActionAlert = async (message, title) => {
  return Swal.fire({
    icon: "warning",
    title: title ? title : "Attention!",
    text: message,
    showCancelButton: true,
    confirmButtonText: "Yes",
    cancelButtonText: "No",
    reverseButtons: true,
  });
};

const confirmActionSuccess = (message, title) => {
  return Swal.fire({
    icon: "success",
    title: title ? title : "Success",
    text: message,
    showCancelButton: true,
    confirmButtonText: "Yes",
    cancelButtonText: "No",
    reverseButtons: true,
  });
};

const confirmActionDanger = (message, title) => {
  return Swal.fire({
    icon: "warning",
    title: title ? title : "Danger",
    text: message,
    showCancelButton: true,
    confirmButtonText: "Yes",
    cancelButtonText: "No",
    reverseButtons: true,
  });
};

const featureDisabledAlert = () => {
  warningAlert("Feature under development");
};

export const alerts = {
  errorAlert,
  successAlert,
  warningAlert,
  confirmActionAlert,
  featureDisabledAlert,
  confirmActionSuccess,
  confirmActionDanger,
};
