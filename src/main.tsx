import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Provider } from 'react-redux';

import { store } from './app/store';

import Root from '@pages/root';
import Home from '@pages/Home/Home';

import '@styles/global.scss';
import '@styles/fonts.scss';

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
