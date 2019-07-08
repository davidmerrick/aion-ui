import { combineReducers } from "redux";
import calendarReducer from "./calendarReducer";
import filterReducer from "./filterReducer";

export default combineReducers({
  calendarReducer,
  filterReducer
});
