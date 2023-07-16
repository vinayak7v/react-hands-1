
import React, { useState } from "react"
import FuncComp from "./FuncComp"
import ClassComp from "./ClassComp"
import './App.css'

function App() {
  const [fState, setFState] = useState(false);
  const [cState, setCState] = useState(false)
  console.log(fState);
  return (
    <>
      <h1>STYLE USING CLASS COMPONENT </h1>

      <button className="btn" onClick={()=>setFState(!fState)}> style in function component</button>
      <button className="btn" onClick={()=>setCState(!cState)}> style in class component</button>

       {fState ? <FuncComp /> : " "}
       {cState ? <ClassComp /> : " "} 
    </>
  );
}

export default App;
  