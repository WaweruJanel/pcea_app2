const bgImage = './about.jpg';

const PageTitle = ({ title, subtitle }: { title: string; subtitle: string }) => (
    <div className="py-8 text-center bg-white"
    style={{ backgroundImage: `url(${bgImage})` }}
    >
      <h1 className="text-4xl font-bold">{title}</h1>
      <p className="mt-2 text-gray-600">{subtitle}</p>
    </div>
  );
  
  export default PageTitle;
  