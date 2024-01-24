import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import CSS from './pages/CSS';
import HomePage from './pages/Homepage';
import HTML from './pages/HTML';
import JavaScript from './pages/JavaScript';
import MySQL from './pages/SQL';
import React from './pages/React';
import Login from './components/Login';
import Signup from './components/Signup'
import App from './App.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
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
      },
      {
        path: 'Login',
        element: <Login />,
      },
      {
        path: 'Signup',
        element: <Signup />,
      },

    ]
  }
])



ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);