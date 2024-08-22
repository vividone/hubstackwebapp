import * as Yup from "yup";

export const BillValidationSchema = Yup.object().shape({
  service: Yup.string().required("Service is required"),
  biller: Yup.string().required("Required"),
  billerId: Yup.string().required("Required"),
  paymentCode: Yup.string().required("Required"),
  paymentMode: Yup.string().required("Required"),
  customerId:Yup.string().required(" is required")
  .min(10, " should not be less than 10 numbers")
  .max(11, " should not be more than 11 numbers"),
  amount: Yup.string().required("Amount is required").min(2, "Amount is too low"),
  category: Yup.string().required("Required")
});
