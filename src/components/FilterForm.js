import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import { updateRsvpAttending, submitForm } from "../actions/Actions";
import {
  FormGroup,
  Button,
  FormControlLabel,
  Checkbox,
  Typography,
  Paper
} from "@material-ui/core";
import { connect } from "react-redux";

const mapStateToProps = state => ({
  ...state
});

const mapDispatchToProps = dispatch => ({
  updateRsvpAttending: value => dispatch(updateRsvpAttending(value)),
  submitForm: (calendarReducer, filterReducer) =>
    dispatch(submitForm(calendarReducer, filterReducer))
});

const styles = theme => ({
  root: {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap"
  },
  chip: {
    margin: theme.spacing(1)
  }
});

class FilterForm extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.updateRsvpAttending = this.updateRsvpAttending.bind(this);
  }

  handleSubmit(e) {
    this.props.submitForm(this.props.calendarReducer, this.props.filterReducer);
  }

  handleDelete(chipToDelete) {
    console.log(`Deleted ${chipToDelete.label}`);
  }

  updateRsvpAttending() {
    this.props.updateRsvpAttending(!this.props.filterReducer.rsvpAttending);
  }

  getBody() {
    return (
      <div>
        <FormGroup row>
          <Typography variant="h6" component="h2">
            Facebook event filter
          </Typography>
        </FormGroup>
        <FormGroup row>
          <FormControlLabel
            control={
              <Checkbox
                checked={this.props.filterReducer.rsvpAttending}
                onChange={() => this.updateRsvpAttending()}
              />
            }
            label="Attending"
          />
        </FormGroup>
        <FormGroup row>
          <Button onClick={this.handleSubmit}>Submit</Button>
        </FormGroup>
      </div>
    );
  }

  render() {
    return (
      <Paper>
        <Typography variant="h5" component="h2">
          Filter
        </Typography>
        {this.getBody()}
      </Paper>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(FilterForm));
