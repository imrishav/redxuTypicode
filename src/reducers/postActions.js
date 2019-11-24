import { FETCH_POSTS, NEW_POSTS } from "./types";

export const fetchPost = () => dispatch => {
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then(res => res.json())
    .then(posts =>
      dispatch({
        type: FETCH_POSTS,
        payload: posts
      })
    );
};

export const newPost = data => dispatch => {
  fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-type": "application/json; charset=UTF-8"
    }
  })
    .then(res => res.json())
    .then(post =>
      dispatch({
        type: NEW_POSTS,
        payload: post
      })
    );
};
