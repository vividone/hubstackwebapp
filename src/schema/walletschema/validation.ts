import * as Yup from "yup";

export const createWalletValidationSchema = Yup.object({
  firstname: Yup.string().required("Required"),
  lastname: Yup.string().required("Required"),
  email: Yup.string().email("Invalid email address").required("Required"),
  mobilenumber: Yup.string()
    .matches(/^\d+$/, "Invalid phone number")
    .required("Required"),
  BVN: Yup.string()
    .length(11, "BVN must be exactly 11 digits")
    .matches(/^\d+$/, "Invalid BVN")
    .required("Required"),
  dateOfBirth: Yup.date().required("Required"),
});
