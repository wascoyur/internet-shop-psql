import React from "react";
import {createBrowserRouter}from "react-router-dom";
import {Auth, Register} from '../feauters/auth/authRoutes';


export const Root = createBrowserRouter([
  Register,
  Auth,
]);
