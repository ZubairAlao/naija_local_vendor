import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

// Step 1: Define the TypeScript type for the slice's state
export interface CounterState {
  value: number;
  status: 'idle' | 'loading' | 'failed'; // Tracks the async operation state
}

// Step 2: Define the initial state
const initialState: CounterState = {
  value: 0,
  status: 'idle', // Default status is 'idle'
};

// Step 3: Create the slice
const counterSlice = createSlice({
  name: "counter",
  initialState, // Initial state that the counter will start with
  reducers: {
    // Synchronous reducers for updating the counter state
    addition: (state) => {
      state.value += 1;
    },
    subtraction: (state) => {
      state.value -= 1;
    },
    multiplyByNumber: (state, action: PayloadAction<number>) => {
      state.value *= action.payload;
    },
  },
  // Step 4: Handle async operations in `extraReducers`
  extraReducers: (builder) => {
    builder
      .addCase(divideByAsync.pending, (state) => {
        state.status = 'loading'; // Set status to 'loading' when the async action starts
      })
      .addCase(divideByAsync.fulfilled, (state, action: PayloadAction<number>) => {
        state.status = 'idle'; // Reset status to 'idle' on success
        state.value /= action.payload; // Update the value
      })
      .addCase(divideByAsync.rejected, (state, action) => {
        state.status = 'failed'; // Set status to 'failed' on error
        console.error(action.payload || "Something went wrong");
      });
  },
});

// Step 5: Define the async thunk for performing async operations
export const divideByAsync = createAsyncThunk(
  "counter/divideBy",
  async (amount: number, { rejectWithValue }) => {
    try {
      // Simulate a delay to mimic async behavior
      await new Promise((resolve) => setTimeout(resolve, 1000));

      if (amount === 0) {
        // Simulate an error
        throw new Error("Cannot divide by zero!");
      }

      return amount;
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);

// Step 6: Export synchronous reducers' actions for use in components
export const { addition, subtraction, multiplyByNumber } = counterSlice.actions;

// Step 7: Export the slice reducer for store configuration
export default counterSlice.reducer;
