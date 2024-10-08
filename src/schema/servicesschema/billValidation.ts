import * as Yup from "yup";

const BillValidationSchema = Yup.object().shape({
  service: Yup.string().required("Please select a service"),
  biller: Yup.string().required("Please select a biller"),
  billerId: Yup.string().required("Biller Id is required"),
  paymentCode: Yup.string().optional(),
  paymentMode: Yup.string().required("Required"),
  amount: Yup.string().required("Amount is required").min(2, "Please input valid amount"),
  category: Yup.string().required("Required")
});

export const BillValidationwithPhoneSchema = BillValidationSchema.shape({
  customerId:Yup.string().required("Please input valid ")
  .length(11, "Please input valid "),
})

export const BillValidationwithMeterSchema = BillValidationSchema.shape({
  customerId:Yup.string().required("Please input valid ")
  .length(10, "Please input valid "),
})

export const AirtimePaymentSchema = Yup.object().shape({
  network_id: Yup.string().required("Please select a service"),
  amount: Yup.string().required("Amount is required").min(2, "Please input valid amount"),
  phone: Yup.string().required("Please input valid ")
  .length(11, "Please input valid "),
});