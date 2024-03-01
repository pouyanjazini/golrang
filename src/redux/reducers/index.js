import { combineReducers } from "redux";
import { people, person } from "./person";
import { post, posts } from "./post";

const reducer = combineReducers({
  people,
  person,
  posts,
  post,
});

export default reducer;
