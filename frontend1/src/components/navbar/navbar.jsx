import { Link } from 'react-router-dom';
import './navbar.css';
import { useEffect } from 'react';


function Navbar() {

    useEffect(() => {
        // Get the navbar
        var navbar = document.querySelector(".navbar");
        //change navbar background on pages not home
        if (window.location.pathname !== "/") {
            navbar.style.backgroundColor = "#000";
        }
    }, []);

    return (
        <div className="navbar">
            <div className="logo">
                <img src="/logo.png" alt="logo" />
                <h1>
                    P.C.E.A. Embakasi
                </h1>
            </div>

            <div className="nav-links">
                <Link to="/">Home</Link>
                <Link to="/about">About Us</Link>
                <Link to="/service">Services</Link>
                <Link to="/contLinkct">ContLinkct</Link>
                <Link to="/login">Login</Link>
                <button className="donate">
                    Donate
                </button>
            </div>
        </div>
    );
}
export default Navbar;