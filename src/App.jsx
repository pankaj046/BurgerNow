import * as React from "react";
import HomePage from './pages/home/HomePage'
import CartPage from './pages/cart/CartPage'
import MenuPage from './pages/menu/MenuPage'
import ProfilePage from './pages/profile/ProfilePage'
import Navbar from './component/navbar/NavbarContainer'

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
                element: <HomePage />,
            },
            {
                path: "/profile",
                element: <ProfilePage />,
            },
            {
                path: "/cart",
                element: <CartPage />,
            },
            {
                path: "/menu",
                element: <MenuPage />,
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
