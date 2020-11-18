import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Quiz from "./components/quiz";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <header className="">
        <Router>
          <Quiz />
        </Router>
      </header>
    </div>
  );
}

export default App;
