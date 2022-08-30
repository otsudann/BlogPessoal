import React from "react";
import { Grid } from "@material-ui/core";
import { Paper, Link, Box, Typography, TextField, FormControlLabel, Button, Checkbox } from '@mui/material';
//import "./Home.css"

function Login(){

  return(
    <Grid container className='bg-home'>
      <Grid item>
        <Box display="flex">

          <Box component="form" noValidate sx={{ mt: 1 }}>
            <Typography component="h1" variant="h5"> Entre </Typography>
            <TextField margin="normal" required fullWidth id="email" label="Email Address" name="email" />
            <TextField margin="normal" required fullWidth id="password" label="Password" name="password" type="password" />
            <FormControlLabel control={<Checkbox value="remember" color="primary" />} label="Remember me" />
            <Link to="/home">

            </Link>
          </Box>

          <Box>
            <Paper style={background: "url(https://www.remessaonline.com.br/blog/wp-content/uploads/2021/10/visual-studio-code-o-que-e.jpg.optimal.jpg)"} />
          </Box>

        </Box>
      </Grid>
    </Grid>
  );
}

export default Login;

