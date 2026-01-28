// src/layouts/AppLayout.jsx
import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import useAuth from "../hooks/useAuth";

const AppLayout = () => {
  // Initialize auth state here (inside Router context)
  useAuth();
  
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

export default AppLayout;