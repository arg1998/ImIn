import React, { Component } from "react";
import { UserFilter } from "../../../Components/UserFilter/UserFilter";
import { Button } from "@material-ui/core";
import { Add } from "@material-ui/icons";
import classes from "./UserLayout.css";
import UserItemInfo from "../../../Components/UserItemInfo/UserItemInfo";

const users = [
  { fullName: "Amir Reza Ghorbani", studentID: "811995162" },
  { fullName: "Shima Shiuey", studentID: "811995136" }
];

export class UserLayout extends Component {
  render() {
    const userList = users.map(user => (
      <UserItemInfo
        key={user.studentID}
        fullName={user.fullName}
        studentID={user.studentID}
      />
    ));

    return (
      <div style={{ position: "relative", height: "100%" }}>
        {/* Filter Controls */}
        <UserFilter />

        {/* list of users */}
        {userList}

        {/* FAB button */}
        <div className={classes.fab}>
          <Button
            variant="fab"
            color="secondary"
            aria-label="Add"
            style={{ width: 70, height: 70 }}
          >
            <Add />
          </Button>
        </div>
      </div>
    );
  }
}

export default UserLayout;
