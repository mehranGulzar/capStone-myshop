import React from 'react';
import './App.css';
import Articles from "./components/Articles";
import Footer from "./components/Footer";
import {BrowserRouter, HashRouter, Link, Route, Routes} from "react-router-dom";
import Registration from "./Registration";
import Contact from "./components/Contact";
import everyday from "./pics/everyday.png";
import Details from "./components/Details";
import AddArticle from "./components/AddArticle";



function App() {



    return (
        <HashRouter>


            <div className={"app-body"}>
                <header className={"header"}>
                    <img id={"header-image"} alt={"EveryDay"} src={everyday}/>

                    <div>
                        <ul className="navigation">
                            <li><Link to={""}>Home</Link></li>
                            <li><Link to={"/registration"}>Registration</Link></li>
                            <li><Link to={"/contact"}>Contact</Link></li>
                            <li><Link to={"/admin"}>Admin</Link></li>

                        </ul>
                    </div>
                </header>

                <div className={"app-articles"}>


                    <Routes>
                        <Route path={"/registration"} element={<Registration/>}/>
                        <Route path={"/contact"} element={<Contact/>}/>
                        <Route path={"/"} element={<Articles/>}/>
                        <Route path={"/details/:id"} element={<Details />}/>
                        <Route path={"/admin"} element={<AddArticle />}/>
                    </Routes>

                </div>


                <Footer/>
            </div>
        </HashRouter>
    );
}

export default App;
