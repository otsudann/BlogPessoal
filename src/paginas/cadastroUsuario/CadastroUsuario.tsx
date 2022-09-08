import React, {useState, useEffect, ChangeEvent} from "react";

import Box from '@mui/material/Box';
import { Grid, Typography, Button, TextField } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

import {cadastroUsuario} from '../../services/Services';
import User from '../../models/User';

import "./CadastroUsuario.css";

export default function CadastroUsuario(){

  let navigate = useNavigate();
  const [confirmarSenha,setConfirmarSenha] = useState<String>("")
  const [user, setUser] = useState<User>(
  {
    id: 0,
    nome: '',
    usuario: '',
    senha: '',
    foto: '',
  })

  const [userResult, setUserResult] = useState<User>(
  {
    id: 0,
    nome: '',
    usuario: '',
    senha: '',
    foto: '',
  })

  useEffect(() => {
    if (userResult.id !== 0) {
      navigate("/login")
    }
  }, [userResult])

  function updatedModel(e: ChangeEvent<HTMLInputElement>) {
    setUser({
      ...user,
      [e.target.name]: e.target.value
    })
  }

  function confirmarSenhaHandle(e: ChangeEvent<HTMLInputElement>){
    setConfirmarSenha(e.target.value)
  }

  async function cadastrar(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault()

    if (confirmarSenha === user.senha && user.senha.length >= 8) {
      try {
        await cadastroUsuario(`/usuarios/cadastrar`, user, setUserResult)
        alert("Usuário cadastrado com sucesso")
      }catch (error) {
        console.log(`Error: ${error}`)
        alert("Usuário já existente")
      }
    } else {
        alert("Insira no miníno 8 caracteres.")
        setUser({ ...user, senha: "" })
        //setConfirmarSenha("")
    }
  }

  return (
  <Grid container direction="row" justifyContent="center" alignItems="center">
    <Grid item xs={6} className="imagem2" />
    <Grid item xs={6} alignItems="center">
    <Box paddingX={10}>
      <form onSubmit={cadastrar}>
      <Typography variant='h3' gutterBottom color='textPrimary' component='h3' align='center' style={{fontWeight: 'bold'}}>Cadastrar</Typography>
      <TextField value={user.nome} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} id='nome' label='nome' variant='outlined' name='nome' margin='normal' fullWidth />
      <TextField value={user.usuario} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} id='usuario' label='usuario' variant='outlined' name='usuario' margin='normal' fullWidth />
      <TextField value={user.foto} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} id='foto' label='foto' variant='outlined' name='foto' margin='normal' fullWidth />
      <TextField value={user.senha} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} id='senha' label='senha' variant='outlined' name='senha' margin='normal' type='password' fullWidth />
      <TextField value={confirmarSenha} onChange={(e: ChangeEvent<HTMLInputElement>) => confirmarSenhaHandle(e)} id='confirmarSenha' label='confirmarSenha' variant='outlined' name='confirmarSenha' margin='normal' type='password' fullWidth />
      <Box marginTop={2} textAlign='center'>
        <Link to='/login' className="text-decorator-none">
        <Button variant='contained' color='secondary'>
          Cancelar
        </Button>
        </Link>
        <Button type="submit" variant='contained' color='primary' className="btnCancelar">
        Cadastrar
        </Button>
      </Box>
      </form>
    </Box>
    </Grid>
  </Grid>
  );
}
