import {Routes, Route} from 'react-router-dom';
import Home from './components/Home';
import React from 'react';
import About from './components/About';
import Search from './components/Search';
import {fetchUserData} from './services/githubServices';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
    </Routes>
  );
}
export default App;