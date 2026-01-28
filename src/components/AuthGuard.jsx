// src/components/AuthGuard.jsx
import { useSelector } from "react-redux";
import PageLoader from "./PageLoader";

const AuthGuard = ({ children }) => {
  const { authChecked } = useSelector((state) => state.auth);

  // Wait until Firebase finishes checking session
  if (!authChecked) {
    return <PageLoader />;
  }

  return children;
};

export default AuthGuard;