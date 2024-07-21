import { IErrorResponseType } from "@/interface/common/error";
import { useFormik } from "formik";
import axiosInstance from "./axiosConfig";
import { useMutation, useQuery } from "@tanstack/react-query";
import useLocalStorage from "@/hooks/useLocalStorage";
import { TOKEN } from "@/utils/token";
import { electricBillValidationSchema } from "@/schema/servicesschema/electricBill";
import { IElectricBill } from "@/interface/services";
export const useElectricBll = ( ) => {
  const [ , setUserWallet] = useLocalStorage(""); // to persist
  const [ userDetails, ] = useLocalStorage<any>(TOKEN.EMAIL);
  const { mutate, isPending, isSuccess, isError, error } = useMutation({ mutationKey: ["Create wallet"],
      mutationFn: (payload: Partial<IElectricBill>) => {
          return axiosInstance.post("", payload)
      },
  })    
  
  const formik = useFormik({
      initialValues: {
          metrenumber: "",
          state: "",
          metretype:"",
          amount: "",
      } as IElectricBill,
      validateOnBlur: false,
      validationSchema: electricBillValidationSchema,
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