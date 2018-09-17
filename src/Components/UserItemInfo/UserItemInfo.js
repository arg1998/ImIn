import React from "react";
import { withStyles } from "@material-ui/core/styles";
import { Paper, IconButton } from "@material-ui/core/";
import { Delete, Edit } from "@material-ui/icons";
import Typography from "@material-ui/core/Typography";

const styles = theme => ({
  paper: {
    margin: 5,
    marginBottom: 10
  },
  iconContainer: {
    display: "flex",
    justifyContent: "flex-start",
    flexDirection: "column",
    [theme.breakpoints.up("md")]: {
      flexDirection: "row"
    }
  }
});

function UserInfoItme(props) {
  const { classes } = props;

  return (
    <div>
      <Paper className={classes.paper} elevation={3}>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between"
          }}
        >
          <div
            style={{
              flexGrow: 1,
              margin: 10,
              marginBottom: 0,
              paddingBottom: 5
            }}
          >
            <Typography variant="headline" component="h5">
              {props.fullName}
            </Typography>
            <Typography component="p" style={{ fontSize: 16, marginTop: 10 }}>
              {props.studentID}
            </Typography>
          </div>
          <div className={classes.iconContainer}>
            <IconButton component="span">
              <Edit />
            </IconButton>
            <IconButton color="secondary" component="span">
              <Delete />
            </IconButton>
          </div>
        </div>
      </Paper>
    </div>
  );
}

export default withStyles(styles)(UserInfoItme);
