import { IErrorResponseType } from "@/interface/common/error";
import { useFormik } from "formik";
import axiosInstance from "./axiosConfig";
import { useMutation } from "@tanstack/react-query";
import useLocalStorage from "@/hooks/useLocalStorage";
import { useUrls } from "./useUrls";
import { TOKEN } from "@/utils/token";
import { ICreateWalletUpdate } from "@/interface/wallet";
import { createWalletValidationSchema } from "@/schema/walletschema/validation";

// Create a wallet
export const useCreateWallet = ( ) => {
    const { createWalletUrl } = useUrls();
    const [ , setUserWallet] = useLocalStorage(TOKEN.WALLET); // to persist
    const [ userDetails, ] = useLocalStorage<any>(TOKEN.EMAIL);
    const { mutate, isPending, isSuccess, isError, error } = useMutation({ mutationKey: ["Create wallet"],
        mutationFn: (payload: Partial<ICreateWalletUpdate>) => {
            return axiosInstance.post(createWalletUrl, payload)
        },
    })    
    
    const formik = useFormik({
        initialValues: {
            firstname: userDetails?.firstname,
            lastname: userDetails?.lastname,
            email: userDetails?.email,
            mobilenumber: "",
            BVN: "",
            dateOfBirth: "",
        } as ICreateWalletUpdate,
        validateOnBlur: false,
        validationSchema: createWalletValidationSchema,
        validateOnChange: false,
        onSubmit: async ({ ...values }) => {
        try {
            await formik.validateForm();
            mutate(values, {
            onSuccess: (res) => {
                setUserWallet(res.data.user);
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