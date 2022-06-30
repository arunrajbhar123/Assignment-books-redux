import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";
const AuthRequired = ({ children }) => {
  const login = useSelector((state) => state.AuthReducer.isAuth);
  const location = useLocation();
  if (!login) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
  return children;
};

export default AuthRequired;
