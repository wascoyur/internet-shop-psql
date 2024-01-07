import React from "react";
import {createBrowserRouter}from "react-router-dom";
import {RouteSignIn, RouteSignUp} from '../../feauters/auth/authRoutes';
import {ErrorPage} from '../ErrorPage';
import App from '../App';
import Bucket from '../../pages/Bucket';
import Payment from '../../pages/Payment';

export const RouteBucket={
  path: "/bucket",
  element: <Bucket />,
  errorElement: <ErrorPage />,
}
export const RoutePayment={
  path: "/payment",
  element: <Payment />,
  errorElement: <ErrorPage />,
}
export const Root = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />
  },
  RouteSignUp,
  RouteSignIn,
  RouteBucket,
  RoutePayment
]);
