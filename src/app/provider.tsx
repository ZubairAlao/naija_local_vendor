import * as React from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { HelmetProvider } from 'react-helmet-async';

import { MainErrorFallback } from '@/components/errors/main';
import { Provider } from 'react-redux';
import { store } from '@/redux/store';

import { AnimatePresence } from "framer-motion";

type AppProviderProps = {
  children: React.ReactNode;
};

export const AppProvider = ({ children }: AppProviderProps) => {

  return (
    <React.Suspense
      fallback={
        <div className="flex h-screen w-screen items-center justify-center">
          <div>loading ...</div>
        </div>
      }
    >
      <ErrorBoundary FallbackComponent={MainErrorFallback}>
        <HelmetProvider>
          <Provider store={store}>
            <AnimatePresence mode="wait">
                {children}
              </AnimatePresence>
          </Provider>
        </HelmetProvider>
      </ErrorBoundary>
    </React.Suspense>
  );
};
