import { Link, useLocation } from "react-router-dom";

const routes = [
  { name: "Home", path: "/" },
  { name: "About Us", path: "/about" },
  { name: "Ministries", path: "/ministries" },
  { name: "Contact", path: "/contact" },
  { name: "Login", path: "/login" },
]

const Brand = () => {
  return (
    <Link to="/" className="flex items-center justify-center h-full">
      <img src="./logo.png" alt="PCEA logo" className="w-auto h-12" />
      <p className="ml-2 text-xl font-bold">PCEA Embakasi</p>
    </Link>
  );
};

const Navbar = () => {
  const location = useLocation();

  return (
    <div className={`absolute w-full h-20 px-8 ${location.pathname=== "/" ? "text-white": "text-black"} shadow`}>
      <div className="relative flex items-center justify-between w-full h-full p-2">
        <Brand />
        <ul className="flex gap-4">
          {routes.map((link) => (
            <li
              key={link.path}
              className={`transition-colors duration-300 hover:text-blue-500 ${
                location.pathname === link.path ? "text-blue-500 font-bold" : ""
              }`}
            >
              <Link to={link.path}>{link.name}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export { Brand };
export default Navbar;
