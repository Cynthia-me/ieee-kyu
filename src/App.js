import React from 'react';
// import {BrowserRuter as Router, Route,Switch} from 'react-router-dom'
import './App.css';
import Details from './Components/Details';
import HeaderImage from './Components/HeaderImage';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <HeaderImage/>
      <Details/>
      <Footer/>
    </div>
  );
}

export default App;
