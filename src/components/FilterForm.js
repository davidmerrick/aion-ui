import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import {
  FormGroup,
  TextField,
  Button,
  Chip,
  Typography,
  Paper
} from "@material-ui/core";
import { connect } from "react-redux";

const mapStateToProps = state => ({
  ...state
});

const mapDispatchToProps = dispatch => ({});

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
  }

  handleSubmit(e) {
    this.props.submitCalendar(this.props.calendarReducer.url);
  }

  handleDelete(chipToDelete) {
    console.log(`Deleted ${chipToDelete.label}`);
  }

  getBody() {
    return this.props.filterReducer.summaryInclude.map(item => {
      return (
        <Chip
          key={item.key}
          label={item.label}
          onDelete={() => this.handleDelete(item)}
          className={this.props.classes.chip}
        />
      );
    });
  }

  render() {
    return (
      <Paper>
        <Typography variant="h5" component="h2">
          Create a filter
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
