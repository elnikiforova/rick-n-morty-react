import { SET_CHAR } from './actionTypes';

const initState = {};

export default function reducer(state = initState, action) {
  switch (action.type) {
    case SET_CHAR:
      return {
        ...state,
        char: action.payload.char,
      };
    default:
      return state;
  }
}
