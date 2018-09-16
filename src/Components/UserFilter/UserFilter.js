import React, { Component } from "react";
import {
  TextField,
  Typography,
  Button,
  Select,
  MenuItem,
  Input
} from "@material-ui/core";
import classes from "./UserFilter.css";

export class UserFilter extends Component {
  state = {
    filterType: "studentID"
  };

  _onFilterTypeChangedHandler = event => {
    this.setState({ filterType: event.target.value });
  };

  render() {
    return (
      <div style={{marginBottom: 20}}>
        <div style={{marginBottom: 10}}>
          <TextField
            id="search"
            label="Search Value"
            type="search"
            margin="normal"
            className={classes.searchField}
          />
        </div>
        <div>
          <Typography
            style={{ display: "inline-block", fontSize: 18, marginRight: 15 }}
          >
            Type
          </Typography>
          <Select
            value={this.state.filterType}
            onChange={this._onFilterTypeChangedHandler}
            className={classes.filterType}
            input={<Input name="FilterType" id="FilterType-helper" />}
          >
            <MenuItem value="studentID">Student ID</MenuItem>
            <MenuItem value="firstName">First Name</MenuItem>
            <MenuItem value="lastName">Last Name</MenuItem>
          </Select>
          <Button
            className={classes.filterButton}
            variant="contained"
            color="primary"
          >
            Filter
          </Button>
        </div>
      </div>
    );
  }
}

export default UserFilter;
