import { useQuery } from "@tanstack/react-query";
import axiosInstance from "./axiosConfig";
import { useUrls } from "./useUrls";

export const useGetBillPayments = () => {
    const { getBillPaymentsUrl } = useUrls();
  
    const queryKey = ["Get bill payments"]; // Unique key for the query
  
    const { data, isLoading, isError, error } = useQuery({ queryKey, queryFn: async () => {
      const response = await axiosInstance.get(getBillPaymentsUrl);
      const responseData = response.data;
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

  export const useGetBillersByCategoryId = (catId: string) => {
    const { getBillersByCategoryUrl } = useUrls();
  
    const queryKey = ["Get billers by categoriyId"]; // Unique key for the query
  
    const { data, isLoading, isError, error } = useQuery({ queryKey, queryFn: async () => {
      const response = await axiosInstance.get(getBillersByCategoryUrl + "/" + catId);
      const responseData = response.data;
      return responseData;
    }});

    const billers = data || {};

    return {
      billers,
      isLoading,
      isError,
      error
    };
};