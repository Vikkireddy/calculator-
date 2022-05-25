import React , { useState, useEffect, useRef} from "react";
import './App.css';
import{FiDelete} from 'react-icons/fi'
import {AiFillDelete} from 'react-icons/ai'
import {VscDiffAdded} from 'react-icons/vsc'
 
function App() {
  const [result, setResult ]=useState("");
  const inputRef = useRef(null);

  useEffect(()=>inputRef.current.focus());
  function handleClick(e){
    setResult (result + e.target.name);
    
  }
  function backspace(){
    setResult(result.slice(0,result.length-1));
}
function clear(){
setResult("");

}
  return (
     <div className="calc-app">
       <from>
         <input type="text" placeholder="Enter 6 Digits" value={result} ref={inputRef} 
           onInput={(e) => {
            if (e.target.value.length > e.target.maxLength)
            e.target.value = e.target.value.slice(0,e.target.maxLength);
         }}
             maxlength = {6}
         />
         
       </from>
      <div className="keypad">

        <button name="7" onClick={handleClick}>7</button>
        <button name="8" onClick={handleClick}>8</button>
        <button name="9" onClick={handleClick}>9</button>
        <button name="4" onClick={handleClick}>4</button>
        <button name="5"onClick={handleClick}>5</button>
        <button name="6"onClick={handleClick}>6</button >
        <button name="1"onClick={handleClick}>1</button>
        <button name="2"onClick={handleClick}>2</button>
        <button name="3"onClick={handleClick}>3</button>
        <button id="bacspace" onClick={backspace}><FiDelete/></button>
        <button onClick={handleClick}>0</button>
        <button id="clear" onClick={clear}><AiFillDelete/></button>
        <button id="addticket" ><VscDiffAdded/>Add Ticket</button>
        
      </div>

     </div>
   )
}

export default App;
