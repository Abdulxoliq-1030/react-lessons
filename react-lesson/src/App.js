import "./App.css";
import HelloProps from "./components/lesson-4-props/HelloProps";
import Welcome from "./components/lesson-2-class-components/Welcome";
function App() {
  return (
    <div className="App">
      <HelloProps name="Bruce" heroName="Batman">
        <p>This is children props</p>
      </HelloProps>
      <HelloProps name="Alice" heroName="Superman">
        <button>Action</button>
      </HelloProps>
      <HelloProps name="Jess" heroName="Wonder Woman" />

      <Welcome name="Bruce" heroName="Batman"/>
      <Welcome name="Alice" heroName="Superman" />
      <Welcome name="Jess" heroName="Wonder Woman"/>
    </div>
  );
}

export default App;
