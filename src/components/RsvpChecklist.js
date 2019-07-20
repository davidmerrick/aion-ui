import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import { updateRsvpStatuses } from "../actions/Actions";
import {
  FormGroup,
  FormControlLabel,
  Checkbox,
  Typography
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

const rsvpMap = [
  { displayName: "Going", value: ACCEPTED },
  { displayName: "Not Going", value: DECLINED },
  { displayName: "Maybe", value: TENTATIVE },
  { displayName: "No Reply", value: NEEDS_ACTION }
];

const mapDispatchToProps = dispatch => ({
  updateRsvpStatuses: rsvpStatuses => dispatch(updateRsvpStatuses(rsvpStatuses))
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

class RsvpChecklist extends Component {
  constructor(props) {
    super(props);
    this.handleUpdateRsvp = this.handleUpdateRsvp.bind(this);
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

  render() {
    return (
      <div>
        <FormGroup row>
          <Typography variant="h6" component="h2">
            RSVP Status
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
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(RsvpChecklist));
