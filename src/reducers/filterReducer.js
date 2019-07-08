import * as types from "../actions/ActionTypes";

const initialState = {
  summaryInclude: [{ key: 0, label: "foo" }]
};

const filterReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.UPDATE_SUMMARY_INCLUDE_FILTER:
      return Object.assign({}, state, {
        summaryInclude: action.payload.summaryInclude
      });
    default:
      return state;
  }
};

export default filterReducer;
