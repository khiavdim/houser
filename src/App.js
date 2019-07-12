import React from "react";
import { HashRouter } from "react-router-dom";
import "./App.css";
import Header from "./Components/Header/Header";
import Routes from './routes'

function App() {
  return (
    <div className="App">
      <Header />
      <div className = "Content-Container">
      <HashRouter>

        <Routes />
      </HashRouter>
      </div>
    </div>
  );
}

export default App;
