import { TOGGLE_LOCK } from "../action-types/ToggleLock";

const InitialState = {
  whichColorsAreLocked: [0, 0, 0, 0, 0],
  isColor1Locked: 0,
  isColor2Locked: 0,
  isColor3Locked: 0,
  isColor4Locked: 0,
  isColor5Locked: 0,
};

export function toggleLockReducer(state = InitialState, action) {
  switch (action.type) {
    case TOGGLE_LOCK:
      let colorToBeLocked = 0;
      let loopHelper =
        action.e.target.parentElement.parentElement.parentElement;
      while (loopHelper.previousElementSibling) {
        loopHelper = loopHelper.previousElementSibling;
        colorToBeLocked++;
      }
      let whichColorsAreLocked = state.whichColorsAreLocked;
      whichColorsAreLocked[colorToBeLocked]
        ? (whichColorsAreLocked[colorToBeLocked] = 0)
        : (whichColorsAreLocked[colorToBeLocked] = 1);
      return {
        whichColorsAreLocked: whichColorsAreLocked,
        isColor1Locked: whichColorsAreLocked[0],
        isColor2Locked: whichColorsAreLocked[1],
        isColor3Locked: whichColorsAreLocked[2],
        isColor4Locked: whichColorsAreLocked[3],
        isColor5Locked: whichColorsAreLocked[4],
      };
    default:
      return state;
  }
}
