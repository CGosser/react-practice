import React from "react";
import image from "../assets/images/logo.png";

function Logo(){
  var logoStyles = {
    width: 100,
    height: 100,
    paddingLeft: 50
   }
  return (
    <img style={logoStyles} src={image}/>
  );
}

export default Logo;
