import * as React from 'react';
import { IcWalletProvider } from 'react-ic-wallet';

import AppLayout from './js/components/AppLayout';
import AppContextProvider, {
  useAppContext,
} from './js/components/App/AppContext';

const App = () => (
  <AppContextProvider>
    <AppLayoutWrapper />
  </AppContextProvider>
);

const AppLayoutWrapper = () => {
  const { icWallet } = useAppContext();

  return (
    <IcWalletProvider provider={icWallet}>
      <AppLayout />
    </IcWalletProvider>
  );
};

export default App;
