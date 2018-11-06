import React from "react";

function SideBar(){
  var SideBarStyles = {
    position: "absolute",
    width: "10%",
    listStyle: "none",
    left: "-175px",
    marginTop: 0,
  }
  var bullets = {
    marginTop: 0,
    paddingLeft: 0,
    display: "flex",
    flexDirection: "column",
    listStyle: "none",
    justifyContent: "space-between",
    height: 400
  }
  var aStyles = {
    cursor: "crosshair",
    textDecoration: "none",
    color: "black",
    fontWeight: "bolder",
    textTransform: "uppercase"
  }
  return (
  <div style={SideBarStyles}>
    <ul style={bullets}>
      <li style={aStyles}>link</li>
      <li style={aStyles}>categories</li>
      <li style={aStyles}>stuff</li>
      <li style={aStyles}>stuffs</li>
    </ul>
  </div>
  );
}

export default SideBar;
