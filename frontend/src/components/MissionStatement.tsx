const MissionStatement = ({
    mission,
    vision,
  }: {
    mission: string;
    vision: string;
  }) => (
    <section className="py-12 text-center bg-gray-50">
      <h2 className="text-2xl font-bold">Our Mission</h2>
      <p className="mt-4 text-gray-700">{mission}</p>
      <h2 className="mt-8 text-2xl font-bold">Our Vision</h2>
      <p className="mt-4 text-gray-700">{vision}</p>
    </section>
  );
  
  export default MissionStatement;
  