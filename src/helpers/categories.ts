import { useQuery } from "@tanstack/react-query";
import axiosInstance from "./axiosConfig";
import { useUrls } from "./useUrls";

export const useGetBillPayments = () => {
    const { getBillPaymentsUrl } = useUrls();
  
    const queryKey = ["Get wallet balance"]; // Unique key for the query
  
    const { data, isLoading, isError, error } = useQuery({ queryKey, queryFn: async () => {
      const response = await axiosInstance.get(getBillPaymentsUrl);
      const responseData = response.data;
      console.log(responseData)
      return responseData;
    }});

    const billPayments = data || {};

    return {
      billPayments,
      isLoading,
      isError,
      error
    };
  };