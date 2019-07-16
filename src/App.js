import React, { Component } from "react";
import "./App.css";
import {
  Typography,
  AppBar,
  Toolbar,
  Grid,
  CircularProgress,
  Paper,
  Link
} from "@material-ui/core";
import FilterForm from "./components/FilterForm";
import { connect } from "react-redux";
import { CALENDAR_PATH, AION_URL } from "./Config";

const mapStateToProps = state => ({
  ...state
});

class App extends Component {
  getBody() {
    if (this.props.appReducer.isLoading) {
      return <CircularProgress />;
    } else {
      if (
        this.props.aionReducer.filterId &&
        this.props.aionReducer.calendarId
      ) {
        let filterId = this.props.aionReducer.filterId;
        let calendarId = this.props.aionReducer.calendarId;
        let url = `${AION_URL}/${CALENDAR_PATH}/${calendarId}/apply/${filterId}`;
        return (
          <Paper>
            Your filtered calendar can be found here:{" "}
            <Link href={url}>{url}</Link>
          </Paper>
        );
      } else {
        return (
          <Grid container justify="center">
            <Grid item xs={8}>
              <FilterForm />
            </Grid>
          </Grid>
        );
      }
    }
  }

  render() {
    return (
      <div className="App">
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h4" color="inherit">
              Aion: Calendar filter
            </Typography>
          </Toolbar>
        </AppBar>
        {this.getBody()}
      </div>
    );
  }
}

export default connect(mapStateToProps)(App);
