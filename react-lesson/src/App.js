import "./App.css";
import ClickCounter from "./components/lesson-21-high-order-components/ClickCounter";
import HoverCounter from "./components/lesson-21-high-order-components/HoverCounter";

function App() {
  return (
    <div className="App">
      <ClickCounter name="Abdulxoliq" />
      <HoverCounter />
    </div>
  );
}

export default App;
