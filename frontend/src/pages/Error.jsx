import "../assets/scss/error.scss";
import { Link, useParams } from "react-router-dom";
import logo from "../assets/images/logoSportsee.svg";
import React from "react";

function Error() {
  const { errorCode } = useParams();

  console.log(errorCode);
  return (
    <React.Fragment>
      <header className="headerError">
        <img src={logo} alt="SportSee" />
      </header>
      <div className="error">
        <h1 className="error__status">
          {errorCode === "500" ? "Erreur 500" : "Erreur 404"}
        </h1>
        <p className="error__message">
          {errorCode === "500"
            ? "L'accès au serveur est momentanément indisponible."
            : "La page que vous demandez n'existe pas."}
        </p>
        <Link className="error__link" to="/">
          Retourner au choix du profil.
        </Link>
      </div>
    </React.Fragment>
  );
}

export default Error;
