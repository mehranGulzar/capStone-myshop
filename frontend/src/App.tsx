import React from 'react';
import './App.css';
import Articles from "./components/Articles";
import Footer from "./components/Footer";
import {BrowserRouter, Link, Route, Router, Routes, useNavigate} from "react-router-dom";
import Registration from "./Registration";
import Contact from "./components/Contact";
import everyday from "./pics/everyday.png";
import Details from "./components/Details";


function App() {


    return (
        <BrowserRouter>


            <div className={"app-body"}>
                <header className={"header"}>
                    <img id={"header-image"} alt={"EveryDay"} src={everyday}/>

                    <div>
                        <ul className="navigation">
                            <li><Link to={""}>Home</Link></li>
                            <li><Link to={"/registration"}>Registration</Link></li>
                            <li><Link to={"/contact"}>Contact</Link></li>

                        </ul>
                    </div>
                </header>

                <div className={"app-articles"}>


                    <Routes>
                        <Route path={"/registration"} element={<Registration/>}/>
                        <Route path={"/contact"} element={<Contact/>}/>
                        <Route path={"/"} element={<Articles/>}/>
                        <Route path={"/details"} element={<Details/>}/>
                    </Routes>

                </div>


                <Footer/>
            </div>
        </BrowserRouter>
    );
}

export default App;
