import * as Yup from "yup";

export const LoginSchema = Yup.object().shape({
  username: Yup.string().required("Email is required").trim().lowercase(),
  password: Yup.string().required("Password is required").trim(),
});

export const LoginSchemaPhone = Yup.object().shape({
  username: Yup.string().required("Email is required").trim(),
  password: Yup.string().required("Password is required").trim(),
});

export const SignupSchemaIndividual = Yup.object().shape({
  phoneNumber: Yup.string().required("Phone number is required"),
  email: Yup.string()
    .required("Email is required")
    .trim()
    .lowercase()
    .matches(/^\w{3,}@\w{2,}\.\w{2,}/i),
  companyName: Yup.string().required("Company name is required"),
  password: Yup.string()
    .required("Password is required")
    .min(6, "Password must not be less 6 characters")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?])(?=.*\d).+$/, // not written by me yet
      "Password requires uppercase, lowercase, digit, and special character."
    ),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password")], "Passwords must match")
    .required(""),
});

export const SignupSchemaAgent = Yup.object().shape({
  phoneNumber: Yup.string().required("Phone number is required"),
  email: Yup.string()
    .required("Email is required")
    .trim()
    .lowercase()
    .matches(/^\w{3,}@\w{2,}\.\w{2,}/i),
  companyName: Yup.string().required("Company name is required"),
  password: Yup.string()
    .required("Password is required")
    .min(6, "Password must not be less 6 characters")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?])(?=.*\d).+$/, // not written by me yet
      "Password requires uppercase, lowercase, digit, and special character."
    ),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password")], "Passwords must match")
    .required(""),
});
