import React from "react";
import PropTypes from "prop-types";
import MenuList from "@material-ui/core/MenuList";
import MenuItem from "@material-ui/core/MenuItem";
import Divider from "@material-ui/core/Divider";
import Paper from "@material-ui/core/Paper";
import { withStyles } from "@material-ui/core/styles";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import {
  Person,
  School,
  Class,
  Mood,
  Notifications
} from "@material-ui/icons/";

const styles = theme => ({
  menuItem: {
    "&:focus": {
      backgroundColor: theme.palette.primary.main,
      "& $primary, & $icon": {
        color: theme.palette.common.white
      }
    }
  },
  primary: {},
  icon: {}
});

function ListItemComposition(props) {
  const { classes } = props;

  return (
    <MenuList>
      <MenuItem className={classes.menuItem}>
        <ListItemIcon className={classes.icon}>
          <Person />
        </ListItemIcon>
        <ListItemText
          classes={{ primary: classes.primary }}
          inset
          primary="Users"
        />
      </MenuItem>

      <MenuItem className={classes.menuItem}>
        <ListItemIcon className={classes.icon}>
          <School />
        </ListItemIcon>
        <ListItemText
          classes={{ primary: classes.primary }}
          inset
          primary="Instructors"
        />
      </MenuItem>

      <MenuItem className={classes.menuItem}>
        <ListItemIcon className={classes.icon}>
          <Mood />
        </ListItemIcon>
        <ListItemText
          classes={{ primary: classes.primary }}
          inset
          primary="Admins"
        />
      </MenuItem>

      <MenuItem className={classes.menuItem}>
        <ListItemIcon className={classes.icon}>
          <Class />
        </ListItemIcon>
        <ListItemText
          classes={{ primary: classes.primary }}
          inset
          primary="Courses"
        />
      </MenuItem>

      <MenuItem className={classes.menuItem}>
        <ListItemIcon className={classes.icon}>
          <Notifications />
        </ListItemIcon>
        <ListItemText
          classes={{ primary: classes.primary }}
          inset
          primary="Notifications"
        />
      </MenuItem>
    </MenuList>
  );
}

ListItemComposition.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ListItemComposition);
