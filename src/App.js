import React from "react";
import "./App.css";
import { Typography, AppBar, Toolbar, Grid } from "@material-ui/core";
import CalendarForm from "./components/CalendarForm";
import FilterForm from "./components/FilterForm";

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
        <Grid item xs={8}>
          <CalendarForm />
        </Grid>
        <Grid item xs={8}>
          <FilterForm />
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
