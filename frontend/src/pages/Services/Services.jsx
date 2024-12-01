import { Layout } from "../../components";

function Services() {
    const services = [
      { id: 1, name: "Sunday Service", time: "9:00 AM", description: "Join us for worship and a sermon." },
      { id: 2, name: "Midweek Prayers", time: "6:00 PM", description: "A time for prayer and reflection." },
    ];
    return (
      <Layout>
        <div className="service-container">
          <h1>Services</h1>
          <ul>
            {services.map((service) => (
              <li key={service.id}>
                <h2>{service.name}</h2>
                <p>{service.time}</p>
                <p>{service.description}</p>
              </li>
            ))}
          </ul>
        </div>
      </Layout>
    );
  }
  export default Services;
  