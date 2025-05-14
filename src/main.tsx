import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Root from '@pages/root';
import Home from '@pages/Home/Home';

import '@styles/global.scss';

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
  basename: '/horizondubai'
});

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
