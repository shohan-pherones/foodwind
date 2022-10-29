import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="text-center py-10 container mx-auto flex flex-col gap-3 text-lg text-gray-500">
      <Link to="/" className="text-2xl italic font-black">
        food
        <span className="text-orange-500 hover:text-cyan-500">wind</span>
      </Link>
      <p>&copy; {new Date().getFullYear()} Foodwind. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
