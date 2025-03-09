import api from "@/api/axios";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { ReactNode } from "react";
import { toast } from "sonner";

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
    try {
      const response = await api.get("/v1/savings");
      return response.data;
    } catch (error) {
      toast.error("Error while Fetching you saving accounts");
      throw error;
    }
  };

  const addSavingAccount = async (
    savingDto: SavingAccountDto,
  ): Promise<SavingAccountDto> => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 2000));

      const response = await api.post("/v1/add-saving", savingDto);
      toast.success("Saving account succesfully added");
      return response.data;
    } catch (error) {
      toast.error("Error while adding your saving account");
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
