import { useSelector } from 'react-redux';
import { RootState } from '../store';

export const useTransactionSelectors = () => {
  const transactions = useSelector((state: RootState) => state.transactions.transactions);
  const loading = useSelector((state: RootState) => state.transactions.loading);
  const error = useSelector((state: RootState) => state.transactions.error);

  return { transactions, loading, error };
};
