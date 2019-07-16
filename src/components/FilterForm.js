import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import { submitForm } from "../actions/Actions";
import { FormGroup, Button, Typography, Paper } from "@material-ui/core";
import { connect } from "react-redux";
import RsvpChecklist from "./RsvpChecklist";
import CalendarForm from "./CalendarForm";

const mapStateToProps = state => ({
  ...state
});

const mapDispatchToProps = dispatch => ({
  submitForm: (calendarReducer, filterReducer) =>
    dispatch(submitForm(calendarReducer, filterReducer))
});

const styles = theme => ({
  root: {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap"
  }
});

class FilterForm extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    this.props.submitForm(this.props.calendarReducer, this.props.filterReducer);
  }

  render() {
    return (
      <Paper>
        <Typography variant="h5" component="h2">
          Filter a calendar
        </Typography>
        <CalendarForm />
        <RsvpChecklist />
        <FormGroup row>
          <Button onClick={this.handleSubmit}>Submit</Button>
        </FormGroup>
      </Paper>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(FilterForm));
