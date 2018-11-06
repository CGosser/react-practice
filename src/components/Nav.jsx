import React from "react";

function NavBar(){
  var navStyles = {
    display: "flex",
    width: "30%",
    listStyle: "none",
    justifyContent: "space-between",
    marginRight: 100,

  }
  return (
  <ul style={navStyles}>
    <li>about</li>
    <li>shop</li>
    <li>party</li>
    <li>fnord</li>
  </ul>
  );
}

export default NavBar;
