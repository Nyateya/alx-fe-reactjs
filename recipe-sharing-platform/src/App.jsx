import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Homepage from "./Components/Homepage.jsx";
import RecipeDetail from "./Components/RecipeDetail.jsx";
import AddRecipeForm from "./Components/AddRecipeForm.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/recipe/:id" element={<RecipeDetail />} />
        <Route path="/add" element={<AddRecipeForm />} />
      </Routes>
    </Router>
  );
}

export default App;
