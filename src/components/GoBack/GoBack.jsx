import { useLocation, Link } from "react-router-dom";

const GoBack = () => {
  const location = useLocation();
  return <Link to={location.state ?? "/movies"}>Go back</Link>;
};

export default GoBack;
