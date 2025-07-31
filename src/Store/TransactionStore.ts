import { create } from 'zustand';

interface TransactionState {
  Transactions:unknown,
  credits:number,

}

export const useTransactionStore = create<TransactionState>(() => ({
  credits: 100,
  Transactions: [],
}));