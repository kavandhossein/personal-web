import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { Page404 } from './components/pages/404';
import { Home } from './components/pages/Home';
import { Portfolio } from './components/pages/Protfolio';
import './index.css'
import { Main } from './layout/Main';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children:[
      {
        path:"/",
        element:<Home/>,
      },
      {
        path:"portfolio/",
        element:<Portfolio/>,
      },
      {
        path:"services/",
        element:<Portfolio/>,
      },
      {
        path:"resume/",
        element:<Portfolio/>,
      }
    ],
    errorElement:<Page404/>
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
