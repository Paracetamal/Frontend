import React from "react";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Product from "./pages/Product/Product";

export const routes = [
  { path: "/", element: <Login /> },
  { path: "/home", element: <Home /> },
  { path: "/Register", element: <Register /> },
  { path: "/product", element: <Product /> },
];
