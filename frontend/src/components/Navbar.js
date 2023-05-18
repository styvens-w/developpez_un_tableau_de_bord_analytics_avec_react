import { Link, useParams } from "react-router-dom";

function Navbar() {
  const { userId } = useParams();
  const link = `/user/${userId}`;

  return (
    <nav className="navbar">
      <ul>
        <li>
          <Link to={link}>Accueil</Link>
        </li>
        <li>
          <Link to="/">Profil</Link>
        </li>
        <li>
          <Link to={link}>Réglages</Link>
        </li>
        <li>
          <Link to={link}>Communauté</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
