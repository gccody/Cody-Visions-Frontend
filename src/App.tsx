import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Gallery } from './pages/Gallery';
import { Home } from './pages/Home';
import { NavBar } from './components/NavBar';

function App() {

  return (
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/gallery' element={<Gallery />} />
      </Routes>
  );
}

export default App;
