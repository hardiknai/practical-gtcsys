import React from "react";
import "./App.css";
import Wizard from "./components/Wizard";
import inputArray from "./data/data-json.json";

function App() {
  return (
    <div className="App">
      <h1>Entry Form</h1>
      <Wizard dataArray={inputArray} />
    </div>
  );
}

export default App;
