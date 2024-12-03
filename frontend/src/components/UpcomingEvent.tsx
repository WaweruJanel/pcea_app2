import EventCard from '../components/EventCard'; // Import the EventCard component

const UpcomingEvents = () => {
  const events = [
    {
      title: 'Christmas Charity Event',
      description: 'Join us for a charity event to give back to the community this Christmas.',
      date: 'December 25, 2024',
      image: 'https://img.freepik.com/free-photo/beautiful-family-enjoying-christmas-together-home_23-2149174172.jpg?t=st=1733202502~exp=1733206102~hmac=18eed5eca7e4385d18e45d1f91850c330df8a0108edda1549f056998860497df&w=826',
      link: '/events/christmas-charity'
    },
    {
      title: 'New Year’s Eve Celebration',
      description: 'Celebrate the new year with a grand celebration at our church.',
      date: 'December 31, 2024',
      image: 'https://img.freepik.com/free-photo/beautiful-family-enjoying-christmas-together-home_23-2149174172.jpg?t=st=1733202502~exp=1733206102~hmac=18eed5eca7e4385d18e45d1f91850c330df8a0108edda1549f056998860497df&w=826',
      link: '/events/new-year-celebration'
    },
    {
      title: 'Annual Fundraiser',
      description: 'Help us raise funds for our community projects at this year’s annual fundraiser.',
      date: 'January 15, 2025',
      image: 'https://img.freepik.com/free-photo/beautiful-family-enjoying-christmas-together-home_23-2149174172.jpg?t=st=1733202502~exp=1733206102~hmac=18eed5eca7e4385d18e45d1f91850c330df8a0108edda1549f056998860497df&w=826',
      link: '/events/annual-fundraiser'
    },
  ];

  return (
    <section className="py-16 bg-gray-100">
      <div className="px-6 mx-auto max-w-7xl">
        <h2 className="mb-8 text-3xl font-bold text-center text-gray-800">Upcoming Events</h2>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3">
          {events.map((event, index) => (
            <EventCard
              key={index}
              title={event.title}
              description={event.description}
              date={event.date}
              image={event.image}
              link={event.link}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default UpcomingEvents;
