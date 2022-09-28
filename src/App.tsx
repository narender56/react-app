import React from 'react';
import { RouterProvider } from 'react-router-dom';
import './App.css';
import { router } from './routes/router';
import { AppContextProvider } from './context/appContext';

function App() {
  return (
    <AppContextProvider>
      <RouterProvider router={router} />
    </AppContextProvider>
  )
}

export default App;
