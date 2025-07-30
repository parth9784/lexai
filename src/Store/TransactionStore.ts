import { create } from 'zustand';

interface TransactionState {
  Transactions:any,
  credits:number,

}

export const useTransactionStore = create<TransactionState>((set) => ({
  credits: 100,
  Transactions: [],
}));