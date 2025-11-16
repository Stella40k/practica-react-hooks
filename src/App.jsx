import "./App.css";
import { Counter } from "./components/Counter";
function App() {
  return (
    <div className="App">
      <h1>Ejercicio 1</h1>

      <Counter initialVAlue={0} step={1} />
      {/* <Counter initialVAlue={10} step={2} />
      <Counter initialVAlue={100} step={5} /> */}
    </div>
  );
}
export default App;
