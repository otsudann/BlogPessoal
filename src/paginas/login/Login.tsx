import { useState, useEffect, ChangeEvent } from 'react';
import {useDispatch} from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { login } from '../../services/Services';
import UserLogin from '../../models/UserLogin';
import { addToken } from '../../store/tokens/actions';

import './Login.css';

function Login() {
  let navigate = useNavigate();
  const dispatch = useDispatch();

  const [token, setToken] = useState('')

  const [userLogin, setUserLogin] = useState<UserLogin>({
    id: 0,
    usuario: '',
    senha: '',
    token: '',
  })

  function updatedModel(e: ChangeEvent<HTMLInputElement>) {
    setUserLogin({
      ...userLogin,
      [e.target.name]: e.target.value
    })               
  }

  useEffect(() => {
    if (token !== ""){
      dispatch(addToken(token))
      navigate('/home')
    }
  }, [token])

  async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault();
    //console.log('userLogin: ' + Object.values(userLogin));          
    try {
      await login(`/usuarios/logar`, userLogin, setToken)
      alert("Usuário logado com sucesso")
    } catch (error) {
      alert("Dados do usuário inconsistentes")
      console.log(`Erro: ${error}`);
    }
  }

  return (
  <>
    <div className="login">
      <div className="container">
        <h1>Login</h1>
        <form onSubmit={onSubmit}>
          <label htmlFor="usuario">+ user</label>
          <input type="text" name='usuario' id='usuario' value={userLogin.usuario} onChange={(e:ChangeEvent<HTMLInputElement>) => updatedModel(e)} />
          <label htmlFor="senha">+ password</label>
          <input type="password" name='senha' id='senha' value={userLogin.senha} onChange={(e:ChangeEvent<HTMLInputElement>) => updatedModel(e)} />
          <button type="submit">log in</button>
        </form>
        <p>Não tem uma conta? <a href="/cadastrousuario">Cadastre-se</a></p>
      </div>
    </div>
  </>
  );
}

export default Login;

