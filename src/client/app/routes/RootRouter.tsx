import React from "react";
import {createBrowserRouter}from "react-router-dom";
import {SignIn, SignUp} from '../../feauters/auth/authRoutes';
import {ErrorPage} from '../ErrorPage';
import App from '../App';


export const Root = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />
  },
  SignUp,
  SignIn,
]);
