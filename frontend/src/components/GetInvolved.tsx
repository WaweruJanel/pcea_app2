import { Link } from "react-router-dom";

interface Service {
    link: string;
    icon: string;
    title: string;
    description: string;
}

const services:Service[] = [
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


const GetInvolved = () => {
  return (
    <section className="text-center">
        <h2 className="mt-4 text-xl">A church that's relevant</h2>

        
        <div className="flex items-center justify-between gap-3 px-8 my-10">
            {services.map((service, index) => (
                <div key={index} >
                    <Link to={service.link} className="flex flex-col items-center justify-center w-full h-full p-10 bg-primary">
                        <span className="text-3xl">{service.icon}</span>
                        <h3>{service.title}</h3>
                        <p>{service.description}</p>
                    </Link>
                </div>
            ))}
        </div>
    </section>
  )
}


export default GetInvolved;