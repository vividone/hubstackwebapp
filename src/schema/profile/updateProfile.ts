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
    oldPassword: Yup.string().required("Old password is required"),
    newPassword: Yup.string().required("New password is required")
        .required("Password is required")
        .min(6, "Password must not be less than 6 characters")
        .matches(
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?])(?=.*\d).+$/,
            "Password requires uppercase, lowercase, digit, and special character."
          ),
    confirmNewPassword: Yup.string()
      .oneOf([Yup.ref("newPassword")], "Passwords must match")
      .required(""),
})