import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.min.js'
import "../node_modules/bootstrap-icons/font/bootstrap-icons.css"
import App from './App.jsx'
import './scss/style.scss'
import Contact from './component/pages/Contact.jsx';
import Pagenotfound from './component/pages/Pagenotfound.jsx';
import Shop from './component/pages/Shop.jsx';
import Productdetails from './component/product/Productdetails.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
    {
    path: "/contact",
    element: <Contact />,
  },
   {
    path: "/shop",
    element: <Shop />,
  },

   {
    path: "/products/:slug",
    element: <Productdetails />,
  },
    {
    path: "/*",
    element: <Pagenotfound />,
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <RouterProvider router={router} />
  </StrictMode>,
)
