import MinistryCard from "../components/MinistryCard";

const Ministries = () => {
  const ministries = [
    {
      title: 'Youth Ministry',
      description: 'Empowering and inspiring the next generation to live boldly in Christ.',
      image: 'https://img.freepik.com/free-photo/youngsters-posing-selfie_23-2147663323.jpg?t=st=1733202764~exp=1733206364~hmac=b1be89cc3719ba70468d70bcc872c03aaed04225e99a898406134f2d879a2f75&w=826',
      link: '/ministries/youth'
    },
    {
      title: 'Music Ministry',
      description: 'Leading the congregation in worship with music and praise.',
      image: 'https://img.freepik.com/free-photo/friends-having-good-time-while-listening-their-friend-playing-guitar_23-2149187034.jpg?t=st=1733202651~exp=1733206251~hmac=17162ba82cac90bd42f633c309a64ab8c9b30173f8a8663cb2522a897b43d887&w=826',
      link: '/ministries/music'
    },
    {
      title: 'Women\'s Ministry',
      description: 'Supporting and uplifting women in faith through fellowship and service.',
      image: 'https://img.freepik.com/free-photo/african-family-spending-time-together_53876-146053.jpg?t=st=1733202709~exp=1733206309~hmac=8a2d762bc7a0fb4347198862e4ffdb9ee9fbba91043f831d934cf22f465f2dc4&w=826',
      link: '/ministries/women'
    },
    {
      title: 'Children\'s Ministry',
      description: 'Teaching children about the love of Christ through fun and engaging activities.',
      image: 'https://img.freepik.com/free-photo/african-family-spending-time-together_53876-146053.jpg?t=st=1733202709~exp=1733206309~hmac=8a2d762bc7a0fb4347198862e4ffdb9ee9fbba91043f831d934cf22f465f2dc4&w=826',
      link: '/ministries/children'
    },
    {
      title: 'Men\'s Ministry',
      description: 'Strengthening men’s faith through community and service.',
      image: 'https://img.freepik.com/free-photo/african-family-spending-time-together_53876-146053.jpg?t=st=1733202709~exp=1733206309~hmac=8a2d762bc7a0fb4347198862e4ffdb9ee9fbba91043f831d934cf22f465f2dc4&w=826',
      link: '/ministries/men'
    },
    {
      title: 'Prayer Ministry',
      description: 'A group dedicated to praying for the needs of the church and community.',
      image: 'https://img.freepik.com/free-photo/african-family-spending-time-together_53876-146053.jpg?t=st=1733202709~exp=1733206309~hmac=8a2d762bc7a0fb4347198862e4ffdb9ee9fbba91043f831d934cf22f465f2dc4&w=826',
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
