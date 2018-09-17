import * as actionTypes from "../actions/actionTypes";
import _ from "lodash";
import screens from '../../Panels/Screens'

const initialState = {
  currentScreen: screens.admin.userScreen,
  userList: []
};

export default (oldState = initialState, action) => {
  const state = _.cloneDeep(oldState);

  switch (action.type) {
    case actionTypes.SCREEN_CHANGED:
      state.currentScreen = action.screenName;
      break;

    default:
      break;
  }

  return state;
};
