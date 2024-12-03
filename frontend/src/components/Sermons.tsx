type Sermon = {
  id: string; // YouTube video ID
  title: string;
};

const sermons: Sermon[] = [
  { id: "1rD1KHCmF4w", title: "Sermon 1: Faith and Courage" },
  { id: "lhIYCslvG0A", title: "Sermon 2: Love and Grace" },
  { id: "jSjq6tw36k8", title: "Sermon 3: Hope and Perseverance" },
];

const Sermons = () => {
  return (
    <section className="p-8 text-center bg-[#F5F2F0]">
      <h2 className="mb-1 text-gray-600">Watch and Listen</h2>
      <p className="mb-4 text-3xl font-bold">Inspirational sermons to uplift your spirit.</p>

      {/* Sermons Grid */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {sermons.map((sermon) => (
          <div key={sermon.id} className="overflow-hidden rounded-lg shadow-lg">
            <iframe
              src={`https://www.youtube.com/embed/${sermon.id}`}
              title={sermon.title}
              className="w-full h-64"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            <h3 className="py-2 text-lg font-semibold text-gray-800">{sermon.title}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Sermons;
