import { createBrowserRouter } from 'react-router-dom';
import { ErrorBoundary } from '../molecules';
import { Home, Login } from '../pages';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '*',
    element: <ErrorBoundary />
  }
]);
