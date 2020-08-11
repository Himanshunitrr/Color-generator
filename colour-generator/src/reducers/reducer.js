import { combineReducers } from "redux";
import { toggleLockReducer } from "./ToggleLock";

const rootReducer = combineReducers({
  toggleLockReducer: toggleLockReducer,
});
export default rootReducer;
