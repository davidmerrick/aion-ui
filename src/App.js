import React from "react";
import "./App.css";
import { Typography, AppBar, Toolbar, Grid } from "@material-ui/core";
import CalendarForm from "./components/CalendarForm";

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
      <Grid container justify="center">
        <CalendarForm />
      </Grid>
    </div>
  );
}

export default App;
