import api from "@/api/axios";

import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";

export interface Transansaction {
  id: string;
  customer: string;
  reference: string;
  amount: number;
  paymentMethod: string;
  created_at: string;
  type: string;
}

export interface TransactionPostDto {
  amount: number;
  reference: string;
  customer: string;
  paymentMethod: string;
  type: string;
}

export const useTransaction = () => {
  const [activeFilter, setActiveFilter] = useState("");

  const queryClient = useQueryClient();

  const getTransactions = async (): Promise<Transansaction[]> => {
    try {
      const response = await api.get<Transansaction[]>("v1/transactions");
      console.log(response.data);
      return response.data;
    } catch (error) {
      console.log("Erreur lors de la recuperation de la transaction", error);
      throw error;
    }
  };

  const addTransaction = async (
    transactionDto: TransactionPostDto,
  ): Promise<Transansaction> => {
    try {
      const response = await api.post("v1/add-transaction", transactionDto);
      return response.data;
    } catch (error) {
      console.error("Erreur lors de l'ajout de transaction:", error);
      throw error;
    }
  };

  const mutation = useMutation({
    mutationFn: addTransaction,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["transactions"],
      });
    },
  });

  const addNewTransaction = (transactionDto: TransactionPostDto) => {
    return mutation.mutate(transactionDto);
  };

  const {
    data: transactions = [],
    isLoading,
    error,
    refetch,
  } = useQuery({
    queryKey: ["transactions", activeFilter],
    queryFn: getTransactions,
  });

  // ici on va gerer le filtrage des transactions grace aux toggles incom outcome both

  const filteredTransactions = activeFilter
    ? transactions.filter((transac) => transac.type === activeFilter)
    : transactions; // si on a un filtre activ alors on filtre les transaciton avec leur type en affichant que celle qui ont le type egal au filte actif sinon on affiche les transactions sans le filtre

  const filterTransaction = (filterType: string) => {
    setActiveFilter(filterType);
  };

  const resetFilter = () => {
    setActiveFilter("");
  };

  return {
    transactions: filteredTransactions,
    isLoading,
    error,
    activeFilter,
    refetch,
    filterTransaction,
    resetFilter,
    addNewTransaction,
    isAdding: mutation.isPending,
    addingError: mutation.isError,
  };
};
