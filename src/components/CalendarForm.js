import React, { Component } from "react";
import { FormGroup, TextField, Paper, Typography } from "@material-ui/core";
import { connect } from "react-redux";
import { updateCalendarUrl } from "../actions/Actions";

const mapStateToProps = state => ({
  ...state
});

const mapDispatchToProps = dispatch => ({
  updateCalendarUrl: newUrl => dispatch(updateCalendarUrl(newUrl))
});

class CalendarForm extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.props.updateCalendarUrl(e.target.value.trim());
  }

  getBody() {
    return (
      <div>
        <FormGroup row>
          <TextField
            label="Calendar URL"
            name="calendarUrl"
            value={this.props.calendarReducer.url}
            onChange={this.handleChange}
          />
        </FormGroup>
      </div>
    );
  }

  render() {
    return (
      <Paper>
        <Typography variant="h5" component="h2">
          Calendar
        </Typography>
        {this.getBody()}
      </Paper>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CalendarForm);
