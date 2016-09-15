
import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { getPost, deletePost } from '../actions/index';
import { bindActionCreators } from 'redux'
import { Link } from 'react-router';

class PostsIndex extends Component {

  static contextTypes = {
    router: PropTypes.object
  };

//Invoked once, both on the client and server, immediately before the initial rendering occurs.
  componentWillMount(){
    //console.log(this);
    this.props.getPost(this.props.params.id);
  }

  deleteThisPost() {
    console.log(this);
    return this.props.deletePost(this.props.blogPost.post.id).then( (response) => {
      //console.log(response);
      this.context.router.push("/");
    } );

  }

  render(){
    console.log(this);
    if(!this.props.blogPost.post) {
      return(
        <div>
          <h3>Loading...</h3>
        </div>
      );
    }
    return(
      <div>
        <div className="row" style={{marginBottom : "40px"}}>
          <Link to="/" className="pull-xs-left font-weight-bold">&lt;Return to list of posts</Link>
          <button onClick={this.deleteThisPost.bind(this)} type="button" className="btn btn-danger pull-xs-right">
            DELETE Post
          </button>
        </div>
        <div>
          <h3 className="text-xs-center text-capitalize">{this.props.blogPost.post.title}</h3>
          <p className="text-warning font-italic"><span className="text-muted font-weight-bold">Categories: </span>{this.props.blogPost.post.categories}</p>
          <p className="lead blockquote">{this.props.blogPost.post.content}</p>
        </div>
      </div>
    );
  }
}


function mapStateToProps(state) {
  return(
    { blogPost : state.blogPosts }
  );
}

function mapDispatchToProps(dispatch) {
  return(bindActionCreators({ getPost, deletePost }, dispatch));
}

export default connect(mapStateToProps, mapDispatchToProps)(PostsIndex);
