import "./App.css";
import Inline from "./components/lesson-13-styles/Inline";
import Stylesheet from "./components/lesson-13-styles/Stylesheet";
import "./components/lesson-13-styles/appStyles.css";
import styles from "./components/lesson-13-styles/appStyles.module.css";
function App() {
  return (
    <div className="App">
      <h1 className="error">Error</h1>
      <h1 className={styles.success}>Success</h1>
      <Stylesheet primary={true} />
      <Inline />
    </div>
  );
}

export default App;
