import React, { Component } from "react";
import { Typography, AppBar, Toolbar, Grid } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import "./App.css";

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: "center",
    color: theme.palette.text.secondary
  }
});

class App extends Component {
  render() {
    return (
      <div className={this.props.classes.root}>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h4" color="inherit">
              Aion: iCal proxy and filtering service.{" "}
            </Typography>
          </Toolbar>
        </AppBar>
        <Grid container spacing={24} justify="center" />
      </div>
    );
  }
}

export default withStyles(styles)(App);
