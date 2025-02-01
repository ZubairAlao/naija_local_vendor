import type { Action, ThunkAction } from '@reduxjs/toolkit'
import { configureStore } from '@reduxjs/toolkit'

// 1. create store first and its typescript
// 2. create slice and it typescript
// 3. import slice inform of <nameofcreatedslice>Reducer you created into store reducer
// 4. add the import to the reducer 

// export const store = configureStore({
//   reducer: {
//     auth: authReducer,
//     products: productsReducer,
//     transactions: transactionsReducer,
//   },
// })

export const store = configureStore({
  reducer: {
  
  },
})

// Infer the type of `store`
export type AppStore = typeof store

export type RootState = ReturnType<AppStore['getState']>

// Infer the `AppDispatch` type from the store itself
export type AppDispatch = AppStore['dispatch']

// Define a reusable type describing thunk functions
export type AppThunk<ThunkReturnType = void> = ThunkAction<
  ThunkReturnType,
  RootState,
  unknown,
  Action
>