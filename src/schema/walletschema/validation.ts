import * as Yup from "yup";

export const validationSchema = Yup.object({
  firstName: Yup.string().required("Required"),
  lastName: Yup.string().required("Required"),
  email: Yup.string().email("Invalid email address").required("Required"),
  phoneNumber: Yup.string()
    .matches(/^\d+$/, "Invalid phone number")
    .required("Required"),
  bvn: Yup.string()
    .length(11, "BVN must be exactly 11 digits")
    .matches(/^\d+$/, "Invalid BVN")
    .required("Required"),
  dateOfBirth: Yup.date().required("Required"),
  homeAddress: Yup.string().required("Required"),
  terms: Yup.bool()
    .oneOf([true], "You must accept the terms and conditions")
    .required("Required"),
});
