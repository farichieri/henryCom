import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import '@/styles/globals.css';
import { AppLayout } from '@/layouts';
import { persistor, store } from '@/store';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <AppLayout>
          <Component {...pageProps} />
        </AppLayout>
      </PersistGate>
    </Provider>
  );
}
