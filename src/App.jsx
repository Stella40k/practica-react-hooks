import "./App.css";
import React, { useState, useEffect } from "react";

//useEffect es un hooks y sirve para reaccionar a cambios
function App() {
  //useEfect es una funcion q toma otra funcion como parametro, dentro del efect se
  // hace cualquier cosa con el siclo de la app, como cuando empiece, se actualice o se termine
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log("componente montado");
  }, []); //si el array esta vacio se ejecuta una vez
  //toma dependencias, si alguna cambia se reinicia el efecto

  useEffect(() => {
    console.log("componente actualizado");
  }, [count]); //se ejecuta cuando userId cambia
  return (
    <div className="App">
      <h1>Contador</h1>
      <p>{count}</p>

      <button onClick={() => setCount(count + 1)}>Sumar</button>
    </div>
  );
}
//cada q se actualice count volvera contar desde 0 hasta q se reinicie
export default App;
