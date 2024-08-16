'use client'
import { useState } from "react";
import { IErrorResponseType } from "@/interface/common/error";
import { useFormik } from "formik";
import axiosInstance from "./axiosConfig";
import { useMutation, useQuery } from "@tanstack/react-query";
import useLocalStorage from "@/hooks/useLocalStorage";
import { TOKEN } from "@/utils/token";
import { electricBillValidationSchema } from "@/schema/servicesschema/electricBill";
import { IElectricBill, IServicesData } from "@/interface/services";
import { useUrls } from "./useUrls";


export const usePayBill = ( type: string ) => {
  const [ userDetails, ] = useLocalStorage<any>(TOKEN.EMAIL);
  const [data, setData] = useState<IServicesData>()
  const { payBillUrl } = useUrls();
  const { mutate, isPending, isSuccess, isError, error } = useMutation({ mutationKey: ["Pay Electricity"],
      mutationFn: (payload: Partial<IElectricBill>) => {
          return axiosInstance.post(`${payBillUrl}/${userDetails._id}/pay-bill/${type}`, payload)
      },
  })    
  
  const formik = useFormik({
      initialValues: {
          service: "",
          biller: "",
          billerId: "",
          paymentCode: "",
          paymentMode: "",
          customerId: "",
          amount: +"",
          category: ""
      } as IElectricBill,
      validateOnBlur: false,
      validationSchema: electricBillValidationSchema,
      validateOnChange: false,
      onSubmit: async ({ ...values }) => {
      try {
          await formik.validateForm();
          mutate(values, {
          onSuccess: (res) => {
            setData(res.data);
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
  return { data, formik, isPending, isSuccess, isError, error: errorString };
};


export const useCompleteBillPayment = ( id: string, type: string ) => {
    const [ userDetails, ] = useLocalStorage<any>(TOKEN.EMAIL);
    const [data, setData] = useState<IServicesData>()
    const { payBillUrl } = useUrls();
    const { mutate, isPending, isSuccess, isError, error } = useMutation({ mutationKey: [`complete ${type} pay bill`],
        mutationFn: (payload: Partial<IElectricBill>) => {
            return axiosInstance.post(`${payBillUrl}/${id}/pay-bill/complete`, payload)
        },
    })    
    
    const formik = useFormik({
        initialValues: {
            paymentCode: "", 
            customerId: "", 
            customerEmail: userDetails?.email,
            customerMobile: userDetails?.phone_number || "07000000001",
            requestReference: "", 
            amount: ""
        } as any,
        validateOnBlur: false,
        validateOnChange: false,
        onSubmit: async ({ ...values }) => {
        try {
            await formik.validateForm();
            mutate(values, {
            onSuccess: (res) => {
              setData(res.data);
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
    return { data, formik, isPending, isSuccess, isError, error: errorString };
  };
  
  