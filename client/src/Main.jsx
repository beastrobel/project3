import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import CSS from './pages/CSS';
import HomePage from './pages/Homepage';
import HTML from './pages/HTML';
import JavaScript from './pages/JavaScript';
import MySQL from './pages/SQL';
import React from './pages/React';
import Login from './components/Login';
import App from './App.jsx';
import Login from './pages/Login.jsx';
import ErrorPage from './pages/Error.jsx'


const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
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
        element: <Login />
      }


    ]
  }
])



ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);