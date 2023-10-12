import React, { Component } from "react";
import { fetchPosts } from "../actions/postActions";
import { connect } from "react-redux";

class Posts extends Component {
  //   static propTypes = {second: third}
  //   constructor(props) {
  //     super(props);
  //     this.state = {
  //       posts: [],
  //     };
  //   }

  componentWillMount() {
    // fetch("https://jsonplaceholder.typicode.com/posts")
    //   .then((res) => res.json())
    //   .then((data) => this.setState({ ...this.state, posts: data }));

    this.props.fetchPosts();
  }

  componentWillReceiveProps(nextProps) {
    // console.log("receiving props");
    if (nextProps.newPost) {
      this.props.posts.unshift(nextProps.newPost);
    }
  }

  render() {
    return (
      <div>
        <h2>Posts</h2>
        {!this.props.posts.length
          ? "No posts"
          : this.props.posts.map((post) => (
              <div key={post.id}>
                <h3>{post.title}</h3>
                <p>{post.body}</p>
              </div>
            ))}
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  posts: state.posts.items,
  newPost: state.posts.item,
});
export default connect(mapStateToProps, { fetchPosts })(Posts);
// export default connect(null, { fetchPosts })(Posts);
// export default connect(mapStateToProps)(Posts);
