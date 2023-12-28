import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "../styles/Navbar.css"
import { MdMenu } from "react-icons/md";

function Navbar() {
    const [expandNavbar, setExpandNavbar] = useState(false);
    const location = useLocation();

    useEffect(() => {
        setExpandNavbar(false);
    }, [location]);

    return (
        <nav className="navbar" id={expandNavbar ? "open" : "close"}>
                <div className="name"> Aamal Hussain </div> 
                
                <div className="toggleButton">
                    <button onClick={() => setExpandNavbar((prev) => !prev)}> 
                        <MdMenu />
                    </button>
                </div>

                <div className="menu">
                    <Link className="menuItem" to="/"> Home </Link>
                    <Link className="menuItem" to="/research"> Research </Link>
                    <Link className="menuItem" to="/contact"> Contact </Link>
                </div>
            
        </nav>
    );
}

export default Navbar;