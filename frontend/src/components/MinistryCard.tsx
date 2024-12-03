type MinistryCardProps = {
  title: string;
  description: string;
  image: string;
  link: string;
};

const MinistryCard = ({ title, description, image, link }: MinistryCardProps) => (
  <div className="overflow-hidden bg-white rounded-lg shadow-md">
    <img src={image} alt={title} className="object-cover w-full h-56" />
    <div className="p-6">
      <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
      <p className="mt-2 text-gray-600">{description}</p>
      <div className="mt-4">
        <a href={link} className="text-blue-500 hover:underline">Learn More</a>
      </div>
    </div>
  </div>
);

export default MinistryCard;
