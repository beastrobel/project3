import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import CSS from './pages/CSS';
import HomePage from './pages/Homepage';
import HTML from './pages/HTML';
import JavaScript from './pages/JavaScript';
import SQL from './pages/SQL';
import ReactComponent from './pages/React';
import Dashboard from './pages/Dashboard';
import Login from './components/Login';
import Signup from './components/Signup';
import App from './App.jsx';
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
        path: '/CSS',
        element: <CSS />,        
      },
      {
        path: '/JavaScript',
        element: <JavaScript />,
      },
      {
        path: '/SQL',
        element: <SQL />,
      },
      {
        path: '/React',
        element: <ReactComponent />,
      },
      {
        path: '/Login',
        element: <Login />,
      },
      {
        path: '/Signup',
        element: <Signup />,
      },
      {
        path: '/Dashboard',
        element: <Dashboard />,
      },
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);