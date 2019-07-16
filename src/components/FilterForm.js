import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import { submitForm, updateRsvpStatuses } from "../actions/Actions";
import {
  FormGroup,
  Button,
  FormControlLabel,
  Checkbox,
  Typography,
  Paper
} from "@material-ui/core";
import { connect } from "react-redux";
import {
  ACCEPTED,
  DECLINED,
  NEEDS_ACTION,
  TENTATIVE
} from "../external/aion/RsvpStatus";

const mapStateToProps = state => ({
  ...state
});

const mapDispatchToProps = dispatch => ({
  updateRsvpStatuses: rsvpStatuses =>
    dispatch(updateRsvpStatuses(rsvpStatuses)),
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

const rsvpMap = [
  { displayName: "Going", value: ACCEPTED },
  { displayName: "Not Going", value: DECLINED },
  { displayName: "Maybe", value: TENTATIVE },
  { displayName: "No Reply", value: NEEDS_ACTION }
];

class FilterForm extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleUpdateRsvp = this.handleUpdateRsvp.bind(this);
  }

  handleSubmit(e) {
    this.props.submitForm(this.props.calendarReducer, this.props.filterReducer);
  }

  handleUpdateRsvp(value) {
    let rsvpStatuses = this.props.filterReducer.rsvpStatuses;
    let updated;
    if (rsvpStatuses.includes(value)) {
      updated = rsvpStatuses.filter(item => item !== value);
    } else {
      rsvpStatuses.push(value);
      updated = rsvpStatuses;
    }
    this.props.updateRsvpStatuses(updated);
  }

  getBody() {
    return (
      <div>
        <FormGroup row>
          <Typography variant="h6" component="h2">
            Facebook event filter
          </Typography>
        </FormGroup>
        {rsvpMap.map(item => (
          <FormGroup key={item.value} row>
            <FormControlLabel
              control={
                <Checkbox
                  checked={this.props.filterReducer.rsvpStatuses.includes(
                    item.value
                  )}
                  onChange={() => this.handleUpdateRsvp(item.value)}
                />
              }
              label={item.displayName}
            />
          </FormGroup>
        ))}
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
