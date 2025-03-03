
// import { useState } from 'react'
// import './App.css'
// import Footer from './Components/Footer/footer'
// import Navbar from './Components/Navbar'





import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/home";
import About from "./pages/about";
import Product from "./pages/product";


function App() {
  return (

    <Router>
      <nav>
        {/* <Link to="/">Home</Link> | <Link to="/about">About</Link> */}
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<Product />} />
      </Routes>
    </Router>
  );
};


export default App;
