import "../assets/scss/app.scss";
import React from "react";
import { getError, getKeyData } from "../utils/services/app.service";
import FormatChartData from "../utils/services/formatChartData";
import Header from "../components/Header";
import SideBar from "../components/SideBar";
import Navbar from "../components/Navbar";
import SideNavbar from "../components/SideNavbar";
import "../utils/services/app.service";
import Title from "../components/Title";
import Activity from "../components/Activity";
import Sessions from "../components/Sessions";
import Performance from "../components/Performance";
import Score from "../components/Score";
import KeyInfos from "../components/KeyInfos";

function App() {
  // On récupère les données des infos clé
  const keyInfo = getKeyData();

  // On instancie la classe qui va formater les données pour le graphique
  const chartDataFormatter = new FormatChartData();

  // Puis, on appelle la methode approprié au graphique et qui prend en paramètre les données
  const cardFormattedData = chartDataFormatter.setCardFormattedData(keyInfo);

  // On appelle la fonction qui va vérifier les erreurs
  getError();

  return (
    <React.Fragment>
      <Header navbar={<Navbar />} />
      <SideBar navbar={<SideNavbar />} />
      <main>
        <Title />
        <Activity />
        <div className="smallChart">
          <Sessions />
          <Performance />
          <Score />
        </div>
        <div className="keyInfoCards">
          {cardFormattedData.map(({ name, value }) => (
            <KeyInfos key={name} name={name} value={value} />
          ))}
        </div>
      </main>
    </React.Fragment>
  );
}

export default App;
