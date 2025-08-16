import React, { useState, useEffect } from "react";
import data from "../data.json";

function HomePage() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    setRecipes(data);
  }, []);

  return (
    <div className="homepage bg-gray-100 p-4 rounded-lg shadow-md">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-10">
        Welcome to the Recipe Sharing Platform
      </h1>
      <div className="recipe-list grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {recipes.map((recipe) => (
          <div
            key={recipe.id}
            className="recipe-card bg-white rounded-lg shadow hover:shadow-lg transition-shadow duration-200 p-4 flex flex-col"
          >
            <img
              src={recipe.image}
              alt={recipe.title}
              className="w-full h-52 object-cover rounded-md mb-4"
            />
            <h2 className="text-xl font-semibold text-gray-800 mb-2">
              {recipe.title}
            </h2>
            <p className="text-gray-600 mt-auto line-clamp-3">
              {recipe.summary}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HomePage;
