import React from 'react';
import './App.css';
import Articles from "./components/Articles";
import Footer from "./components/Footer";



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

        <Footer />
    </div>
  );
}

export default App;
