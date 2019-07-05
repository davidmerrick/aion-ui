import React from "react";
import "./App.css";
import { Typography, AppBar, Toolbar } from "@material-ui/core";
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
      <CalendarForm />
    </div>
  );
}

export default App;
