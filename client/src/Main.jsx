import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import CSS from './pages/CSS';
import HomePage from './pages/Homepage';
import HTML from './pages/HTML';
import JavaScript from './pages/JavaScript';
import MySQL from './pages/MySQL';
import React from './pages/React';
import App from './App.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <NotFound />,
    children: [
      {
        index:true,
        element: <HomePage />,
      },
      {
        path: '/HTML',
        element: <HTML />,
      },
      {
        path: 'CSS',
        element: <CSS />,        
      },
      {
        path: '/JavaScript',
        element: <JavaScript />,
      },
      {
        path: '/MySQL',
        element: <MySQL />,
      },
      {
        path: 'React',
        element: <React />,
      }

    ]
  }
])



ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);