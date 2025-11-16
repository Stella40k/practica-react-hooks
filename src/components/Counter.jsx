import { useCounter } from "../hooks/useCounter";
import React from "react";
import { button } from "./Button";

export const Counter = ({ initialVAlue, step }) => {
  const { count, increment, decrement, reset } = useCounter(initialVAlue, step);
  return (
    <div style={{ margin: "20px", textAlign: "center" }}>
      <h2>Contador: {count}</h2>

      <button onClick={increment}>+{step}</button>
      <button onClick={decrement}>-{step}</button>
      <button onClick={reset}>Reiniciar</button>
    </div>
  );
};
