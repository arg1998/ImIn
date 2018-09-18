import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";
import { Add } from "@material-ui/icons";

const styles = theme => ({
  fab: {
    position: "absolute",
    bottom: 20,
    right: "calc(50% - 25px);",
    [theme.breakpoints.up("md")]: {
      right: "calc(50% - 35px);",
    }
  },
  button: {
    width: 50,
    height: 50,
    [theme.breakpoints.up("md")]: {
      width: 70,
      height: 70
    }
  }
});

class FAB extends Component {
  render() {
    const { classes } = this.props;

    return (
      <div className={classes.fab}>
        <Button
          onClick={this.props.onClick}
          variant="fab"
          color="secondary"
          aria-label="Add"
          className={classes.button}
        >
          <Add />
        </Button>
      </div>
    );
  }
}

export default withStyles(styles, { withTheme: true })(FAB);
