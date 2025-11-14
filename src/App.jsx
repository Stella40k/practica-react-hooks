import "./App.css";
import React, { useState } from "react";

function App() {
  //recibe como parametro el valor q queremos usar
  const [counter, setCounter] = useState(0);

  const [name, setName] = useState(["pomelo", "strella", "sese"]);
  const [index, setIndex] = useState(0);
  for (let i = 0; i < name.length; i++) {
    console.log(name[i]);
  }
  return (
    <div className="App">
      <h1>{counter}</h1>
      <button onClick={() => setCounter(counter + 1)}>+</button>

      <h1>{name[index]}</h1>
      <button onClick={() => setIndex((index + 1) % name.length)}>
        siguiente
      </button>
    </div>
  );
}

export default App;
