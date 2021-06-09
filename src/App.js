import React, { useState, useEffect } from "react";
import "./App.css";
import Navbar from "./componenets/Navbar/Navbar";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./componenets/Header/Header";
import Players from "./componenets/Players/Players";
import Footer from "./componenets/Footer/Footer";
import ResponsiveNav from "./componenets/responsiveNav/ResponsiveNav";

function App() {
    // Initial value of if the dropdown is open
    const [isOpen, setIsOpen] = useState(false);
    // toggle the dropdown
    const toggle = () => {
        setIsOpen(!isOpen);
    };

    // If the device width is greater than 760, set the state to false
    useEffect(() => {
        const hideMenu = () => {
            if (window.innerWidth > 760 && isOpen) {
                setIsOpen(false);
            }
        };

        // on resize, hide the menu
        window.addEventListener("resize", hideMenu);

        return () => {
            window.removeEventListener("resize", hideMenu);
        };
    }, []);
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
