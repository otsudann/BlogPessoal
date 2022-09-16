import React from 'react';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import {Link, useNavigate} from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux';
import { TokenState } from '../../../store/tokens/TokensReducer';
import { addToken } from '../../../store/tokens/actions';
import {toast} from 'react-toastify';

import './Navbar.css'

function Navbar(){
  const token = useSelector<TokenState, TokenState["tokens"]>(
    (state) => state.tokens
  );
  let navigate = useNavigate();
  const dispatch = useDispatch();

  function goLogout(){
    dispatch(addToken(''))
    toast.info('usuario deslogado', {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: false,
      theme: "colored",
      progress: undefined,
    })
    navigate('/login')
  }

  var navbarComponent;

  if(token !== ''){
    navbarComponent = 
    <AppBar position="static" className="navbar">
      <Toolbar variant="dense">
        <Box style={{ cursor: "pointer" }} >
          <Typography variant="h5" color="inherit" className="blog-name">
            BlogPessoal
          </Typography>
        </Box>
        <Box display="flex" justifyContent="start">
          <Link to="/home" className="text-decorator-none" >
            <Box mx={1} style={{ cursor: "pointer" }}>
              <Typography variant="h6" color="inherit">
                home
              </Typography>
            </Box>
          </Link>
          <Link to="/postagens" className="text-decorator-none" >
            <Box mx={1} style={{ cursor: "pointer" }}>
              <Typography variant="h6" color="inherit">
                postagens
              </Typography>
            </Box>
          </Link>
          <Link to="/temas" className="text-decorator-none" >
            <Box mx={1} style={{ cursor: "pointer" }}>
              <Typography variant="h6" color="inherit">
                temas
              </Typography>
            </Box>
          </Link>
          <Link to="/formularioTema" className="text-decorator-none" >
            <Box mx={1} style={{ cursor: "pointer" }}>
              <Typography variant="h6" color="inherit">
                cadastrar tema
              </Typography>
            </Box>
          </Link>
          <Box mx={1} style={{ cursor: "pointer" }} onClick={goLogout}>
            <Typography variant="h6" color="inherit">
              temas
            </Typography>
          </Box>
        </Box>
        </Toolbar>
      </AppBar>
  }

  return ( 
  <>
    {navbarComponent}
  </>
 )
}

export default Navbar;
