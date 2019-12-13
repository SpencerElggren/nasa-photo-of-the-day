import React, {useState, useEffect} from "react";
import "./App.css";
import NasaCard from "./components/cardComponents/nasaCard";
import Info from "./components/cardComponents/cardInfo";
import {dates} from "./data";

function App() {

  return (
    <div className="App">
      <Info currentDate={dates[0]}/>
    </div>

  );
}

export default App;
