import * as Yup from "yup";

export const createWalletValidationSchema = Yup.object({
  firstname: Yup.string().required("Required"),
  lastname: Yup.string().required("Required"),
  email: Yup.string().email("Invalid email address").required("Email is required"),
  mobilenumber: Yup.string()
    .matches(/^\d+$/, "Invalid phone number")
    .required("Phone number is required"),
  bvn: Yup.string()
    .length(11, "Please input a vlid BVN")
    .matches(/^\d+$/, "Please input a valid BVN")
    .required("BVN is required"),
  existingAccountNumber: Yup.string().required("Account number is required")
    .length(10, "Please input a valid account number"),
  existingBankName: Yup.string().required("Bank name is required"),
});

export const fundWalletValidationSchema = Yup.object({
  email: Yup.string().email("Invalid email address").required("Email is required"),
  amount: Yup.string().required("Please input a valid amount").min(2, "Please input a valid amount"),
  paymentMode: Yup.string().optional(),
});