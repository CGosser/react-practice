import React from "react";

function SearchField(){
  var searchStyles = {
    height: 20,
    width: "10%",
    paddingLeft: "2em",
    marginTop: "3em",
    borderWidth: "thin",
    borderColor: "black",
    borderTop: "hidden",
    borderLeft: "hidden",
    borderRight: "hidden"
  }
  return (
  <input style={searchStyles} placeholder="search . . .">
  </input>
  );
}

export default SearchField;
