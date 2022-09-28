import React, { useState, createContext, useMemo } from 'react'
import { AppContextType, AppContextProviderProps } from './appContext.types'

const initialState = (): AppContextType => ({
  token: ''
});

export const AppContext = createContext(initialState());

export const AppContextProvider = ({ children }: AppContextProviderProps) => {
  const state = initialState();
  const [token, setAccessToken] = useState(state.token);

  const setToken = (token: string) => {
    setAccessToken(token);
  };

  const value = useMemo(() => ({
    token,
    setToken,
  }), [token]);

  return(
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  );
}
