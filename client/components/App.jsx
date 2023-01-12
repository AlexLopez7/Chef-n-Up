import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// importing components
import Home from './Home.jsx';
import Header from './Header.jsx';


function App() {
  return (
    <div>
      <BrowserRouter>
      <Header />
        <div className="page">
          <Routes>
            <Route path = '/recipe' element = {<Home />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  )
}

export default App;