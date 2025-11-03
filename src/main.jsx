import  React from "react";
import  ReactDOM from "react-dom/client";
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import HomePage from "./Pages/HomePage.jsx";
import AboutPage from "./Pages/AboutPage.jsx";
import UsersPage from "./Pages/UsersPage.jsx";
import UserDetails from "./Pages/UserDetails.jsx";

const router = createBrowserRouter([
 
{
  path: "/react-UserList-App",
  element: <App/>,
   children: [
      { path: "/Home", element: <HomePage /> },
      { path: "/about", element: <AboutPage /> },
      { path: "/users", element: <UsersPage /> },
      { path: "/users/:id", element: <UserDetails /> },
    ],
  },
   
]);

ReactDOM.createRoot(document.getElementById('root')).render(
     <RouterProvider router={router} />

)
