import { combineReducers } from "redux";
import HandleCard from "./HandleCard";
import userReducer from "./userReducer";

const rootReducers = combineReducers({
  HandleCard,
  user: userReducer,
});

export default rootReducers;
