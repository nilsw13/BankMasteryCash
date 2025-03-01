import api from "@/api/axios"
import { useQuery } from "@tanstack/react-query";


interface Transansaction {
    id : string, 
    customer: string, 
    reference : string,
    amount : number,  
    paymentMethod : string,
    date: string 

}

export const useTransaction = () => {

     const getTransactions = async (): Promise<Transansaction[]> => {
        const response = await api.get<Transansaction[]>("v1/transactions")
        return await response.data;
    }
    
    
    const {data: transactions = [], isLoading, error} = useQuery({
        queryKey: ['transactions'],
        queryFn: getTransactions,
        
        
      });

      return {
        transactions, 
        isLoading,
        error
      }

}



