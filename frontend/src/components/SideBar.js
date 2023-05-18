import React from "react";

function SideBar(props) {
  return (
    <div className="sideBar">
      {props.navbar}
      <div className="copyright">
        <small>Copyright, SportSee 2020</small>
      </div>
    </div>
  );
}

export default SideBar;
