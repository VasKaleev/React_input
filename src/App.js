import './App.css';
import React from "react";
import {useState} from 'react';
function App() {
  let a = 5;
  let TextInput=React.createRef();
  let TextOut=React.createRef();
  const [output, setOutput] = useState('hello');

  function f1(arg) {
    console.log("f1 work " + arg);
  }
  function f2() {
    console.log("move");
  }
  function ShowInput(event) {
    //console.log(event.target.value);
    console.log(TextInput.current.value);
    TextOut.current.innerHTML=TextInput.current.value;
    setOutput(TextInput.current.value);
  }
  return (
    <>
     <h1>События</h1>
     <section>
       <h2>Button</h2>
       <button onClick={f1(1)}>Push</button>
    </section>
    <section>
       <h2>Double click + mouse move</h2>
       <div className="test" onDoubleClick={()=>f1(2)}></div>
    </section>
    <section>
       <h2>Input</h2>
       <input type="text" onInput={ShowInput} ref={TextInput} defaultValue="Hi"/>
       <p ref={TextOut}></p>
       <h3>{output}</h3>
    </section>
    </>
  );
}

export default App;
