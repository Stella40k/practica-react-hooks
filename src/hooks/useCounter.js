//este hook tendra la logica fuera del componente
import { useState } from "react";

export function useCounter(initialVAlue = 0, step = 1) {
  //creo el estado
  const [count, setCount] = useState(initialVAlue);

  //funciones
  const increment = () => setCount((prev) => prev + step); //prev es el estado o paso q estaba antes
  const decrement = () => setCount((prev) => prev - step);
  const reset = () => setCount(initialVAlue);

  return {
    count,
    increment,
    decrement,
    reset,
  };
}
