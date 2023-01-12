import React from "react";
import { BrowserRouter, Routes, Route, HashRouter } from 'react-router-dom';

// importing components
import Home from './Home.jsx';
import Header from './Header.jsx';
import Login from "./Login.jsx";
import SignUp from "./SignUp.jsx";


function App() {
  return (
    <div>
      <HashRouter>
        <Header />
        <div className="page">
          <Routes>
            <Route path="/recipe" element={<Home />}/>
            <Route path="/" element={<Login />}/>
            <Route path="/signup" element={<SignUp />}/>
          </Routes>
        </div>
      </HashRouter>
    </div>
  )
}

export default App;