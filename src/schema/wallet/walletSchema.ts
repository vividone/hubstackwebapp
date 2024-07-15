import * as Yup from "yup";

export const createWalletSchema = Yup.object().shape({
    firstname: Yup.string().required("Firstname is required"),
    lastname: Yup.string().required("Lastname is required"),
    email: Yup.string().required("Email is required"),
    mobilenumber: Yup.string().required("Mobile number is required"),
    BVN: Yup.string().required("BVN is required"),
    dateOfBirth: Yup.string().required("Date of birth is required"),
})