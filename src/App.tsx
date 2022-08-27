import React from 'react';
import Navbar from './components/static/navbar/Navbar';
import Home from './paginas/Home/Home';
import Footer from './components/static/footer/Footer';
import { Grid, Paper } from "@material-ui/core";
import './App.css';

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <Footer />
    </>
  );
}

export default App;
