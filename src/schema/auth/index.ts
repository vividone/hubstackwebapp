import * as Yup from "yup";

export const LoginSchema = Yup.object().shape({
  email: Yup.string().required("Email is required").trim().lowercase(),
  password: Yup.string().required("Password is required").trim(),
});

export const LoginSchemaPhone = Yup.object().shape({
  email: Yup.string().required("Email is required").trim(),
  password: Yup.string().required("Password is required").trim(),
});

export const SignupSchemaIndividual = Yup.object().shape({
  firstname: Yup.string().required("Fullname is required"),
  lastname: Yup.string().required("Fullname is required"),
  username: Yup.string().required("Phone number is required"),
  email: Yup.string()
    .required("Email is required")
    .trim()
    .lowercase()
    .matches(/^\w{3,}@\w{2,}\.\w{2,}/i),
  phone_number: Yup.string().required("Phone number is required"),
  role: Yup.string().optional(),
  password: Yup.string()
    .required("Password is required")
    .min(6, "Password must not be less 6 characters")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?])(?=.*\d).+$/, // not written by me yet
      "Password requires uppercase, lowercase, digit, and special character."
    )
});

export const SignupSchemaAgent = Yup.object().shape({
  firstname: Yup.string().required("First Name is required"),
  lastname: Yup.string().required("Last Name is required"),
  email: Yup.string()
    .required("Email is required")
    .trim()
    .lowercase()
    .matches(/^\w{3,}@\w{2,}\.\w{2,}/i),
  phonenumber: Yup.string().required("Phone number is required"),
  business_name: Yup.string().required("Business name is required"),
  role: Yup.string().optional(),
  location: Yup.string().required("Location is required"),
  region: Yup.string().required("Region is required"),
  password: Yup.string()
    .required("Password is required")
    .min(6, "Password must not be less 6 characters")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?])(?=.*\d).+$/, // not written by me yet
      "Password requires uppercase, lowercase, digit, and special character."
    )
});


export const SignupSchemaSuperAgent = Yup.object().shape({
  firstname: Yup.string().required("Fullname is required"),
  lastname: Yup.string().required("Fullname is required"),
  email: Yup.string()
    .required("Email is required")
    .trim()
    .lowercase()
    .matches(/^\w{3,}@\w{2,}\.\w{2,}/i),
  phoneNumber: Yup.string().required("Phone number is required"),
  companyName: Yup.string().required("Business name is required"),
  location: Yup.string().required("Location is required"),
  password: Yup.string()
    .required("Password is required")
    .min(6, "Password must not be less 6 characters")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?])(?=.*\d).+$/, // not written by me yet
      "Password requires uppercase, lowercase, digit, and special character."
    )
});

export const VerifyLoginSchema = Yup.object().shape({
  otp: Yup.string().optional().trim(),
});

export const ResetPasswordSchema = Yup.object().shape({
  email: Yup.string()
    .required("Email is required")
    .trim()
    .lowercase()
    .matches(/^\w{3,}@\w{2,}\.\w{2,}/i),
});

export const SetPasswordSchema = Yup.object().shape({
  newPassword: Yup.string().required().trim(),
  confirmNewPassword: Yup.string()
    .oneOf([Yup.ref("newPassword")], "Passwords must match")
    .required(""),
});