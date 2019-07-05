import React, { Component } from "react";
import { FormControl, TextField } from "@material-ui/core";
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
      <FormControl>
        <TextField
          label="Calendar URL"
          name="calendarUrl"
          value={this.props.calendarReducer.url}
          onChange={this.handleChange}
        />
      </FormControl>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CalendarForm);
