import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { supabase } from '../../services/supabaseClient';

export const fetchMessages = createAsyncThunk(
  'messages/fetchMessages',
  async ({ senderId, receiverId }) => {
    const { data, error } = await supabase
      .from('messages')
      .select('*')
      .or(`sender_id.eq.${senderId},receiver_id.eq.${receiverId}`);
    if (error) throw error;
    return data;
  }
);

const messagesSlice = createSlice({
  name: 'messages',
  initialState: { messages: [], loading: false },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchMessages.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchMessages.fulfilled, (state, action) => {
        state.messages = action.payload;
        state.loading = false;
      })
      .addCase(fetchMessages.rejected, (state) => {
        state.loading = false;
      });
  },
});

export default messagesSlice.reducer;
