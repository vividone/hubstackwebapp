import { useQuery } from "@tanstack/react-query";
import { useUrls } from "../useUrls";
import axiosInstance from "../axiosConfig";
import useLocalStorage from "@/hooks/useLocalStorage";
import { TOKEN } from "@/utils/token";

export const useGetTransactionHistory = (type: string) => {
    const { getTransactionsHistory } = useUrls();
    const [userDetails] = useLocalStorage<any>(TOKEN.EMAIL)
  
    const queryKey = ["Get all "+ type +" history"]; // Unique key for the query
  
    const { data, isLoading, isError, error } = useQuery({ queryKey, queryFn: async () => {
      const response = await axiosInstance.get(getTransactionsHistory + "all/" + type);
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