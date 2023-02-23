import React from 'react';
import './App.scss';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './components/Home/Home';
import About from './components/About/About';

function App() {
  
  return (
    <div className="App">
      <BrowserRouter>
          <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/about" exact element={<About />} />
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
