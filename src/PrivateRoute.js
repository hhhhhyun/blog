import React from 'react';
import { Route, Navigate } from 'react-router-dom';
import { getCookie } from './Cookies';

const PrivateRoute = ({ element: Element, ...rest }) => {
  const isAuthenticated = !!getCookie("token");

  return (
    <Route
      {...rest}
      element={isAuthenticated ? <Element /> : <Navigate to="/login" />}
    />
  );
};

export default PrivateRoute;
