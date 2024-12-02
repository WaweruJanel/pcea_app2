import { Link } from 'react-router-dom';
import './index.css'

const services = [
  {
    link: "/about",
    icon: "📖", 
    title: "About Us",
    description: "Learn about who we are and what we do.",
  },
  {
    link: "/",
    icon: "🎯", 
    title: "Our Mission",
    description: "To connect communities with meaningful worship.",
  },
  {
    link: "/",
    icon: "🌟", 
    title: "Our Vision",
    description: "A church that's relevant and impactful to all.",
  },
  {
    link: "/",
    icon: "💖", 
    title: "Our Values",
    description: "Faith, love, service, and compassion.",
  },
];

const Service = () => {
  return (
      <div className="service">
        {/* Service Title */}
        <h2 className="service-title">A Church That&apos;s Relevant</h2>

        {/* Service Cards */}
        <div className="service-cards">
          {services.map((service, index) => (
            <Link to ={service.link} key={index}>
            <div className="service-card" key={index}>
              <div className="service-icon">{service.icon}</div>
              <h3 className="service-heading">{service.title}</h3>
              <p className="service-description">{service.description}</p>
            </div>
            </Link>
          ))}
        </div>
      </div>
  );
};

export default Service;
