import React, { Component } from 'react';
import { Navigate, Outlet } from "react-router-dom";
import App from './App';

const useAuth = () => {
  return true;//App.adminCheck;
};

const ProtectedRoutes = () => {
  const isAuth = useAuth();
  return isAuth ? <Outlet /> : <Navigate to="/Restrict" />;
};

export default ProtectedRoutes;