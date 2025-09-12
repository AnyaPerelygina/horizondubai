import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Provider } from 'react-redux';

import { store } from './app/store';

import Root from '@pages/root';
import Home from '@pages/Home/Home';
import CatalogPage from '@pages/CatalogPage/CatalogPage';
import FavoritesPage from '@pages/FavoritesPage/FavoritesPage';
import ApartmentPage from '@pages/ApartmentPage/ApartmentPage';
import DeveloperPage from '@pages/DeveloperPage/DeveloperPage';

import '@styles/style.scss';

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <>
        <Root />
      </>
    ),
    children: [
      {
        element: <Home />,
        path: '/'
      },
      {
        element: <CatalogPage />,
        path: '/catalog'
      },
      {
        element: <FavoritesPage />,
        path: '/favorites'
      },
      {
        element: <ApartmentPage />,
        path: '/apartment'
      },
      {
        element: <DeveloperPage key={window.location.pathname} />,
        path: '/developer/:id'
      }
    ]
  }
], {
  basename: process.env.BASE_URL
});

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
)
