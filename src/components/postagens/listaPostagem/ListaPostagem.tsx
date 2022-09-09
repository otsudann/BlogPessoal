import React, {useState, useEffect} from 'react';
import { Link, useNavigate } from 'react-router-dom'
import { Card, CardActions, CardContent, Button, Typography } from '@material-ui/core';
import Box from '@mui/material/Box';
import Postagem from '../../../models/Postagem';
import {busca} from '../../../services/Services';
import './ListaPostagem.css';
import {useSelector} from 'react-redux';
import {TokenState} from '../../../store/tokens/TokensReducer';

function ListaPostagem() {

  const [postagens, setPostagens] = useState<Postagem[]>([]);
  const token = useSelector<TokenState, TokenState["tokens"]>(
    (state) => state.tokens
  );

  let navigate = useNavigate();

  useEffect(() => {
    if(token == '') {
      alert("Voce precisa estar logado")
      navigate('/login')
    }
  }, [token])

  async function getPostagem(){
    await busca("/postagem", setPostagens, {
      headers: {
        'Authorization': token
      }
    })
  }

  useEffect(()=>{
    getPostagem()
  }, [postagens.length])

  return (
    <>
    { postagens.map(postagem => (
      <Box m={2} >
        <Card variant="outlined">
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Postagens
            </Typography>
            <Typography variant="h5" component="h2">
              {postagem.titulo}
            </Typography>
            <Typography variant="body2" component="p">
              {postagem.texto}
            </Typography>
            <Typography variant="body2" component="p">
              {postagem.tema?.descricao}
            </Typography>
          </CardContent>
          <CardActions>
            <Box display="flex" justifyContent="center" mb={1.5}>

              <Link to={`/formularioPostagem/${postagem.id}`} className="text-decorator-none">
                <Box mx={1}>
                  <Button variant="contained" className="marginLeft" size='small' color="primary" >
                    atualizar
                  </Button>
                </Box>
              </Link>
              <Link to={`/deletarPostagem/${postagem.id}`} className="text-decorator-none">
                <Box mx={1}>
                  <Button variant="contained" size='small' color="secondary">
                    deletar
                  </Button>
                </Box>
              </Link>
            </Box>
          </CardActions>
        </Card>
      </Box>
    ))}
    </>)
}

export default ListaPostagem;
