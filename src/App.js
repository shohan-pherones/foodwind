import { Route, Routes } from "react-router-dom";
import { useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Favourite from "./components/Favourite";
import NotFound from "./components/NotFound";

const App = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [recipes, setRecipes] = useState([]);
  const [isPending, setIsPending] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const searchHandler = (e) => {
    e.preventDefault();
    setRecipes([]);
    setErrorMsg("");
    setIsPending(true);

    fetch(`https://forkify-api.herokuapp.com/api/search?q=${searchQuery}`)
      .then((res) => {
        if (!res.ok)
          throw new Error("No recipe found, please try again later!");
        return res.json();
      })
      .then((data) => {
        setRecipes(data.recipes);
        setIsPending(false);
      })
      .catch((err) => setErrorMsg(err.message));

    setSearchQuery("");
  };

  return (
    <div className="bg-gradient-to-b from-gray-50 to-orange-50 text-gray-600 text-xl min-h-screen w-full overflow-x-hidden">
      <Navbar
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        searchHandler={searchHandler}
      />
      <Routes>
        <Route
          path="/"
          element={
            <Home recipes={recipes} isPending={isPending} errorMsg={errorMsg} />
          }
        />
        <Route path="/favourite" element={<Favourite />} />
        <Route path="/not-found" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
