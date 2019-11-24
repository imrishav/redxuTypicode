import React, { Component } from "react";
import { connect } from "react-redux";
import { newPost } from "./reducers/postActions";

class PostForm extends Component {
  state = {
    title: "",
    body: ""
  };

  onSubmit = e => {
    e.preventDefault();

    this.props.newPost(this.state);
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <div className="container">
        <h1>Add Post</h1>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Title</label>
            <input
              type="text"
              name="title"
              className="form-control"
              placeholder="Enter Post Title"
              value={this.state.name}
              onChange={this.onChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputPassword1">Enter Description</label>
            <input
              type="text"
              name="body"
              className="form-control"
              placeholder="Enter Description"
              onChange={this.onChange}
              value={this.state.post}
            />
          </div>
          <button onSubmit={this.onSubmit} className="btn btn-primary">
            Sublit
          </button>
        </form>
      </div>
    );
  }
}

export default connect(null, { newPost })(PostForm);
