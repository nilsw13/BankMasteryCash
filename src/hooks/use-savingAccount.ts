import api from "@/api/axios";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { ReactNode } from "react";

interface SavingAccount {
  id: string;
  name: string;
  amount: number;
  rate: number;
  iconRef?: ReactNode;
}

export interface SavingAccountDto {
  name: string;
  amount: number;
  rate: number;
}

export const useSavingAccount = () => {
  const queryClient = useQueryClient();

  const getAccounts = async (): Promise<SavingAccount[]> => {
    const response = await api.get("/v1/savings");
    return response.data;
  };

  const addSavingAccount = async (
    savingDto: SavingAccountDto,
  ): Promise<SavingAccountDto> => {
    try {
      const response = await api.post("/v1/add-saving", savingDto);
      return response.data;
    } catch (error) {
      console.log("Error while adding saving account", error);
      throw error;
    }
  };

  const mutation = useMutation({
    mutationFn: addSavingAccount,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["savings"],
      });
    },
  });

  const newSavincAccount = (savingDto: SavingAccountDto) => {
    return mutation.mutate(savingDto);
  };

  const {
    data: savings = [],
    isLoading,
    error,
  } = useQuery({
    queryKey: ["savings"],
    queryFn: getAccounts,
  });

  return {
    savings,
    isLoading,
    error,
    newSavincAccount,
    isSavingAdding: mutation.isPending,
    savingAddingError: mutation.isError,
  };
};
