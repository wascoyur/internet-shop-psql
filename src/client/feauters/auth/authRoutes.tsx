import React from 'react';
import App from '../../app/App';
import {ErrorPage} from '../../app/ErrorPage';
import RegistrationForm from './RegistrationForm';
import {LoginForm} from './LoginForm';

export const Register={
  path: "/register",
  element: <RegistrationForm />,
  errorElement: <ErrorPage />,
}
export const Auth={
  path: "/auth",
  element: <LoginForm />,
  errorElement: <ErrorPage />,
}
