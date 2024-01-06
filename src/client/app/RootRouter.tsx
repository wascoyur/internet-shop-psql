import React from "react";
import {createBrowserRouter}from "react-router-dom";
import App from './App';

export const mainRouter = createBrowserRouter([
  {
  path: "/",
  element: <App/>,
}
]);
