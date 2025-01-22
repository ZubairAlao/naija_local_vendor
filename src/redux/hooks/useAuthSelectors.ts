import { useSelector } from 'react-redux';
import { RootState } from '../store';

export const useAuthSelectors = () => {
  const isAuthenticated = useSelector((state: RootState) => state.auth.isAuthenticated);
  const user = useSelector((state: RootState) => state.auth.user);

  return { isAuthenticated, user };
};
