import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Homepage } from './components/Homepage.jsx'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/recipe/:id" element={<RecipeDetail />} />
      </Routes>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </Router>
  );
}

function HomePage() {
  return (
    <div className="App">
      <Homepage />
    </div>
  );
}

function RecipeDetail() {
  return (
    <div className="recipe-detail">
      <h1>Recipe Detail Page</h1>
      <p>Details about the selected recipe will go here.</p>
    </div>
  );
}
function AddRecipeForm() {
  return (
    <div className="add-recipe-form">
      <h2>Add a New Recipe</h2>
      <form>
        <div>   
          <label>Title</label>
          <input type="text" name="title" required />
        </div>
        <div>
          <label>Description</label>
          <textarea name="description" required></textarea>
        </div>
        <div>
          <label>Image</label>
          <input type="file" name="image" accept="image/*" />
        </div>
        <div>
          <label>Ingredients</label>
          <textarea name="ingredients" required></textarea>
        </div>
        <div>
          <label>Instructions</label>
          <textarea name="instructions" required></textarea>
        </div>  
        <button type="submit">Submit Recipe</button>
      </form>
    </div>
  );
}

export default App
