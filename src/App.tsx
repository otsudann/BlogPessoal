import React from 'react';
import './App.css';
import CadastroUsuario from './paginas/CadastroUsuario/CadastroUsuario';
import Footer from './components/static/footer/Footer';
import Home from './paginas/Home/Home';
import ListaPostagem from './components/postagens/listapostagem/ListaPostagem';
import ListaTema from './components/temas/listatema/ListaTema';
import Login from './paginas/Login/Login';
import Navbar from './components/static/navbar/Navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
   <Router>
      <Navbar />
      <Routes>

        <Route path="/" element={<Login  />} />

        <Route path="/home" element={<Home />} />

        <Route path="/login" element={<Login />} />

        <Route path="/cadastrousuario" element={<CadastroUsuario/>} />

        <Route path="/temas" element={<ListaTema />} />

        <Route path="/posts" element={<ListaPostagem />} />


      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
