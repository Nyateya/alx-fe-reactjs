import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import data from "../data.json"; // local recipes

function RecipeDetail() {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    const foundRecipe = data.find((r) => r.id === parseInt(id));
    setRecipe(foundRecipe);
  }, [id]);

  if (!recipe) {
    return <div>Recipe not found </div>;
  }

  return (
    <div className="recipe-detail bg-white p-6 rounded-lg shadow-md">
      <h1 className="text-3xl font-bold text-gray-800 mb-4">{recipe.title}</h1>
      <img
        src={recipe.image}
        alt={recipe.title}
        className="w-full h-64 object-cover rounded-md mb-4"
      />
      <p className="text-gray-600 mb-4">{recipe.description}</p>

      {/* Ingredients */}
      <h2 className="text-xl font-semibold text-gray-800 mb-2">Ingredients</h2>
      <ul className="list-disc list-inside mb-4">
        {recipe.ingredients.map((ingredient, index) => (
          <li key={index} className="text-gray-600">
            {ingredient}
          </li>
        ))}
      </ul>

      {/* Instructions */}
      {recipe.instructions && (
        <>
          <h2 className="text-xl font-semibold text-gray-800 mb-2">
            Instructions
          </h2>
          <p className="text-gray-600 mb-4">{recipe.instructions}</p>
        </>
      )}

      {/* Steps */}
      {recipe.steps && (
        <>
          <h2 className="text-xl font-semibold text-gray-800 mb-2">Steps</h2>
          <p className="text-gray-600">{recipe.steps}</p>
        </>
      )}
    </div>
  );
}

export default RecipeDetail;
