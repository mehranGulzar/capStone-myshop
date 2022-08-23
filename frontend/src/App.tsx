import React from 'react';
import './App.css';
import Articles from "./components/Articles";



function App() {



  return (
    <div  className={"app-body"}>
        <header className={"header"}>

        </header>
      <div>
        <ul className="navigation">
          <li><a href="#">Login</a></li>
          <li><a href="#">Registration</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </div>
      <div className={"app-articles"}>

    <Articles/>

      </div>
    </div>
  );
}

export default App;
