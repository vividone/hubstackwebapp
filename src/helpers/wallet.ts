import { IErrorResponseType } from "@/interface/common/error";
import { useFormik } from "formik";
import axiosInstance from "./axiosConfig";
import { useMutation, useQuery } from "@tanstack/react-query";
import useLocalStorage from "@/hooks/useLocalStorage";
import { useUrls } from "./useUrls";
import { TOKEN } from "@/utils/token";
import { HistoryType, ICreateWalletUpdate } from "@/interface/wallet";
import { createWalletValidationSchema } from "@/schema/walletschema/validation";
import { useRouter } from "next/navigation";
import { useState } from "react";

// Create a wallet
export const useCreateWallet = ( ) => {
    const { createWalletUrl } = useUrls();
    const router = useRouter()
    const [ , setUserWallet] = useLocalStorage(TOKEN.WALLET); // to persist
    const [ userDetails, ] = useLocalStorage<any>(TOKEN.EMAIL);
    const [ , setHasWallet] = useLocalStorage<any>(TOKEN.HASWALLET)
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
            bvn: "",
            existingAccountNumber: "",
            existingBankName: "",
        } as ICreateWalletUpdate,
        validateOnBlur: false,
        validationSchema: createWalletValidationSchema,
        validateOnChange: false,
        onSubmit: async ({ existingAccountNumber, ...values }) => {
        try {
            await formik.validateForm();
            mutate(values, {
            onSuccess: (res) => {
                setUserWallet(res.data);
                setHasWallet(true)
                router.refresh()
                
            },
              onError: (res: any) => {
              },
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

export const useGetSubAccounts = () => {
  const { getAllWallets } = useUrls();

  const queryKey = ["Get sub accounts"]; // Unique key for the query

  const { data, isLoading, isError, error } = useQuery({ queryKey, queryFn: async () => {
    const response = await axiosInstance.get(getAllWallets);
    const responseData = response.data;
    console.log(responseData)
    return responseData;
  }});
  
  const allWallets = data || [];
  return {
    allWallets,
    isLoading,
    isError,
    error
  };
};

export const useGetWallet = () => {
  const { getUserWallet } = useUrls();

  const queryKey = ["Get user wallet"]; // Unique key for the query

  const { data, isLoading, isError, error } = useQuery({ queryKey, queryFn: async () => {
    const response = await axiosInstance.get(getUserWallet);
    const responseData = response.data;
    return responseData;
  }});
  
  const userWallet = data || [];
  return {
    userWallet,
    isLoading,
    isError,
    error
  };
};

export const useGetAccountBalance = () => {
    const { getWalletBalance } = useUrls();
  
    const queryKey = ["Get wallet balance"]; // Unique key for the query
  
    const { data, isLoading, isError, error } = useQuery({ queryKey, queryFn: async () => {
      const response = await axiosInstance.get(getWalletBalance);
      const responseData = response.data;
      console.log(responseData)
      return responseData;
    }});

    const walletBalance = data || {};

    return {
      walletBalance,
      isLoading,
      isError,
      error
    };
  };

export const useGetAllBanks = () => {
  const { getAllBanks } = useUrls();

  const queryKey = ["Get all banks"]; // Unique key for the query

  const { data, isLoading, isError, error } = useQuery({ queryKey, queryFn: async () => {
    const response = await axiosInstance.get(getAllBanks);
    const responseData = response.data;
    console.log(responseData)
    return responseData;
  }});

  const allBanks = data || {};

  return {
    allBanks,
    isLoading,
    isError,
    error
  };
};


export const useFundWallet = ( ) => {
  const { fundWallet } = useUrls();
  const [data, setData] = useState({ _id: 0, amount: 0 })
  const [ userDetails, ] = useLocalStorage<any>(TOKEN.EMAIL);
  const { mutate, isPending, isSuccess, isError, error } = useMutation({ mutationKey: ["Fund wallet"],
      mutationFn: (payload: Partial<any>) => {
          return axiosInstance.post(fundWallet, payload)
      },
  })    
  const formik = useFormik({
      initialValues: {
          email: userDetails?.email,
          amount: "",
          paymentMode: "account transfer",
          userId: userDetails?._id,
      } as any,
      validateOnBlur: false,
      validateOnChange: false,
      onSubmit: async ({...values }) => {
      try {
          await formik.validateForm();
          mutate(values, {
          onSuccess: (res) => {
              setData(res.data);              
          },
            onError: (res: any) => {
            },
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



export const useVerifyFund = ( ) => {
  const [data, setData] = useState({ amount: 0 })
  const { verifyFunding } = useUrls();
  const [ userDetails, ] = useLocalStorage<any>(TOKEN.EMAIL);
  const { mutate, isPending, isSuccess, isError, error } = useMutation({ mutationKey: ["Verify Fund"],
      mutationFn: (payload: Partial<any>) => {
          return axiosInstance.post(verifyFunding, payload)
      },
  })    
  
  const formik = useFormik({
      initialValues: {
          transactionId: "",
          userId: userDetails?._id,
      } as any,
      validateOnBlur: false,
      validateOnChange: false,
      onSubmit: async ({...values }) => {
      try {
          await formik.validateForm();
          mutate(values, {
          onSuccess: (res) => {
              setData(res.data);              
          },
            onError: (res: any) => {
            },
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


export const useGetWalletHistory = () => {
  const { getWalletHistory } = useUrls();

  const queryKey = ["Get all wallet history"]; // Unique key for the query

  const { data, isLoading, isError, error } = useQuery({ queryKey, queryFn: async () => {
    const response = await axiosInstance.get(getWalletHistory);
    const responseData = response.data;
    return responseData;
  }});

  const history: HistoryType[] = data?.map((item: any) => ({ id: item._id, updatedAt: item.updatedAt, amount: item.amount, transactionStatus: item.transactionStatus })) || [];

  return {
    history,
    isLoading,
    isError,
    error
  };
};