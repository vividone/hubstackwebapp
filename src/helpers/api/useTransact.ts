import { useQuery } from "@tanstack/react-query";
import { useUrls } from "../useUrls";
import axiosInstance from "../axiosConfig";

export const useGetTransactionHistory = (type: string) => {
    const { getTransactionsHistory } = useUrls();
  
    const queryKey = ["Get all "+ type +" history"]; // Unique key for the query
  
    const { data, isLoading, isError, error } = useQuery({ queryKey, queryFn: async () => {
      const response = await axiosInstance.get(getTransactionsHistory + "/" + type);
      const responseData = response.data;
      return responseData;
    }});
  
    const history = data || [];
  
    return {
      history,
      isLoading,
      isError,
      error
    };
  };