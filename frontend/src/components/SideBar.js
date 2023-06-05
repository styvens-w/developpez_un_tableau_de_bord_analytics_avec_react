import React from "react";
import PropTypes from "prop-types";

function SideBar({ navbar }) {
  return (
    <div className="sideBar">
      {navbar}
      <div className="copyright">
        <small>Copyright, SportSee 2020</small>
      </div>
    </div>
  );
}

export default SideBar;

// on sécurise nos props en déclarant un type pour chaque prop.
SideBar.propTypes = {
  navbar: PropTypes.object,
};
