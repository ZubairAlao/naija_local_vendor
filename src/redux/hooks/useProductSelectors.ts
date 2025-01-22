import { useSelector } from 'react-redux';
import { RootState } from '../store';

export const useProductSelectors = () => {
  const products = useSelector((state: RootState) => state.products.products);
  const loading = useSelector((state: RootState) => state.products.loading);
  const error = useSelector((state: RootState) => state.products.error);

  return { products, loading, error };
};
