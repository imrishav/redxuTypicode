import { FETCH_POSTS, NEW_POSTS } from "./types";

const intialState = {
  items: [],
  item: {}
};

export default function(state = intialState, action) {
  switch (action.type) {
    case FETCH_POSTS:
      // console.log("object", action.payload);
      return {
        ...state,
        items: action.payload
      };
    case NEW_POSTS:
      console.log("action", action.payload);
      return {
        ...state,
        item: action.payload
      };
    default:
      return state;
  }
}
