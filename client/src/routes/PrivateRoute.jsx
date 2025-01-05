/* eslint-disable react/prop-types */

import { useContext } from "react";
import AuthContext from "../provider/AuthContext";
import { Navigate, useLocation } from "react-router-dom";
import Loader from "../components/Loader";


const PrivateRoute = ({ children }) => {
  const { user, loader } = useContext(AuthContext);
  const location = useLocation();

  if (loader) {
    return <Loader />;
  }
  if (user) {
    return children;
  }

  return <Navigate state={location.pathname} to={`/login`} />;
};

export default PrivateRoute;
