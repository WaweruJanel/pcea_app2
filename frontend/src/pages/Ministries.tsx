import MinistryCard from "../components/MinistryCard";

const Ministries = () => {
  const ministries = [
    {
      title: 'Youth Ministry',
      description: 'Empowering and inspiring the next generation to live boldly in Christ.',
      image: 'https://via.placeholder.com/400x250',
      link: '/ministries/youth'
    },
    {
      title: 'Music Ministry',
      description: 'Leading the congregation in worship with music and praise.',
      image: 'https://via.placeholder.com/400x250',
      link: '/ministries/music'
    },
    {
      title: 'Women\'s Ministry',
      description: 'Supporting and uplifting women in faith through fellowship and service.',
      image: 'https://via.placeholder.com/400x250',
      link: '/ministries/women'
    },
    {
      title: 'Children\'s Ministry',
      description: 'Teaching children about the love of Christ through fun and engaging activities.',
      image: 'https://via.placeholder.com/400x250',
      link: '/ministries/children'
    },
    {
      title: 'Men\'s Ministry',
      description: 'Strengthening men’s faith through community and service.',
      image: 'https://via.placeholder.com/400x250',
      link: '/ministries/men'
    },
    {
      title: 'Prayer Ministry',
      description: 'A group dedicated to praying for the needs of the church and community.',
      image: 'https://via.placeholder.com/400x250',
      link: '/ministries/prayer'
    },
  ];

  return (
    <section className="py-16 bg-gray-100">
      <div className="px-6 mx-auto max-w-7xl">
        <h2 className="mb-8 text-3xl font-bold text-center text-gray-800">Our Ministries</h2>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
          {ministries.map((ministry, index) => (
            <MinistryCard
              key={index}
              title={ministry.title}
              description={ministry.description}
              image={ministry.image}
              link={ministry.link}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Ministries;
