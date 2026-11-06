import { useLocation } from "react-router-dom";
import title from "../Assets/SASCtitle 1.png";
import "./SiteHeader.css";

export const SiteHeader = () => {
  const location = useLocation();
  if (location.pathname === "/") return null;
  return (
    <div className="container">
      <header className="header-block">
        <img
          src={title}
          alt="Welcome to Stonehaven Amateur Swimming Club"
          width={200}
        />
      </header>
    </div>
  );
};
