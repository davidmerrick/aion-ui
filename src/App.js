import React, { Component } from "react";
import "./App.css";
import {
  Typography,
  AppBar,
  Toolbar,
  Grid,
  CircularProgress
} from "@material-ui/core";
import CalendarForm from "./components/CalendarForm";
import FilterForm from "./components/FilterForm";
import { connect } from "react-redux";

const mapStateToProps = state => ({
  ...state
});

class App extends Component {
  getBody() {
    if (this.props.appReducer.isLoading) {
      return <CircularProgress />;
    } else {
      return (
        <Grid container justify="center">
          <Grid item xs={8}>
            <CalendarForm />
          </Grid>
          <Grid item xs={8}>
            <FilterForm />
          </Grid>
        </Grid>
      );
    }
  }

  render() {
    return (
      <div className="App">
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h4" color="inherit">
              Aion: iCal filtering service
            </Typography>
          </Toolbar>
        </AppBar>
        {this.getBody()}
      </div>
    );
  }
}

export default connect(mapStateToProps)(App);
