import React from "react";
import './App.css';
import Table from './components/Table';

const App = () => {

  return (
    <div className="App">
      <div className="main-header">
        <h1>Valentine's day is coming up....</h1>
      </div>
      <div className="main-container">
        <Table />
      </div>
    </div>
  );
};

export default App;