import { NavLink } from "react-router-dom";
import { ROUTES } from "../../routes/route";

const Logo = ({ className = "" }) => {
  return (
    <NavLink
      to={ROUTES.HOME}
      className={`flex items-center gap-2 ${className}`}
    >
      <img
        src="/metroserve-logo.svg"
        alt="METROSERV Logo"
        className="h-10 w-auto"
      />

      <span className="text-xl font-bold text-teal-600">METROSERV</span>
    </NavLink>
  );
};

export default Logo;
