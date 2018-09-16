import React, { Component } from "react";
import AppDrawer from "../../Components/AppDrawer/AppDrawer";
import UserLayout from "./UserLayout/UserLayout";

export class AdminPanel extends Component {
  render() {

    return (
      <AppDrawer appTitle="ImIn!">
        <UserLayout />
      </AppDrawer>
    );
  }
}

export default AdminPanel;
