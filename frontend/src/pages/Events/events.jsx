function Events() {
    const events = [
      { id: 1, title: "Youth Worship Night", date: "2024-12-15", description: "An evening of worship and fellowship." },
      { id: 2, title: "Christmas Service", date: "2024-12-25", description: "Celebrate the birth of Jesus Christ with us." },
    ];
    return (
      // eslint-disable-next-line react/jsx-no-undef
      <Layout>
        <h1>Upcoming Events</h1>
        <ul>
          {events.map((event) => (
            <li key={event.id}>
              <h2>{event.title}</h2>
              <p>{event.date}</p>
              <p>{event.description}</p>
              <button>RSVP</button>
            </li>
          ))}
        </ul>
      </Layout>
    );
  }
  export default Events;
  