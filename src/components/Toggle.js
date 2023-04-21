//how to add state:

//1. import the useState hook
import React, {useState} from "react";

function Toggle() {
  //st up the initial state
  const [isOn, setIsOn] = useState(false);
  function handleClick(){
    setIsOn((isOn)=> !isOn);
  }
const color = isOn? "red":"white";

  return (
  <button style={{background: color}}onClick={handleClick}> 
  {isOn? "ON" : "OFF"} </button>
  );
}
export default Toggle;
