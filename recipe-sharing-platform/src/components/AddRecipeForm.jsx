import React, { useState } from 'react';
function AddRecipeForm() {
  const [title, setTitle] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [instructions, setInstructions] = useState(''); 
  const [description, setDescription] = useState('');
  const [image, setImage] = useState(null);


  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Recipe submitted:', { title, description, ingredients, instructions, image });
    if (Object.keys(validate()).length > 0) {
      console.error('Validation errors:', validate());
      return;
    }
  };
  const validate = () => {
    let newErrors = {};
    if (!title) newErrors.title = 'Title is required';
    if (!description) newErrors.description = 'Description is required';
    if (!ingredients) newErrors.ingredients = 'Ingredients are required'; 
    if (!instructions) newErrors.instructions = 'Instructions are required';
    if (!image) newErrors.image = 'Image is required';
    return newErrors;
  }
  // const newRecipe = {
  //   id: Date.now(),
  //   title,
  //   description,
  //   ingredients: ingredients.split(',').map(ingredient => ingredient.trim()), 
  //   instructions,
  //   image: image ? URL.createObjectURL(image) : null,
  // };

  return (
    <>
      <form onSubmit={handleSubmit} className="add-recipe-form bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-4">Add a New Recipe</h2>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Description</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
            required
          ></textarea>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Image</label>
          <input
            type="file"
            onChange={(e) => setImage(e.target.files[0])}
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Ingredients</label>
          <textarea
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
            required
          ></textarea>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Instructions</label>
          <textarea
            value={instructions}
            onChange={(e) => setInstructions(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
            required
          ></textarea>
        </div>
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
          Submit Recipe
        </button>
      </form>
    </>
  );
}
export default AddRecipeForm;