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

const drawerItems = [
  { title: "Users", icon: <Person /> },
  { title: "Instructors", icon: <School /> },
  { title: "Courses", icon: <Class /> },
  { title: "Admins", icon: <Mood /> },
  { title: "Notifications", icon: <Notifications /> }
];

export class AdminPanel extends Component {
  render() {
    return (
      <AppDrawer appTitle="ImIn!" items={drawerItems} >
        <UserLayout />
      </AppDrawer>
    );
  }
}

export default AdminPanel;
