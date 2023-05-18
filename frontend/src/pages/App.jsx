import "../assets/scss/app.scss";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
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
  const error = getError();
  const navigate = useNavigate();
  const chartDataFormatter = new FormatChartData();
  const keyInfo = getKeyData();
  const cardFormattedData = chartDataFormatter.setCardFormattedData(keyInfo);

  useEffect(() => {
    if (error) {
      navigate("/404");
    }
  }, [error, navigate]);

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
