import React, { Component } from "react";
import { UserFilter } from "../../../Components/UserFilter/UserFilter";
import { Button } from "@material-ui/core";
import { Add } from "@material-ui/icons";
import classes from "./UserLayout.css";
import UserItemInfo from "../../../Components/UserItemInfo/UserItemInfo";
import { changeScreen } from "../../../store/actions";
import { connect } from "react-redux";
import screens from "../../Screens";

const users = [
  { fullName: "Amir Reza Ghorbani", studentID: "811995162" },
  { fullName: "Shima Shiuey", studentID: "811995136" },
  { fullName: "Amir Reza Ghorbani", studentID: "811995162" },
  { fullName: "Shima Shiuey", studentID: "811995136" },
  { fullName: "Amir Reza Ghorbani", studentID: "811995162" },
  { fullName: "Shima Shiuey", studentID: "811995136" },
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
      <div
        style={{
          position: "relative",
          height: "100%",
          paddingLeft: 10,
          paddingRight: 10
        }}
      >
        {/* Filter Controls */}
        <UserFilter />

        {/* list of users */}
        {userList}

        {/* FAB button */}
        <div className={classes.fab}>
          <Button
            onClick={() => this.props.changeScreen(screens.admin.TEST_SCREEN)}
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

const mapDispatchesToProps = dispatch => ({
  changeScreen: screenName => dispatch(changeScreen(screenName))
});

export default connect(
  null,
  mapDispatchesToProps
)(UserLayout);
