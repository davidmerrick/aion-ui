import React, { Component } from "react";
import { FormGroup, TextField } from "@material-ui/core";
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

  render() {
    return (
      <FormGroup row>
        <TextField
          label="Calendar URL"
          name="calendarUrl"
          value={this.props.calendarReducer.url}
          onChange={this.handleChange}
          error={this.props.calendarReducer.validationMessage != null}
          helperText={this.props.calendarReducer.validationMessage}
        />
      </FormGroup>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CalendarForm);
