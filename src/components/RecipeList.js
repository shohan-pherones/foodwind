import { Link } from "react-router-dom";

const RecipeList = ({ recipe }) => {
  return (
    <div className="w-72 bg-white rounded-md overflow-hidden shadow-md">
      <div className="h-48 overflow-hidden flex justify-center items-center bg-gray-900">
        <img
          src={recipe.image_url}
          alt={recipe.title}
          className="w-full block"
        />
      </div>
      <div className="flex flex-col rounded p-5 gap-1">
        <p className="text-sm uppercase font-bold tracking-widest truncate text-cyan-400 rounded-sm self-start">
          {recipe.publisher}
        </p>
        <h2 className="text-2xl font-semibold truncate">{recipe.title}</h2>
        <Link
          to="/"
          className="bg-orange-500 py-2 px-5 rounded-md text-white hover:bg-cyan-500 shadow-lg shadow-orange-200 hover:shadow-cyan-200 self-start mt-3"
        >
          View Recipe
        </Link>
      </div>
    </div>
  );
};

export default RecipeList;
