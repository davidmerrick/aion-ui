import React from 'react';
import './App.css';
import { Typography, AppBar, Toolbar, FormControl, Input, InputLabel } from "@material-ui/core";

function App() {
  return (
    <div className="App">
      <AppBar position="static">
          <Toolbar>
            <Typography variant="h4" color="inherit">
              Aion: iCal filtering service
            </Typography>
          </Toolbar>
        </AppBar>
        <FormControl>
          <InputLabel htmlFor="my-input">Calendar URL</InputLabel>
          <Input id="my-input" aria-describedby="my-helper-text" />
        </FormControl>
    </div>
  );
}

export default App;
