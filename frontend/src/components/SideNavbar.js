import logoRelax from "../assets/images/logoRelax.svg";
import logoSwimming from "../assets/images/logoSwimming.svg";
import logoBike from "../assets/images/logoBike.svg";
import logoAlters from "../assets/images/logoAlters.svg";
import { Link, useParams } from "react-router-dom";

function SideNavbar() {
  const { userId } = useParams();
  const link = `/user/${userId}`;
  return (
    <nav className="sideNavbar">
      <ul>
        <li>
          <Link to={link}>
            <img src={logoRelax} alt="Relaxation" />
          </Link>
        </li>
        <li>
          <Link to={link}>
            <img src={logoSwimming} alt="Natation" />
          </Link>
        </li>
        <li>
          <Link to={link}>
            <img src={logoBike} alt="Vélo" />
          </Link>
        </li>
        <li>
          <Link to={link}>
            <img src={logoAlters} alt="Musculation" />
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default SideNavbar;
