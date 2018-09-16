import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import Hidden from "@material-ui/core/Hidden";
import MenuIcon from "@material-ui/icons/Menu";
import DrawerItems from "./DraweItems/DrawerItems";
import Wrapper from "../../HOC/Wrapper";

const drawerWidth = 260;

const styles = theme => ({
  root: {
    flexGrow: 1,
    height: "100%",
    zIndex: 1,
    overflow: "visible",
    position: "relative",
    display: "flex",
    width: "100%"
  },
  appBar: {
    position: "fixed",
    marginLeft: drawerWidth,
    [theme.breakpoints.up("md")]: {
      width: `calc(100% - ${drawerWidth}px)`
    }
  },
  navIconHide: {
    [theme.breakpoints.up("md")]: {
      display: "none"
    }
  },
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    height: "100%",
    width: drawerWidth,
    [theme.breakpoints.up("md")]: {
      position: "fixed"
    }
  },
  content: {
    boxSizing: "border-box",
    flexGrow: 1,
    width: "100%",
    height: "100%",
    padding: 10,
    [theme.breakpoints.up("md")]: {
      marginLeft: drawerWidth
    },
    marginTop: 40
  }
});

class AppDrawer extends React.Component {
  state = {
    mobileOpen: false
  };

  handleDrawerToggle = () => {
    this.setState(state => ({ mobileOpen: !state.mobileOpen }));
  };

  render() {
    const { classes, theme } = this.props;

    const drawer = (
      <Wrapper>
        <div
          className={classes.toolbar}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontSize: 22,
            fontFamily: "sans-derif",
            borderBottomWidth: 2,
            borderBottomColor: "#ccc",
            borderBottomStyle: "solid"
          }}
        >
          ImIn! Dashboard
        </div>
        <DrawerItems />
      </Wrapper>
    );

    return (
      <div
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          boxSizing: "border-box"
        }}
      >
        <div className={classes.root}>
          <AppBar className={classes.appBar}>
            <Toolbar>
              <IconButton
                color="inherit"
                aria-label="Open drawer"
                onClick={this.handleDrawerToggle}
                className={classes.navIconHide}
              >
                <MenuIcon />
              </IconButton>
              <Typography variant="title" color="inherit" noWrap>
                {this.props.appTitle}
              </Typography>
            </Toolbar>
          </AppBar>
          <Hidden mdUp>
            <Drawer
              variant="temporary"
              anchor={theme.direction === "rtl" ? "right" : "left"}
              open={this.state.mobileOpen}
              onClose={this.handleDrawerToggle}
              classes={{
                paper: classes.drawerPaper
              }}
              ModalProps={{
                keepMounted: true // Better open performance on mobile.
              }}
            >
              {drawer}
            </Drawer>
          </Hidden>
          <Hidden smDown implementation="css">
            <Drawer
              variant="permanent"
              open
              classes={{
                paper: classes.drawerPaper
              }}
            >
              {drawer}
            </Drawer>
          </Hidden>
          <main
            className={classes.content}
            style={{
              borderColor: "#bbb",
              borderLeftWidth: 2,
              borderStyle: "solid"
            }}
          >
            {this.props.children}
          </main>
        </div>
      </div>
    );
  }
}

AppDrawer.propTypes = {
  //provided by withStyles()
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,

  //provided by dev
  items: PropTypes.object.isRequired, // [ {title: string, icon: iconComponent} ]
  appTitle: PropTypes.string.isRequired
};

export default withStyles(styles, { withTheme: true })(AppDrawer);
