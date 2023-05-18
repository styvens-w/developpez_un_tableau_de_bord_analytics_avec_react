import logo from "../assets/images/logoSportsee.svg";

function Header(props) {
  return (
    <header className="header">
      <img src={logo} alt="SportSee" />

      {props.navbar}
    </header>
  );
}

export default Header;
