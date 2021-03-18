import { SET_CHAR } from './actionTypes';

export const setCharAC = (char) => ({
  type: SET_CHAR,
  payload: {
    char
  }
});
