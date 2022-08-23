import React from 'react';
import './App.css';
import axios from 'axios'


function App() {

    axios.get("localhost/api/articles")


  return (
    <div className="App">
      <header className="App-header">


      </header>
    </div>
  );
}

export default App;
