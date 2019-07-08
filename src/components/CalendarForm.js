import React, { Component } from "react";
import {
  FormGroup,
  TextField,
  Button,
  CircularProgress,
  Paper,
  Typography
} from "@material-ui/core";
import { connect } from "react-redux";
import { updateCalendarUrl, submitCalendar } from "../actions/Actions";

const mapStateToProps = state => ({
  ...state
});

const mapDispatchToProps = dispatch => ({
  updateCalendarUrl: newUrl => dispatch(updateCalendarUrl(newUrl)),
  submitCalendar: url => dispatch(submitCalendar(url))
});

class CalendarForm extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.props.updateCalendarUrl(e.target.value.trim());
  }

  handleSubmit(e) {
    this.props.submitCalendar(this.props.calendarReducer.url);
  }

  getBody() {
    if (this.props.calendarReducer.isLoading) {
      return <CircularProgress />;
    } else {
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
          <FormGroup row>
            <Button onClick={this.handleSubmit}>Submit</Button>
          </FormGroup>
        </div>
      );
    }
  }

  render() {
    return (
      <Paper>
        <Typography variant="h5" component="h2">
          Add a calendar
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
