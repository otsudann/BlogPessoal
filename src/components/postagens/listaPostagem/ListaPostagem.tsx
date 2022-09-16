import React, {useState, useEffect} from 'react';
import { Link, useNavigate } from 'react-router-dom'
import { Card, CardActions, CardContent, Button, Typography } from '@material-ui/core';
import Box from '@mui/material/Box';
import Postagem from '../../../models/Postagem';
import {busca} from '../../../services/Services';
import './ListaPostagem.css';
import {useSelector} from 'react-redux';
import {TokenState} from '../../../store/tokens/TokensReducer';
import {toast} from 'react-toastify';

function ListaPostagem() {

    let navigate = useNavigate();
    const [postagens, setPostagens] = useState<Postagem[]>([])
    const token = useSelector<TokenState, TokenState['tokens']>(
      (state) => state.tokens
    )
  
    useEffect(() => {
      if (token == "") {
        toast.error('Você precisa estar logado', {
          position: 'top-right',
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: true,
          theme: 'colored',
          progress: undefined,
        })
        navigate("/login")
      }
    }, [token])
  
    async function getPostagens() {
      await busca("/postagens", setPostagens, {
        headers: {
          'Authorization': token
        }
      })
    }
  
    useEffect(() => {
      getPostagens()
    }, [postagens.length])
  
    return (
      <>
        {
          postagens.map(postagem => (
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
                    <Link to={`/formularioPostagem/${postagem.id}`} className="text-decorator-none" >
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
          ))
        }
      </>
    )
}
export default ListaPostagem;
