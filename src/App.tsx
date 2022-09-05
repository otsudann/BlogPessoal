import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import CadastroUsuario from './components/temas/listatema/ListaTema';
import Footer from './components/static/footer/Footer';
import Home from './paginas/Home/Home';
import ListaPostagem from './components/postagens/listapostagem/ListaPostagem';
import ListaTema from './paginas/Login/Login';
import Login from './paginas/Login/Login';
import Navbar from './components/static/navbar/Navbar';

import './App.css';

function App() {
  return (
    <Router>
      <Navbar />

      <Routes>
        <Route path="/home" element={ <Home /> } />
        <Route path="/" element={ <Login /> } />
        <Route path="/login" element={ <Login /> } />
        <Route path="/cadastrousuario" element={ <CadastroUsuario /> } />
        <Route path="/temas" element={ <ListaTema /> } />
        <Route path="/posts" element={ <ListaPostagem /> } />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
