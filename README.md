# Local Vendor Marketplace App

This app connects small-scale vendors (e.g., local food sellers, artisans, and retailers) with customers in their vicinity. It focuses on showcasing their products or services with real-time availability.

---

## Key Features

1. **User Roles with Supabase**:  
   - Two user types: **Vendors** (to list products/services) and **Customers** (to browse and order).  
   - Vendors can create and manage listings, while customers can view and search listings.

2. **Product/Service Listings**:  
   - Vendors can add products/services with details like name, price, description, and availability.  
   - Customers can filter by category, location, or price range.

3. **Real-Time Availability**:  
   - Vendors can mark products as available or out of stock.  
   - Customers see real-time updates when availability changes using Supabase’s real-time feature.

4. **Geo-Location Filtering**:  
   - Use location-based filtering to show vendors within a customer’s area (e.g., Lagos Mainland or Victoria Island).  

5. **Authentication**:  
   - Email/password login for both vendors and customers.  
   - Social authentication (e.g., Google, Facebook) for quick sign-ups.

6. **Redux RTK State Management**:  
   - Manage the app’s state for user authentication, product listings, and filters.  
   - Use `createAsyncThunk` for asynchronous actions like fetching product data or submitting orders.

7. **Order Management** (Optional Advanced Feature):  
   - Allow customers to place orders.  
   - Vendors can accept or decline orders.  
   - Status updates for orders (e.g., pending, accepted, completed).

8. **Mobile-Responsive UI**:  
   - Ensure the app is responsive for use on mobile devices, as many Nigerian users access apps on their phones.

---

## Steps to Build

### 1. Set Up Supabase
   - **Database Schema**:  
     - `users` table: Stores user information (type: vendor or customer).  
     - `products` table: Stores product details (`vendor_id`, `name`, `price`, `description`, `availability`, etc.).  
     - `orders` table (if applicable): Stores orders with `customer_id`, `product_id`, `status`, etc.
   - Enable **Row-Level Security (RLS)** for vendor-specific data access.

   #### Setting Up Supabase in Your App
   1. Sign up at [Supabase](https://supabase.com/) and create a new project.
   2. Get the **API URL** and **Anon Key** from the project settings under the "API" tab.
   3. Install the Supabase client library:
      ```bash
      npm install @supabase/supabase-js
      ```
   4. Initialize the client in a `supabaseClient.ts` file:
      ```typescript
      import { createClient } from '@supabase/supabase-js';

      const SUPABASE_URL = '<your-supabase-url>';
      const SUPABASE_ANON_KEY = '<your-anon-key>';

      export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
      ```

### 2. Redux RTK Setup
   - **Auth Slice**: Handle login, signup, and user roles (vendor/customer).
   - **Products Slice**: Manage state for product listings, filters, and real-time updates.
   - **Orders Slice** (optional): Manage order data (if implementing ordering functionality).

   #### Creating a Redux Store in TypeScript
   1. Install Redux Toolkit and React-Redux:
      ```bash
      npm install @reduxjs/toolkit react-redux
      ```
   2. Set up the Redux store in a `store.ts` file:
      ```typescript
      import { configureStore } from '@reduxjs/toolkit';
      import authReducer from './slices/authSlice';
      import productsReducer from './slices/productsSlice';

      export const store = configureStore({
        reducer: {
          auth: authReducer,
          products: productsReducer,
        },
      });

      export type RootState = ReturnType<typeof store.getState>;
      export type AppDispatch = typeof store.dispatch;
      ```
   3. Provide the store to your app in `index.tsx`:
      ```typescript
      import React from 'react';
      import ReactDOM from 'react-dom/client';
      import { Provider } from 'react-redux';
      import { store } from './redux/store';
      import App from './App';

      const root = ReactDOM.createRoot(document.getElementById('root')!);
      root.render(
        <Provider store={store}>
          <App />
        </Provider>
      );
      ```

### 3. Implement Features
   - **Vendor Dashboard**: Allow vendors to:  
     - Add/edit/delete products.  
     - View their own product listings.  
   - **Customer View**:  
     - Browse products by category or location.  
     - See product availability in real-time.

### 4. UI/UX
   - Simple and mobile-first design.
   - Use libraries like Material-UI or Tailwind CSS for styling.
   - Modals and forms for adding products and placing orders.

---

## Example Folder Structure
```
/src
  /components
    VendorDashboard.tsx
    ProductList.tsx
    ProductForm.tsx
    CustomerView.tsx
  /redux
    authSlice.ts
    productsSlice.ts
    ordersSlice.ts
    store.ts
  /services
    supabaseClient.ts
  /pages
    Vendor.tsx
    Customer.tsx
    Home.tsx
  /App.tsx
```

---

## Why It’s Applicable to Nigeria

1. **Supports Local Vendors**: Helps small businesses gain online visibility.  
2. **Solves a Real Need**: Many Nigerians prefer nearby vendors for affordability and convenience.  
3. **Mobile Accessibility**: Majority of internet users in Nigeria access the web via mobile devices.  
4. **Scalable**: Can be expanded to include delivery or payment integration for future versions.

