type EventCardProps = {
  title: string;
  description: string;
  date: string;
  image: string;
  link: string;
};

const EventCard = ({ title, description, date, image, link }: EventCardProps) => (
  <div className="overflow-hidden bg-white rounded-lg shadow-md">
    <img src={image} alt={title} className="object-cover w-full h-48" />
    <div className="p-6">
      <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
      <p className="mt-2 text-gray-600">{description}</p>
      <div className="flex items-center justify-between mt-4">
        <span className="text-sm text-gray-500">{date}</span>
        <a href={link} className="text-blue-500 hover:underline">Learn More</a>
      </div>
    </div>
  </div>
);

export default EventCard;
