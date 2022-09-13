// Postagem
import CadastroPostagem from './components/postagens/cadastroPostagem/CadastroPostagem';
import DeletarPostagem from './components/postagens/deletarPostagem/DeletarPostagem';
import ListaPostagem from './components/postagens/listaPostagem/ListaPostagem';
// Tema
import CadastroTema from './components/temas/cadastroTema/CadastroTema';
import ListaTema from './components/temas/listaTema/ListaTema';
import DeletarTema from './components/temas/deletarTema/DeletarTema';
// Usuario
import CadastroUsuario from './paginas/cadastroUsuario/CadastroUsuario';
// Components
import Footer from './components/static/footer/Footer';
import Home from './paginas/home/Home';
import Navbar from './components/static/navbar/Navbar';
// Pages
import Login from './paginas/login/Login';
// React
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import {Provider} from 'react-redux';
// Important to toast 
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import store from './store/Store';
// CSS
import './App.css';

function App() {
  return (
    <Provider store={store}>
    <Router>
      <Navbar />
      <ToastContainer />

      <div style={{ minHeight: '100vh' }}>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/cadastrousuario" element={<CadastroUsuario />} />
          <Route path="/temas" element={<ListaTema />} />
          <Route path="/postagens" element={<ListaPostagem />} />
          <Route path="/formularioPostagem" element={<CadastroPostagem />} />
          <Route path="/formularioPostagem/:id" element={<CadastroPostagem />} />
          <Route path="/formularioTema" element={<CadastroTema />} />
          <Route path="/formularioTema/:id" element={<CadastroTema />} />
          <Route path="/deletarPostagem/:id" element={<DeletarPostagem />} />
          <Route path="/deletarTema/:id" element={<DeletarTema />} />
        </Routes>
      </div>
      <Footer />

    </Router>
    </Provider>
  );
}

export default App;
