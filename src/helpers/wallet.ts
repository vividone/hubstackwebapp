import { useFormik } from "formik";
import axiosInstance from "./axiosConfig";
import { useMutation } from "@tanstack/react-query";
import useLocalStorage from "@/hooks/useLocalStorage";
import { useUrls } from "./useUrls";
import { TOKEN } from "@/utils/token";
import { ICreateWalletUpdate } from "@/interface/wallet";
import { createWalletValidationSchema } from "@/schema/walletschema/validation";

// Create a wallet
export const useCreateWallet = () => {
  const { createWalletUrl } = useUrls();
  const [, setUserWallet] = useLocalStorage(TOKEN.WALLET); // to persist
  const [userDetails] = useLocalStorage<any>(TOKEN.EMAIL);
  const { mutate, isSuccess, isError, error } = useMutation({
    mutationKey: ["Create wallet"],
    mutationFn: async (payload: Partial<ICreateWalletUpdate>) => {
      payload.mobilenumber = String(payload.mobilenumber); // Ensure mobilenumber is a string
      return axiosInstance.post(createWalletUrl, payload);
    },
  });

  const formik = useFormik({
    initialValues: {
      firstname: userDetails?.firstname,
      lastname: userDetails?.lastname,
      email: userDetails?.email,
      mobilenumber: "11111111111",
      BVN: "",
      dateOfBirth: "",
    } as ICreateWalletUpdate,
    validateOnBlur: false,
    validationSchema: createWalletValidationSchema,
    validateOnChange: false,
    onSubmit: async (values) => {
      try {
        await formik.validateForm();
        mutate(values, {
          onSuccess: (res) => {
            setUserWallet(res.data.user);
          },
          onError: (res: any) => {
            console.log(res);
          },
        });
        formik.handleReset;
      } catch (error: any) {
        throw new Error(error);
      }
    },
  });

  const typedError = error as any;
  const errorString = Array.isArray(typedError?.response?.data?.message)
    ? typedError?.response?.data?.message[0]
    : typedError?.response?.data?.message || "";

  return { formik, isSuccess, isError, error: errorString };
};
