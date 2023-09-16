import React from 'react';
import Home from './components/Home.jsx';
import Footer from './components/Footer.jsx';
import Card from './components/Card.jsx';
import Hero from './components/Hero.jsx';
import Watch from './components/Watch.jsx';
import { FaFacebook, FaFacebookSquare, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
      <header>
        <Link className="site-logo" to="/">#VanLife</Link>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/watch">watch</Link>
        </nav>
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/watch" element={<Watch/>} />
      </Routes>
      <Hero />
      <Card />
      <Footer/>
    </BrowserRouter>
  )
}


export default App;
