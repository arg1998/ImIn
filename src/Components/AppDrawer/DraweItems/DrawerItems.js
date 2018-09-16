import React from "react";
import PropTypes from "prop-types";
import MenuList from "@material-ui/core/MenuList";
import MenuItem from "@material-ui/core/MenuItem";
import { withStyles } from "@material-ui/core/styles";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";

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
  const { classes, items } = props;

  const _items = items.map((item, index) => (
    <MenuItem key={index + item.title} className={classes.menuItem}>
      <ListItemIcon className={classes.icon}>{item.icon}</ListItemIcon>
      <ListItemText
        classes={{ primary: classes.primary }}
        inset
        primary={item.title}
      />
    </MenuItem>
  ));

  return <MenuList>{_items}</MenuList>;
}

ListItemComposition.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ListItemComposition);
