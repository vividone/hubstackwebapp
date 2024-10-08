'use client'
import { useState } from "react";
import { IErrorResponseType } from "@/interface/common/error";
import { useFormik } from "formik";
import axiosInstance from "../axiosConfig";
import { useMutation } from "@tanstack/react-query";
import useLocalStorage from "@/hooks/useLocalStorage";
import { TOKEN } from "@/utils/token";
import { BillValidationwithMeterSchema, BillValidationwithPhoneSchema } from "@/schema/servicesschema/billValidation";
import { IBillData, ICompleteBill, IServicesData } from "@/interface/services";
import { useUrls } from "../useUrls";


export const usePayBill = ( type: string ) => {
  const [ userDetails, ] = useLocalStorage<any>(TOKEN.EMAIL);
  const [data, setData] = useState<any>()
  const { payBillUrl } = useUrls();
  const { mutate, isPending, isSuccess, isError, error } = useMutation({ mutationKey: ["Pay" + type],
      mutationFn: (payload: Partial<IBillData>) => {
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
      } as IBillData,
      validateOnBlur: true,
      validationSchema: type === "buy-airtime" || type === "buy-data" || type === "electricity" || type === "internet" ? BillValidationwithPhoneSchema : BillValidationwithMeterSchema,
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


export const useCompleteBillPayment:any = ( id: string, type: string ) => {
    const [ userDetails, ] = useLocalStorage<any>(TOKEN.EMAIL);
    const [data, setData] = useState<IServicesData>()
    const { payBillUrl } = useUrls();
    const { mutate, isPending, isSuccess, isError, error } = useMutation({ mutationKey: [`complete ${type} pay bill`],
        mutationFn: (payload: Partial<ICompleteBill>) => {
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
            amount: +""
        } as ICompleteBill,
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
  
  
// export const useBuyAirtime = ( ) => {
//     const [data, setData] = useState<any>()
//     const { mutate, isPending, isSuccess, isError, error } = useMutation({ mutationKey: ["Pay airtime"],
//         mutationFn: (payload: Partial<any>) => {
//             return axiosInstance.post(`${process.env.NEXT_SMEPLUG_URL}/airtime/purchase`, payload)
//         },
//     })    
    
//     const formik = useFormik({
//         initialValues: {
//             network_id: "",
//             phone: "",
//             amount: +"",
//         } as {
//             network_id: string
//             phone: string,
//             amount: number,
//         },
//         validateOnBlur: true,
//         validationSchema: AirtimePaymentSchema,
//         validateOnChange: true,
//         onSubmit: async ({ ...values }) => {
//         try {
//             await formik.validateForm();
//             mutate(values, {
//             onSuccess: (res) => {
//               setData(res.data);
//             },
//             //   onError: (res: any) => {
    
//             //   },
//             });
//             formik.handleReset;
//         } catch (error: any) {
//             throw new Error(error);
//         }
//         },
//     });
//     const typedError = error as IErrorResponseType;
//     const errorString = Array.isArray(typedError?.response?.data?.message)
//         ? typedError?.response?.data?.message[0]
//         : typedError?.response?.data?.message || "";
//     return { data, formik, isPending, isSuccess, isError, error: errorString };
//   };
  
//   export const useGetNetworks = () => {
  
//     const queryKey = ["Get all networks"]; // Unique key for the query
  
//     const { data, isLoading, isError, error } = useQuery({ queryKey, queryFn: async () => {
//       const response = await axios.get(`/api/networks`, {
//         headers: {
//             "Authorization": `Bearer ${getAuthorizationHeader()}`
//         }
//       });
//       return response;
//     }});
  
//     const networks = data || [];
  
//     return {
//       networks,
//       isLoading,
//       isError,
//       error
//     };
//   };