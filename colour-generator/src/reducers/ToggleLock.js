import {
  TOGGLE_LOCK
} from "../action-types/ToggleLock";

const InitialState = {
  whichColorsAreLocked: [0, 0, 0, 0, 0],
};

export function toggleLockReducer(state = InitialState, action) {
  switch (action.type) {
    case TOGGLE_LOCK:
      let colorToBeLocked = 0;
      let loopHelper = e.target.parentElement.parentElement.parentElement;
      while (loopHelper.previousElementSibling) {
        loopHelper = loopHelper.previousElementSibling;
        colorToBeLocked++;
      }
      let whichColorsAreLocked = this.props.whichColorsAreLocked;
      whichColorsAreLocked[colorToBeLocked]
        ? (whichColorsAreLocked[colorToBeLocked] = 0)
        : (whichColorsAreLocked[colorToBeLocked] = 1);
      return {
        whichColorsAreLocked: whichColorsAreLocked,
      };
    default:
      return state;
  }
}
