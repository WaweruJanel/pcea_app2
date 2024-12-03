import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="flex justify-between w-auto p-4 text-white bg-gray-800">
      <div className="h-16 brand">
        <Link to="/" className="flex items-center justify-center h-16 text-white">
        <img src="./logo.png" alt="pcea logo" className="h-[100%]"/>
        <p className="text-xl font-bold ">PCEA Embakasi</p>
      </Link>
      </div>
      
      <div className="">
        <h2 className="text-l">Useful Links</h2>
        <ul className="text-xs list-none">
          <li><Link to="/about">About Us</Link></li>
          <li><Link to="/contact">Contact Us</Link></li>
          <li><Link to="/events">Events</Link></li>
          <li><Link to="/gallery">Gallery</Link></li>
          <li><Link to="/donate">Donate</Link></li>
        </ul>
      </div>

      <div className="footer-socials">
        <h2>Follow Us</h2>
        <div className="flex gap-4 py-2 footer-socials-item">
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
        <p className="py-2 text-xs">Subscribe to our newsletter to get the latest updates</p>
        <form>
          <input type="email" placeholder="Enter your email" className="p-2 mx-2 rounded-md" />
          <button className="p-2 rounded-md bg-slate-500">Subscribe</button>
        </form>
      </div>
    </footer>
   
  );
};


export default Footer;

