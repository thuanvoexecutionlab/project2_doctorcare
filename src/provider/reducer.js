import { TOGGLE_DRAWER } from "./constants";

export const initialState = {
  drawer: true,
};

function reducer(state, action) {
  switch (action.type) {
    case TOGGLE_DRAWER:
      return {
        ...state,
        drawer: action.payload,
      };
    default:
      return state;
  }
}

export default reducer;
