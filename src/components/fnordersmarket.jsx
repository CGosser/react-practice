import React from "react";
import PropTypes from "prop-types";

function Market(props){
  return (
    <div>
      <h2>{props.month}</h2>
      <ul>
        {props.selection.map((food, index) =>
          <li key ={index}> {food} </li>
        )}
      </ul>
    </div>
  );
}
Market.propTypes = {
  month: PropTypes.string,
  selection: PropTypes.array,
};

export default Market;
