import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import Loading from "../loading/Loading";

const PrivateRouter = ({ children }) => {
  const location = useLocation();
  const { user, loading } = useContext(AuthContext);

  if (loading) return <Loading></Loading>;
  else if (user) return <>{children}</>;
  return <Navigate to="/login" state={{ from: location }} replace={true} />;
};

export default PrivateRouter;
