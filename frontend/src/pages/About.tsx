

import PageTitle from '../components/PageTitle';
import MissionStatement from '../components/MissionStatement';
import TestimonialsSection from '../components/TestimonialsSection';
import CallToAction from '../components/CallToAction';

const AboutUs = () => {
  return (
    <div className="bg-gray-100">
      {/* Title Section */}
      <PageTitle
        title="About Us"
        subtitle="Learn more about who we are, our mission, and the people behind our work."
      />

      {/* Mission Statement Section */}
      <MissionStatement
        mission="To empower communities through faith and action."
        vision="A world where love, compassion, and service bring hope to everyone."
      />

      {/* Testimonials Section */}
      <TestimonialsSection
        testimonials={[
          { text: "This organization has changed my life for the better.", author: "Anna K." },
          { text: "An incredible group of people making a real difference.", author: "Michael L." },
        ]}
      />

      {/* Call to Action */}
      <CallToAction
        message="Join us in making a difference today."
        buttonText="Get Involved"
        link="/get-involved"
      />
    </div>
  );
};

export default AboutUs;
