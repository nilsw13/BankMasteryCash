import api from "@/api/axios";
import { useQuery } from "@tanstack/react-query";
import { ReactNode } from "react";

 interface SavingAccount {
    id: string,
    name: string,
    amount: number,
    rate: number,
    iconRef?: ReactNode
}

export const useSavingAccount = () => {

    const getAccounts = async():Promise<SavingAccount[]> => {
        const response = await api.get("/v1/savings")
        return response.data;
    }

    const {data: savings = [], isLoading, error} = useQuery({
        queryKey: ["savings"],
        queryFn: getAccounts
    })

    return {
        savings, 
        isLoading, 
        error
    }


}