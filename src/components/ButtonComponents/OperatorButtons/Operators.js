import React from "react";

//import any components needed
import { operators } from '../../../data';//Moved to App.js

//Import your array data to from the provided data file
import OperatorButton from './OperatorButton';

const Operators = (props) => {
  // STEP 2 - add the imported data to state
  const {operatorState, setOperatorState} = props;
  return (
    <div className = "operators-container">
      {/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/
        
      //  Object.values(operatorState).map((props) => OperatorButton(props.char))//Solution 1
       }
       {operatorState.map((operators, index) => (
         <OperatorButton obj={operators} key={index}
          />))}
    </div>
  );
};

export default Operators; 