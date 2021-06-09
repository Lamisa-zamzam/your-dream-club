import React, { useState, useEffect } from "react";
import "./App.css";
import Navbar from "./componenets/Navbar/Navbar";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./componenets/Header/Header";
import Players from "./componenets/Players/Players";
import Footer from "./componenets/Footer/Footer";
import ResponsiveNav from "./componenets/responsiveNav/ResponsiveNav";

function App() {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => {
        setIsOpen(!isOpen);
    };

    useEffect(() => {
        const hideMenu = () => {
            if (window.innerWidth > 760 && isOpen) {
                setIsOpen(false);
            }
        };

        window.addEventListener("resize", hideMenu);

        return () => {
            window.removeEventListener("resize", hideMenu);
        };
    });
    return (
        <Router>
            <Navbar toggle={toggle} />
            <ResponsiveNav toggle={toggle} isOpen={isOpen} />
            <Header />
            <Players />
            <Footer />
        </Router>
    );
}

export default App;
