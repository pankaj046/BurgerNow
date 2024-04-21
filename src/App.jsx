import * as React from "react";
import Home from './pages/Home'
import Order from './pages/Order'
import MakeYourBurger from './pages/MakeYourBurger'

import Profile from './pages/Profile'
import Navbar from './component/NavbarContainer'

import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Navbar />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/profile",
                element: <Profile />,
            },
            {
                path: "/order",
                element: <Order />,
            },
            {
                path: "/make-burger",
                element: <MakeYourBurger />,
            },
        ]
    },
]);

const App = () => {
  return (
    <RouterProvider router={router} />
  );
}
export default App;
