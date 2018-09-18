import React, { Component } from "react";
import { UserFilter } from "../../../Components/UserFilter/UserFilter";
import UserItemInfo from "../../../Components/UserItemInfo/UserItemInfo";
import { changeScreen } from "../../../store/actions";
import { connect } from "react-redux";
import screens from "../../Screens";
import FAB from "../../../Components/FAB/FAB";

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
        <FAB
          onClick={() => this.props.changeScreen(screens.admin.TEST_SCREEN)}
        />
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
