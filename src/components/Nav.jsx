import React from "react";

function NavBar(){
  var navStyles = {
    display: "flex",
    width: "30%",
    listStyle: "none",
    justifyContent: "space-between",
    marginRight: 100,
  }
  var aStyles = {
    cursor: "crosshair",
    textDecoration: "none",
    color: "black",
    fontWeight: "bolder",
    textTransform: "uppercase"
  }
  return (
  <ul style={navStyles}>
    <li><a style={aStyles} href="#">about</a></li>
    <li><a style={aStyles} href="#">shop</a></li>
    <li><a style={aStyles} href="#">party</a></li>
    <li><a style={aStyles} href="#">fnord</a></li>
  </ul>
  );
}

export default NavBar;
