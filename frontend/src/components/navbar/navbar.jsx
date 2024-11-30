import './navbar.css';

function Navbar() {
    return (
        <div className="navbar">
            <div className="logo">
                <img src="/logo.png" alt="logo" />
                <h1>
                    P.C.E.A. Embakasi
                </h1>
            </div>

            <div className="nav-links">
                <a href="/">Home</a>
                <a href="/about">About Us</a>
                <a href="/services">Sermon</a>
                <a href="/contact">Contact</a>
                <a href="/login">Login</a>
                <button className="donate">
                    Donate
                </button>
            </div>
        </div>
    );
}
export default Navbar;