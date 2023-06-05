import logo from "../assets/images/logoSportsee.svg";
import PropTypes from "prop-types";

function Header({ navbar }) {
  return (
    <header className="header">
      <img src={logo} alt="SportSee" />
      {navbar}
    </header>
  );
}

export default Header;

// on sécurise nos props en déclarant un type pour chaque prop.
Header.propTypes = {
  navbar: PropTypes.object,
};
