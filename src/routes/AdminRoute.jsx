import { Navigate, useLocation } from "react-router-dom";
import LoadingSpinner from "../components/Shared/LoadingSpinner";
import useRole from "../hooks/useRole";
import PropTypes from "prop-types";

const AdminRoute = ({ children }) => {
  const [role, isLoading] = useRole();
  const location = useLocation();

  if (isLoading) return <LoadingSpinner></LoadingSpinner>;
  if (role === "admin") return children;

  return <Navigate to="/dashboard" state={location.pathname} replace="true" />;
};

AdminRoute.propTypes = {
  children: PropTypes.element,
};

export default AdminRoute;
