import * as Yup from "yup";

export const electricBillValidationSchema = Yup.object({
  metrenumber: Yup.number().required("Required"),
  state: Yup.string().required("Required"),
  metretype: Yup.number().required("Required"),
  amount: Yup.number()
});
