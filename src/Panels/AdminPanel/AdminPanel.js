import React, { Component } from "react";
import AppDrawer from "../../Components/AppDrawer/AppDrawer";
import UserLayout from "./UserLayout/UserLayout";
import {
  Person,
  School,
  Class,
  Mood,
  Notifications
} from "@material-ui/icons/";
import { connect } from "react-redux";
import screens from "../Screens";

const drawerItems = [
  { title: "Users", icon: <Person /> },
  { title: "Instructors", icon: <School /> },
  { title: "Courses", icon: <Class /> },
  { title: "Admins", icon: <Mood /> },
  { title: "Notifications", icon: <Notifications /> }
];

class AdminPanel extends Component {
  render() {
    console.log(this.props);

    let screen = <div>Hello to ImIn!!</div>;
    switch (this.props.currentScreen) {
      case screens.admin.userScreen:
        screen = <UserLayout />;
        break;

      case screens.admin.TEST_SCREEN:
        screen = <div>TEST_SCREEN</div>;
        break;

      default:
        break;
    }
    return (
      <AppDrawer appTitle="ImIn!" items={drawerItems}>
        {screen}
      </AppDrawer>
    );
  }
}

const mapStateToProps = newState => {
  console.log(newState);
  return {
    currentScreen: newState.AP_userReducer.currentScreen
  };
};

export default connect(mapStateToProps)(AdminPanel);
