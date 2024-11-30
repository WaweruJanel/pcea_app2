function Sermons() {
    const sermons = [
      { id: 1, title: "Faith in Action", date: "2024-01-15", speaker: "Rev. John Doe" },
      { id: 2, title: "Walking with God", date: "2024-01-22", speaker: "Rev. Jane Smith" },
    ];
    return (
      // eslint-disable-next-line react/jsx-no-undef
      <Layout>
        <h1>Sermons</h1>
        <ul>
          {sermons.map((sermon) => (
            <li key={sermon.id}>
              <h2>{sermon.title}</h2>
              <p>{sermon.date} - {sermon.speaker}</p>
              <button>Watch/Listen</button>
            </li>
          ))}
        </ul>
      </Layout>
    );
  }
  export default Sermons;
  
  