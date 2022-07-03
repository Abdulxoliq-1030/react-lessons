import "./App.css";
import DesClass from "./components/lesson-7-destructoring-props-state/DesClass";
import Destructing from "./components/lesson-7-destructoring-props-state/Destructing";

function App() {
  return (
    <div className="App">
      <Destructing name="Diana" heroName="Wonder Women" />
      <DesClass name="Bruce" heroName="Batman" />
    </div>
  );
}

export default App;
