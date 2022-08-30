import React from "react";
import { Button, Grid } from "@material-ui/core";
import Box from '@mui/material/Box';
import "./Home.css"

function Home(){
  var prog = [
    { code : "HTML"},
    { code : "CSS"},
    { code : "JS"},
  ]

  return(
    <Grid container className='bg-home'>
      <Grid item>
        { prog.map(function(key){
          return (
          <>
            <div>{key.code}</div>
          </>
          )
        })}
      </Grid>
    </Grid>
  );
}

export default Home;

