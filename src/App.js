import React from "react";
import "./App.css";
import PostForm from "./PostForm";
import { connect } from "react-redux";
import { fetchPost } from "./reducers/postActions";

class App extends React.Component {
  componentWillMount() {
    this.props.fetchPost();
  }

  componentWillReceiveProps(nextProps) {
    console.log("nextPRops", nextProps.newPost);
    if (nextProps.newPost) {
      this.props.posts.unshift(nextProps.newPost);
    }
  }

  render() {
    const postsRender = this.props.posts.map(post => {
      return (
        <div className="container">
          <div className="card w-75" key={post.id}>
            <div className="card-body">
              <h5 className="card-title">{post.title}</h5>
              <p className="card-text">{post.body}</p>
            </div>
          </div>
        </div>
      );
    });
    return (
      <div className="conatiner">
        <PostForm />
        <br />
        <h1 className="container">Posts :</h1>

        {postsRender}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    posts: state.posts.items,
    newPost: state.posts.item
  };
};

const mapDispatchToProps = dispatch => ({
  fetchPost: () => dispatch(fetchPost())
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
