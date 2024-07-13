import { useFormik } from "formik";
import { useUrls } from "./useUrls";
import { TOKEN } from "@/utils/token";
import axiosInstance from "./axiosConfig";
import { useMutation } from "@tanstack/react-query";
import useLocalStorage from "@/hooks/useLocalStorage";
import { ICreateWalletUpdate } from "@/interface/wallet";
import { IErrorResponseType } from "@/interface/common/error";
import { createWalletValidationSchema } from "@/schema/walletschema/validation"

export const useCreateWalletForm = (userId: string, type: string) => {
    const { createWalletUrl } = useUrls();
    const [userDetails, setUserDetails] = useLocalStorage<ICreateWalletUpdate>(TOKEN.EMAIL); // to persist
    const { mutate, isPending, isSuccess, isError, error } = useMutation({
        mutationKey: ["Create wallet"],
        mutationFn: (payload: Partial<any>) => {
            return axiosInstance.post(createWalletUrl, payload)
        },
    })

    const formik = useFormik({
        initialValues: {
            firstname: userDetails?.firstname,
            lastname: userDetails?.lastname,
            email: userDetails?.email,
            phone_number: userDetails?.phone_number,
            bvn: "",
            dateOfBirth: "",
        } as ICreateWalletUpdate,
        validateOnBlur: false,
        validationSchema: createWalletValidationSchema,
        validateOnChange: false,
        onSubmit: async ({ bvn, dateOfBirth, ...values }) => {
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
