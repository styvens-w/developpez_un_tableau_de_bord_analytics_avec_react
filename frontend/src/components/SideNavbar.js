import logoRelax from "../assets/images/logoRelax.svg";
import logoSwimming from "../assets/images/logoSwimming.svg";
import logoBike from "../assets/images/logoBike.svg";
import logoAlters from "../assets/images/logoAlters.svg";
import { Link } from "react-router-dom";

function SideNavbar() {
  return (
    <nav className="sideNavbar">
      <ul>
        <li>
          <Link to="">
            <img src={logoRelax} alt="Relaxation" />
          </Link>
        </li>
        <li>
          <Link to="">
            <img src={logoSwimming} alt="Natation" />
          </Link>
        </li>
        <li>
          <Link to="">
            <img src={logoBike} alt="Vélo" />
          </Link>
        </li>
        <li>
          <Link to="">
            <img src={logoAlters} alt="Musculation" />
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default SideNavbar;
