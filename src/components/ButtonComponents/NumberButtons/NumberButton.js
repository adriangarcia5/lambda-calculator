import React from "react";
// import Numbers from "./Numbers";

const NumberButton = (props) => {

  return (
    <button  className="number-buttons">
      {/* Display a button element rendering the data being passed down from the parent container on props */props.number}
    </button>
  );
};

export default NumberButton;
