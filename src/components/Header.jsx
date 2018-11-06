import React from "react";
import Logo from "./Logo";
import NavBar from "./Nav";
import SearchField from "./SearchField";

function Header(){
  var HeaderStyles = {
    display: "flex",
    justifyContent: "space-between",
    width: "100%",
  };
  return (
    <div style={HeaderStyles}>
      <Logo/>
      <SearchField/>
      <NavBar/>
    </div>
  );
}

export default Header;
