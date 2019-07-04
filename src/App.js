import React from 'react';
import './App.css';
import { Typography, AppBar, Toolbar, Grid } from "@material-ui/core";

function App() {
  return (
    <div className="App">
      <AppBar position="static">
          <Toolbar>
            <Typography variant="h4" color="inherit">
              Aion: iCal filtering service
            </Typography>
          </Toolbar>
          <Grid container spacing={24} justify="center"></Grid>
        </AppBar>
    </div>
  );
}

export default App;
