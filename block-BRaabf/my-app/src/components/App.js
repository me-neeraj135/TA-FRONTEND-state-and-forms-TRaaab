/** @format */

import "../style/App.css";

import StepOne from "./StepOne";
import StepTwo from "./StepTwo";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>counter app ±</h1>
      </header>

      <StepOne />

      <StepTwo />
    </div>
  );
}

export default App;
