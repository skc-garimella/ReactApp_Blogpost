
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions/index';
import { bindActionCreators } from 'redux'
import { Link } from 'react-router';

class PostsIndex extends Component {

//Invoked once, both on the client and server, immediately before the initial rendering occurs.
  componentWillMount(){
    this.props.fetchPosts();
  }

  render(){
    console.log(this);
    return(
      <div>
        <div className="text-xs-right">
          <Link to="/posts/new" className="btn btn-primary">
            Create new Post
          </Link>
        </div>
        <h3 className="text-xs-center text-capitalize">Posts</h3>
        <div className="list-group" style={{margin : "20px"}}>
          {this.props.blogPosts.all.map( (post) => { return (
            <Link to={`/posts/${post.id}`} key={post.id} className="list-group-item list-group-item-action row flex-items-xs-center">
              <h5 className="list-group-item-heading col-xs-8">{post.title}</h5>
              <p className="list-group-item-text text-xs-right col-xs-4 text-warning">{post.categories}</p>
            </Link> )} )
          }
        </div>
      </div>
    );
  }
}


function mapStateToProps(state) {
  return(
    { blogPosts : state.blogPosts }
  );
}

function mapDispatchToProps(dispatch) {
  return(bindActionCreators({ fetchPosts }, dispatch));
}

export default connect(mapStateToProps, mapDispatchToProps)(PostsIndex);
