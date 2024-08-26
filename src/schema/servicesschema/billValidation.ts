import * as Yup from "yup";

const BillValidationSchema = Yup.object().shape({
  service: Yup.string().required("Service is required"),
  biller: Yup.string().required("Required"),
  billerId: Yup.string().required("Required"),
  paymentCode: Yup.string().required("Required"),
  paymentMode: Yup.string().required("Required"),
  amount: Yup.string().required("Amount is required").min(2, "Amount is too low"),
  category: Yup.string().required("Required")
});

export const BillValidationwithPhoneSchema = BillValidationSchema.shape({
  customerId:Yup.string().required(" is required")
  .length(10, " should be 10 digits"),
})

export const BillValidationwithMeterSchema = BillValidationSchema.shape({
  customerId:Yup.string().required(" is required")
  .length(11, " should be 11 digits"),
})