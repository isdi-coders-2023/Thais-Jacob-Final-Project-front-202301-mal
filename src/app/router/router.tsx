import { createBrowserRouter } from 'react-router-dom';
import HomePage from '../../pages/Home/HomePage';
import LoginPage from '../../pages/Login/LoginPage';
import MainLayout from '../layout/MainLayout';

export const router = createBrowserRouter([
  {
    path: '/',
    children: [
      {
        path: '',
        element: <LoginPage />,
      },
    ],
  },
  {
    path: '/app',
    element: <MainLayout />,
    children: [
      {
        path: '',
        element: <HomePage />,
      },
    ],
  },
]);
