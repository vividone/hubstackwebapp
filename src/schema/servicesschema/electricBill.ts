import * as Yup from "yup";

export const electricBillValidationSchema = Yup.object({
  service: Yup.string().required("Service is required"),
  biller: Yup.string().required("Required"),
  billerId: Yup.string().required("Required"),
  paymentCode: Yup.string().required("Required"),
  paymentMode: Yup.string().required("Required"),
  customerId:Yup.string().required("Smartcard number is required"),
  amount: Yup.string().required("Amount is required").min(1, "Amount is too low"),
  category: Yup.string().required("Required")
});
