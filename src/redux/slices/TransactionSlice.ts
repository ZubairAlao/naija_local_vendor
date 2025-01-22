import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { supabase } from '../../services/supabaseClient';

export const fetchTransactions = createAsyncThunk(
  'transactions/fetchTransactions',
  async (userId) => {
    const { data, error } = await supabase
      .from('transactions')
      .select('*')
      .or(`vendor_id.eq.${userId},customer_id.eq.${userId}`);
    if (error) throw error;
    return data;
  }
);

const transactionsSlice = createSlice({
  name: 'transactions',
  initialState: { transactions: [], loading: false },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTransactions.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchTransactions.fulfilled, (state, action) => {
        state.transactions = action.payload;
        state.loading = false;
      })
      .addCase(fetchTransactions.rejected, (state) => {
        state.loading = false;
      });
  },
});

export default transactionsSlice.reducer;
