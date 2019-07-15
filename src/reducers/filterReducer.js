import * as types from "../actions/ActionTypes";

const initialState = {
  summaryInclude: [{ key: 0, label: "foo" }],
  partstatFilter: []
};

const filterReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.UPDATE_SUMMARY_INCLUDE_FILTER:
      return Object.assign({}, state, {
        summaryInclude: action.payload.summaryInclude
      });
    case types.UPDATE_PARTSTAT_FILTER:
      return Object.assign({}, state, {
        partstatFilter: action.payload.partstatFilter
      });
    default:
      return state;
  }
};

export default filterReducer;
