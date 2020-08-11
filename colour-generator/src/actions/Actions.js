import {TOGGLE_LOCK} from "../action-types/ToggleLock"

export const toggleLock = (e) => {
  return {
    type: TOGGLE_LOCK,
    e
  };
};