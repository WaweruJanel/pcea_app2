import "./hero.css";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <div className="hero">
      <div className="hero-text">
        <p>Welcome to PCEA Church</p>
        <h1>Become a part of our community</h1>
        <Link to= '/'>Join US</Link>
      </div>

    </div>
  );
}

export default Hero;
