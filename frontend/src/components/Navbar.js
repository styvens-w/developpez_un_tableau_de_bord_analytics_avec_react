import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <ul>
        <li>
          <Link to="">Accueil</Link>
        </li>
        <li>
          <Link to="/">Profil</Link>
        </li>
        <li>
          <Link to="">Réglages</Link>
        </li>
        <li>
          <Link to="">Communauté</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
