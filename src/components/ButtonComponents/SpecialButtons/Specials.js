import React from "react";

//import any components needed
// import { specials } from '../../../data';//moved to App.js
//Import your array data to from the provided data file
import SpecialButton from './SpecialButton';

const Specials = (props) => {
  // STEP 2 - add the imported data to state
  const {specialState, setSpecialState} = props;
 
  return (
    <div className = "specials-container">
      {
      //  specialState.map((props) => SpecialButton(props))
       }
       {specialState.map((special, index) => (
         < SpecialButton special={special} key={index}/>
       ))}
    </div>
  );
};

export default Specials;