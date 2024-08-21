import * as Yup from "yup";

export const BillValidationSchema = Yup.object().shape({
  service: Yup.string().required("Service is required"),
  biller: Yup.string().required("Required"),
  billerId: Yup.string().required("Required"),
  paymentCode: Yup.string().required("Required"),
  paymentMode: Yup.string().required("Required"),
  customerId:Yup.string().required("Smartcard number is required"),
  amount: Yup.string().required("Amount is required").min(2, "Amount is too low"),
  category: Yup.string().required("Required")
});
