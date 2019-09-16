import React from "react";
import ReactDOM from "react-dom";
import TrafficLight from "./components/TrafficLight/TrafficLight";

function App() {
  return (
    <div className="App">
      <TrafficLight />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
