import Button from "./Button";

const bgImage = "/hero.jpg";

const Hero = () => {
  return (
    <div
      className="w-full h-screen bg-center bg-cover"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="flex items-center justify-center h-full bg-gray-900 bg-opacity-50">
        <div className="flex flex-col gap-4 mx-8">
          <p className="text-white font-xsbold text-">Welcome to Our Church</p>
          <h1 className="text-6xl font-bold text-white uppercase">
            Become a part of our community
          </h1>

          <Button 
            text="Donate Now" 
            link="/about" 
            color="primary" 
            size="md" 
            className="shadow-md"
          />

        </div>

        <div className="w-1/2 h-full"></div>
      </div>
    </div>
  );
};

export default Hero;
