import { Link } from "react-router-dom"
import "./footer.css"

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-brand">
        <h1>PCEA Church</h1>
        <p>© 2021 PCEA Church. All Rights Reserved</p>

        <div className="contact">
          <p>Phone: 123-456-7890</p>
          <p>Location: Nairobi, Kenya</p>
          <p>Email: Info@pceachurch.com</p>
        </div>
      </div>
      <div className="footer-links">
        <h2>Quick Links</h2>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/service">Service</Link>
        <Link to="/events">Events</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/prayer">Prayer Request</Link>
      </div>
      <div className="footer-socials">
        <h2>Follow Us</h2>
        <div className="footer-socials-item">
          <Link  className="icon" to="/">
            <i className="fab fa-facebook"></i>
          </Link>
          <Link  className="icon" to="/">
            <i className="fab fa-twitter"></i>
          </Link>
          <Link  className="icon" to="/">
            <i className="fab fa-instagram"></i>
          </Link>
          <Link  className="icon" to="/">
            <i className="fab fa-linkedin"></i>
          </Link>
        </div>
      </div>
      <div className="footer-subscription">
        <h2>Subscribe to our Newsletter</h2>
        <p>Subscribe to our newsletter to get the latest updates</p>
        <form>
          <input type="email" placeholder="Enter your email" />
          <button>Subscribe</button>
        </form>
      </div>
    </div>
  )
}

export default Footer
