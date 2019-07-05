import * as types from "./ActionTypes";

export const updateCalendarUrl = newUrl => dispatch => {
  dispatch({
    type: types.UPDATE_CALENDAR_URL,
    payload: {
      url: newUrl
    }
  });
};
