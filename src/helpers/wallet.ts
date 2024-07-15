import { useFormik } from "formik";
import { useUrls } from "./useUrls";
import { TOKEN } from "@/utils/token";
import axiosInstance from "./axiosConfig";
import { useMutation } from "@tanstack/react-query";
import useLocalStorage from "@/hooks/useLocalStorage";
import { ICreateWalletUpdate } from "@/interface/wallet";
import { IErrorResponseType } from "@/interface/common/error";
import { createWalletValidationSchema } from "@/schema/walletschema/validation";

export const useCreateWalletForm = () => {
  const { createWalletUrl } = useUrls();
  const [userDetails] = useLocalStorage<ICreateWalletUpdate>(TOKEN.EMAIL);
  const { mutate, isPending, isSuccess, isError, error } = useMutation({
    mutationKey: ["create wallet"],
    mutationFn: (payload: Partial<any>) => {
      return axiosInstance.post(createWalletUrl, payload);
    },
  });

  const formik = useFormik({
    initialValues: {
      firstname: userDetails?.firstname || "",
      lastname: userDetails?.lastname || "",
      email: userDetails?.email || "",
      // phone_number: userDetails?.phone_number,
      mobilenumber:""
    } as ICreateWalletUpdate,
    validationSchema: createWalletValidationSchema,
    onSubmit: async ({bvn,dateOfBirth,mobilenumber,...values}) => {
      try {
        await formik.validateForm();
        mutate(values, {
        onSuccess: (res) => {
            console.log(res.data);
          },
              onError: (res: any) => {
                console.log(res)
              },
        });
        formik.handleReset
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
