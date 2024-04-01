import React from 'react'
import ReactDOM from 'react-dom/client'
import About from './Pages/About.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Contact from './Pages/Contact.jsx';
import Blog from './Pages/Blog.jsx';
import Home from './Pages/Home.jsx';
import MenuItem from './Components/MenuItem.jsx';

const router = createBrowserRouter([
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "/blog",
    element: <Blog />,
  },
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/",
    element: <Home />,
  },
 
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router} />
  
  </React.StrictMode>,
)
