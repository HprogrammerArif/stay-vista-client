import LoadingSpinner from "../../../components/Shared/LoadingSpinner";
import useRole from "../../../hooks/useRole";
import AdminStatistics from "../Admin/AdminStatistics";
import PropTypes from "prop-types";
import HostStatistics from "../Host/HostStatistics";
import GuestStatistics from "../Guest/GuestStatistics";

const Statistics = () => {
  const [role, isLoading] = useRole();
  if (isLoading) return <LoadingSpinner></LoadingSpinner>;

  return <>{role === "admin" && <AdminStatistics></AdminStatistics>}
  {role === "host" && <HostStatistics></HostStatistics>}
  {role === "guest" && <GuestStatistics></GuestStatistics>}
  </>;
};

Statistics.propTypes = {
  isLoading: PropTypes.bool,
};

export default Statistics;
