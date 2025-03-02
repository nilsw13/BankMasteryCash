import api from "@/api/axios"
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";


interface Transansaction {
    id : string, 
    customer: string, 
    reference : string,
    amount : number,  
    paymentMethod : string,
    date: string ,
    type: string

}

export const useTransaction = () => {

    const [activeFilter, setActiveFilter] = useState("");


     const getTransactions = async (): Promise<Transansaction[]> => {
        const response = await api.get<Transansaction[]>("v1/transactions")
        return  response.data;
    }


    
    
    const {data: transactions = [], isLoading, error, refetch } = useQuery({
        queryKey: ['transactions', activeFilter],
        queryFn: getTransactions,
        
        
      });

      // ici on va gerer le filtrage des transactions grace aux toggles incom outcome both

      const filteredTransactions = activeFilter
      ? transactions.filter(transac => transac.type === activeFilter)
      : transactions;  // si on a un filtre activ alors on filtre les transaciton avec leur type en affichant que celle qui ont le type egal au filte actif sinon on affiche les transactions sans le filtre

      const filterTransaction = (filterType : string) => { 
        setActiveFilter(filterType)
      }

      const resetFilter = () => {
        setActiveFilter("");
      }

      

      return {
        transactions : filteredTransactions, 
        isLoading,
        error,
        activeFilter,
        refetch,
        filterTransaction,
        resetFilter
      }

}



