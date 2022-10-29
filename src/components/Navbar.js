import { Link } from "react-router-dom";
import { BsFillBookmarkHeartFill } from "react-icons/bs";

const Navbar = ({ searchQuery, setSearchQuery, searchHandler }) => {
  return (
    <div className="bg-white shadow-md">
      <div className="container mx-auto py-7 flex justify-between items-center">
        <Link to="/" className="text-3xl italic font-black">
          food
          <span className="text-orange-500 hover:text-cyan-500">wind</span>
        </Link>
        <form className="flex gap-5">
          <input
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            type="text"
            placeholder="Search any recipe"
            className="p-2 bg-orange-100 text-center rounded-full outline-orange-500"
          />
          <button
            onClick={searchHandler}
            type="submit"
            className="bg-orange-500 py-2 px-5 rounded-full text-white hover:bg-cyan-500 shadow-lg shadow-orange-200 hover:shadow-cyan-200"
          >
            Search
          </button>
        </form>
        <Link
          to="/favourite"
          className="text-2xl text-orange-500 hover:text-cyan-500"
        >
          <BsFillBookmarkHeartFill />
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
