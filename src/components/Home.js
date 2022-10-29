import RecipeList from "./RecipeList";

const Home = ({ recipes, isPending, errorMsg }) => {
  return (
    <div className="recipe-wrapper flex flex-wrap gap-5 container mx-auto justify-center py-10 min-h-screen">
      {isPending && <p>{errorMsg ? errorMsg : "Loading..."}</p>}
      {recipes
        ? recipes.map((recipe) => (
            <RecipeList
              key={recipe.recipe_id}
              recipe={recipe}
              isPending={isPending}
              errorMsg={errorMsg}
            />
          ))
        : null}
    </div>
  );
};

export default Home;
