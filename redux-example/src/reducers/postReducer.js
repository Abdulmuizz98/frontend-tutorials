import { NEW_POST, FETCH_POSTS } from "../actions/types";

const initialState = {
  items: [],
  item: {},
};

function postReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_POSTS:
      console.log("reducing");
      return {
        ...state,
        items: action.payload,
      };

    case NEW_POST:
      return {
        ...state,
        item: action.payload,
      };

    default:
      return state;
  }
}

export default postReducer;
