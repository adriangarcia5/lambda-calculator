import React from "react";
//import any components needed
// import { numbers } from '../../../data';
//Import your array data to from the provided data file
import NumberButton from './NumberButton';

const Numbers = (props) => {
  // STEP 2 - add the imported data to state
  // const [numberState, setNumberState] = useState(numbers);//Moved to Apps.js
  const { numberState, setNumberState} = props;
  // console.log(numberState)
  return (
    <div className = "numbers-container">
        
      {/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component */
      // numberState.map((props) => NumberButton(props))//Solution 1
       }
        {numberState.map((number, index) => (
          < NumberButton number={number} key={index}//Key clears an error code displayed in the console
          />))}
    </div>
  );
};

export default Numbers;
