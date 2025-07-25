import { useState, useEffect } from "react";
import { useRecipeStore } from "../store/RecipeStore";

const EditRecipeForm = ({ recipeId }) => {
  const recipe = useRecipeStore((state) =>
    state.recipes.find((recipe) => recipe.id === recipeId)
  );
  const updateRecipe = useRecipeStore((state) => state.updateRecipe);

  // Handle case where recipe is not found
  const [title, setTitle] = useState(recipe ? recipe.title : "");
  const [description, setDescription] = useState(
    recipe ? recipe.description : ""
  );

  // Update local state if recipe changes (e.g. when recipeId changes)
  useEffect(() => {
    if (recipe) {
      setTitle(recipe.title);
      setDescription(recipe.description);
    }
  }, [recipe]);
  const handleSubmit = (event) => {
    event.preventDefault();
    if (!recipe) return;
    updateRecipe({ ...recipe, title, description });
  };

  if (!recipe) {
    return <div>Recipe not found.</div>;
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Title"
        required
      />
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Description"
        required
      />
      <button type="submit">Update Recipe</button>
    </form>
  );
};

export default EditRecipeForm;
