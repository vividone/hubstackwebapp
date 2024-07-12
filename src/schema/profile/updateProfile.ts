import * as Yup from "yup";


export const updateProfileSchema = Yup.object().shape({
    firstname: Yup.string().required("Fullname is required"),
    lastname: Yup.string().required("Fullname is required"),
    username: Yup.string().required("Username is required"),
    phonenumber: Yup.string().optional(),
    superagent_username: Yup.string().optional(),
    business_name: Yup.string().optional(),
    role: Yup.string().optional(),
    location: Yup.string().optional(),
})

export const updatePasswordSchema = Yup.object({
    firstname: Yup.string().required("Firstname is required"),
    lastname: Yup.string().required("Lastname is required"),
    username: Yup.string().required("Username is required"),
    password: Yup.string().required("Password is required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password")], "Passwords must match")
      .required(""),
})