import { createBrowserRouter } from 'react-router-dom';
import HomePage from '../../pages/Home/HomePage';
import LoginPage from '../../pages/Login/LoginPage';
import NotFound from '../../pages/NotFound/NotFound';
import CreateTour from '../../pages/CreateTour/CreateTour';
import MainLayout from '../layout/MainLayout';

export const router = createBrowserRouter([
  {
    path: '/',
    errorElement: <NotFound />,
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
    errorElement: <NotFound />,
    children: [
      {
        path: '',
        element: <HomePage />,
      },
      {
        path: 'create-tour',
        element: <CreateTour />,
      },
    ],
  },
]);
