import * as Yup from "yup";

export const electricBillValidationSchema = Yup.object({
  service: Yup.string().required("Required"),
  biller: Yup.string().required("Required"),
  billerId: Yup.string().required("Required"),
  paymentCode: Yup.string().required("Required"),
  paymentMode: Yup.string().required("Required"),
  customerId:Yup.string().required("Required"),
  amount: Yup.string().required("Required"),
  category: Yup.string().required("Required")
});
