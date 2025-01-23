import React from "react";
import './App.css';
import Table from './components/Table';
import heartImage from './assets/pixheart.png';
import HeartRain from './components/HeartRain';

const App = () => {

  return (
    <div className="App">
      <HeartRain />
      <div className="main-header">
        <h1>Valentine's day is coming up....</h1>
      </div>
      <div className="hearts">
        <img src={heartImage} alt="heart1"/>
        <img src={heartImage} alt="heart2"/>
      </div>
      <div className="main-container">
        <Table />
      </div>
    </div>
  );
};

export default App;