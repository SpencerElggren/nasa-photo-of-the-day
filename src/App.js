import React, {useState, useEffect} from "react";
import "./App.css";
import NasaCard from "./components/cardComponents/nasaCard";
import Info from "./components/cardComponents/cardInfo";

function App() {
  return (

    <div className="App">
        <div>
            <h1>NASA APOD</h1>
        </div>
      <Info/>
    </div>
  );
}

export default App;
