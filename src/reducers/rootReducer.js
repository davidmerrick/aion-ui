import { combineReducers } from "redux";
import calendarReducer from "./calendarReducer";
import filterReducer from "./filterReducer";
import appReducer from "./appReducer";
import aionReducer from "./aionReducer";

export default combineReducers({
  calendarReducer,
  filterReducer,
  appReducer,
  aionReducer
});
