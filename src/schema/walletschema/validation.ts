import * as Yup from "yup";

export const createWalletValidationSchema = Yup.object({
  firstname: Yup.string().required("Required"),
  lastname: Yup.string().required("Required"),
  email: Yup.string().email("Invalid email address").required("Email is required"),
  mobilenumber: Yup.string()
    .matches(/^\d+$/, "Invalid phone number")
    .required("Phone number is required"),
  bvn: Yup.string()
    .length(11, "BVN must be exactly 11 digits")
    .matches(/^\d+$/, "Please input a valid BVN")
    .required("BVN is required"),
  existingAccountNumber: Yup.string().required("Account number is required")
    .length(10, "Account number must be exactly 10 digits"),
  existingBankName: Yup.string().required("Bank name is required"),
});
