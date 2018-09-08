import * as React from 'react';

export interface AppContextInterface {
  cartItems: Array<Object>;
}

const ctxt = React.createContext<AppContextInterface | null>(null);

export const AppContextProvider = ctxt.Provider;

export const AppContextConsumer = ctxt.Consumer;
