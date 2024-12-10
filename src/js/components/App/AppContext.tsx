import * as React from 'react';
import { Signature } from '../../api/api';

interface Context {
  appSuccess?: string;
  appError?: string;
  signature?: Signature;
  setAppError: (error?: string) => void;
  setAppSuccess: (message?: string) => void;
  setSignature: (signature?: Signature) => void;
}

const AppContext = React.createContext<Context>({
  setAppError: () => {},
  setAppSuccess: () => {},
  setSignature: () => {},
});

const AppContextProvider = ({ children }: { children?: React.ReactNode }) => {
  const [appError, setAppError] = React.useState<string>();
  const [appSuccess, setAppSuccess] = React.useState<string>();
  const [signature, setSignature] = React.useState<Signature>();

  return (
    <AppContext.Provider
      value={{
        appError,
        appSuccess,
        signature,
        setAppError,
        setAppSuccess,
        setSignature,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;

export const useAppContext = () => React.useContext(AppContext);
