import React from 'react';
import {ErrorPage} from '../../app/ErrorPage';
import RegistrationForm from './RegistrationForm';
import {LoginForm} from './LoginForm';

export const RouteSignUp={
  path: "/register",
  element: <RegistrationForm />,
  errorElement: <ErrorPage />,
}
export const RouteSignIn={
  path: "/login",
  element: <LoginForm />,
  errorElement: <ErrorPage />,
}
