import React from "react";

function SideBar(){
  var SideBarStyles = {
    position: "absolute",
    width: "10%",
    listStyle: "none",
    left: "-125px",
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
  return (
  <div style={SideBarStyles}>
    <ul style={bullets}>
      <li>link</li>
      <li>categories</li>
      <li>stuff</li>
      <li>stuffs</li>
    </ul>
  </div>
  );
}

export default SideBar;
