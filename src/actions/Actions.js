import * as types from "./ActionTypes";

export const updateCalendarUrl = newUrl => dispatch => {
  dispatch({
    type: types.UPDATE_CALENDAR_URL,
    payload: {
      url: newUrl
    }
  });
};

export const submitCalendar = () => dispatch => {
  // Todo: Do POST request to Aion here
  new Promise((resolve, reject) => {
    dispatch({ type: types.CALENDAR_LOADING });
    setTimeout(() => resolve(), 3000);
  }).then(() => {
    dispatch({ type: types.CALENDAR_LOADING_COMPLETED });
  });
};
