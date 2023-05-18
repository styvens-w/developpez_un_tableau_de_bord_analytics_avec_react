import "../assets/scss/userChoice.scss";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import SideBar from "../components/SideBar";
import React from "react";

function UserChoice() {
  return (
    <React.Fragment>
      <Header />
      <SideBar />

      <main>
        <div className="userList">
          <h1>Choisissez un utilisateur :</h1>

          <nav className="userList__navbar">
            <ul>
              <li>
                <Link to="/user/12">Karl Dovineau</Link>
              </li>
              <li>
                <Link to="/user/18">Cecilia Ratorez</Link>
              </li>
            </ul>
          </nav>
        </div>
      </main>
    </React.Fragment>
  );
}

export default UserChoice;
