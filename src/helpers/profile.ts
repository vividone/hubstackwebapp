import { IErrorResponseType } from "@/interface/common/error";
import { useFormik } from "formik";
import axiosInstance from "./axiosConfig";
import { useMutation } from "@tanstack/react-query";
import useLocalStorage from "@/hooks/useLocalStorage";
import { useUrls } from "./useUrls";
import { TOKEN } from "@/utils/token";
import { updatePasswordSchema, updateProfileSchema } from "@/schema/profile/updateProfile";
import { IUpdateProfile, IUpdateProfilePassword } from "@/interface/profile";

// Update User Details
export const useProfileUpdate = ( userId: string, type: string ) => {
    const { updateAgentProfileUrl, updateIndividualProfileUrl } = useUrls();
    const [ userDetails, setUserDetails] = useLocalStorage<IUpdateProfile>(TOKEN.EMAIL); // to persist
    const { mutate, isPending, isSuccess, isError, error } = useMutation({ mutationKey: ["Update profile"],
        mutationFn: (payload: Partial<any>) => {
            return axiosInstance.put((type === "Agent" ? updateAgentProfileUrl : updateIndividualProfileUrl)+ "/" + userId, payload)
        },
    })    
    
    const formik = useFormik({
        initialValues: {
        firstname: userDetails?.firstname,
        lastname: userDetails?.lastname,
        username: userDetails?.username,
        } as IUpdateProfile,
        validateOnBlur: false,
        validationSchema: updateProfileSchema,
        validateOnChange: false,
        onSubmit: async ({ confirmPassword, ...values }) => {
        try {
            await formik.validateForm();
            mutate(values, {
            onSuccess: (res) => {
                setUserDetails(res.data.user);
            },
            //   onError: (res: any) => {
    
            //   },
            });
            formik.handleReset;
        } catch (error: any) {
            throw new Error(error);
        }
        },
    });
    const typedError = error as IErrorResponseType;
    const errorString = Array.isArray(typedError?.response?.data?.message)
        ? typedError?.response?.data?.message[0]
        : typedError?.response?.data?.message || "";
    return { formik, isPending, isSuccess, isError, error: errorString };
};




// Update User Details
export const useProfilePasswordUpdate = ( userId: string, type: string ) => {
    const { updateAgentProfileUrl, updateIndividualProfileUrl } = useUrls();
    const [ userDetails, setUserDetails] = useLocalStorage<IUpdateProfilePassword>(TOKEN.EMAIL); // to persist
    const { mutate, isPending, isSuccess, isError, error } = useMutation({ mutationKey: ["Update profile password"],
        mutationFn: (payload: Partial<any>) => {
            return axiosInstance.put((type === "Agent" ? updateAgentProfileUrl : updateIndividualProfileUrl)+ "/" + userId, payload)
        },
    })    
    
    const formik = useFormik({
        initialValues: {
        firstname: userDetails?.firstname,
        lastname: userDetails?.lastname,
        username: userDetails?.username,
        password: "",
        confirmPassword: ""
        } as IUpdateProfilePassword,
        validateOnBlur: false,
        validationSchema: updatePasswordSchema,
        validateOnChange: false,
        onSubmit: async ({ confirmPassword, ...values }) => {
        try {
            await formik.validateForm();
            mutate(values, {
            onSuccess: (res) => {
                setUserDetails(res.data.user);
            },
            //   onError: (res: any) => {
    
            //   },
            });
            formik.handleReset;
        } catch (error: any) {
            throw new Error(error);
        }
        },
    });
    const typedError = error as IErrorResponseType;
    const errorString = Array.isArray(typedError?.response?.data?.message)
        ? typedError?.response?.data?.message[0]
        : typedError?.response?.data?.message || "";
    return { formik, isPending, isSuccess, isError, error: errorString };
};

