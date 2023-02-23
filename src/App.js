import React from 'react';
import './App.scss';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './components/Home/Home';
import About from './components/About/About';
import Contact from './components/Contact/Contact';

function App() {
  
  return (
    <div className="App">
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/about" exact element={<About />} />
          <Route path="/contact" exact element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
