import React, { useState } from "react";

function AddRecipeForm() {
  const [title, setTitle] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [steps, setSteps] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);

  // 🔹 Added error state
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors); // ✅ store errors
      console.error("Validation errors:", validationErrors);
      return;
    }

    console.log("Recipe submitted:", {
      title,
      description,
      ingredients,
      steps,
      image,
    });

    // Reset form after successful submit
    setTitle("");
    setDescription("");
    setIngredients("");
    setSteps("");
    setImage(null);
    setErrors({});
  };

  const validate = () => {
    let newErrors = {};
    if (!title) newErrors.title = "Title is required";
    if (!description) newErrors.description = "Description is required";
    if (!ingredients) newErrors.ingredients = "Ingredients are required";
    if (!steps) newErrors.steps = "Steps are required";
    if (!image) newErrors.image = "Image is required";
    return newErrors;
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="add-recipe-form bg-white p-6 rounded-lg shadow-md"
    >
      <h2 className="text-2xl font-bold mb-4">Add a New Recipe</h2>

      {/* Title */}
      <div className="mb-4">
        <label className="block text-gray-700 mb-2">Title</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded"
        />
        {errors.title && <p className="text-red-500 text-sm">{errors.title}</p>}
      </div>

      {/* Description */}
      <div className="mb-4">
        <label className="block text-gray-700 mb-2">Description</label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded"
        ></textarea>
        {errors.description && (
          <p className="text-red-500 text-sm">{errors.description}</p>
        )}
      </div>

      {/* Image */}
      <div className="mb-4">
        <label className="block text-gray-700 mb-2">Image</label>
        <input
          type="file"
          onChange={(e) => setImage(e.target.files[0])}
          className="w-full p-2 border border-gray-300 rounded"
        />
        {errors.image && <p className="text-red-500 text-sm">{errors.image}</p>}
      </div>

      {/* Ingredients */}
      <div className="mb-4">
        <label className="block text-gray-700 mb-2">Ingredients</label>
        <textarea
          value={ingredients}
          onChange={(e) => setIngredients(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded"
        ></textarea>
        {errors.ingredients && (
          <p className="text-red-500 text-sm">{errors.ingredients}</p>
        )}
      </div>

      {/* Steps */}
      <div className="mb-4">
        <label className="block text-gray-700 mb-2">Steps</label>
        <textarea
          value={steps}
          onChange={(e) => setSteps(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded"
        ></textarea>
        {errors.steps && <p className="text-red-500 text-sm">{errors.steps}</p>}
      </div>

      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Submit Recipe
      </button>
    </form>
  );
}

export default AddRecipeForm;
