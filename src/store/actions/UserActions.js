import * as actionTypes from './actionTypes'

export const changeScreen = screenName => ({
  type: actionTypes.SCREEN_CHANGED,
  screenName
})