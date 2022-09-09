import {useNavigate} from 'react-router-dom';
import useLocalStorage from 'react-use-localstorage';

import './Navbar.css'

function Navbar(){
  const [token, setToken] = useLocalStorage('token');
  let navigate = useNavigate();

  function goLogout(){
    setToken('')
    alert("Usuario deslogado")
    navigate('/login')
  }

  return ( 
  <>
    <nav className="navbar">
      <div className="list">
        <ul>
          <li><a href="/home">[otsublog home]</a></li>
          <li><a href="/postagens">[postagens]</a></li>
          <li><a href="/temas">[temas]</a></li>
          <li><a href="/formularioTema">[novo tema]</a></li>
          <li><a href="/formularioPostagem">[nova postagem]</a></li>
          <li><a href="#" onClick={goLogout}>[sair]</a></li>
        </ul>
      </div>
    </nav>
  </>
 )
}

export default Navbar;
