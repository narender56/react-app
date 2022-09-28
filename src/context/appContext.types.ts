import { ReactNode } from 'react';

export interface AppContextType {
  token: string;
  setToken?: (token: string) => void;
}

export interface AppContextProviderProps {
  children: ReactNode;
}
