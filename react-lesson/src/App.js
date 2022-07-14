import "./App.css";
import ErrorBoundary from "./components/lesson-20-error-boundary/ErrorBoundary";
import Hero from "./components/lesson-20-error-boundary/Hero";

function App() {
  return (
    <div className="App">
      <ErrorBoundary>
        <Hero heroName="Batman"></Hero>
      </ErrorBoundary>

      <ErrorBoundary>
        <Hero heroName="Superman"></Hero>
      </ErrorBoundary>

      <ErrorBoundary>
        <Hero heroName="Joker"></Hero>
      </ErrorBoundary>
    </div>
  );
}

export default App;
