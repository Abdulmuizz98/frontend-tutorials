import React, { Component } from "react";
import { createPost } from "../actions/postActions";
import { connect } from "react-redux";

class AddPosts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      body: "",
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    this.setState({ ...this.state, [e.target.name]: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();

    const post = {
      title: this.state.title,
      body: this.state.body,
    };

    // Post the new payload to the database
    // fetch("https://jsonplaceholder.typicode.com/posts", {
    //   method: "POST",
    //   headers: {
    //     "content-type": "application/json",
    //   },
    //   body: JSON.stringify(post),
    // })
    //   .then((res) => res.json())
    //   .then((data) => console.log(data));
    this.props.createPost(post);
  }

  render() {
    return (
      <div>
        <h2>Add Posts</h2>
        <form action="" onSubmit={this.onSubmit}>
          <div>
            <label htmlFor="title">Title:</label>
            <br />
            <input
              id="title"
              type="text"
              name="title"
              value={this.state.title}
              onChange={this.onChange}
            />
          </div>
          <br />
          <div>
            <label htmlFor="body">Body:</label>
            <br />
            <textarea
              id="body"
              name="body"
              value={this.state.body}
              onChange={this.onChange}
            ></textarea>
          </div>
          <br />
          <button type="submit">Add Post</button>
        </form>
      </div>
    );
  }
}

export default connect(null, { createPost })(AddPosts);
