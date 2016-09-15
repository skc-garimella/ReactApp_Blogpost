
import React, { Component, PropTypes } from 'react';
import { Field, reduxForm } from 'redux-form';
import { createPost } from '../actions/index';
import { Link, RouterContext } from 'react-router';



class PostsNew extends Component {

//https://facebook.github.io/react/docs/context.html
//https://github.com/reactjs/react-router/blob/master/upgrade-guides/v2.0.0.md#programmatic-navigation

  static contextTypes = {
    router: PropTypes.object
  };

  submitMyForm(data) {
    const {createPost, resetForm} = this.props;
    return createPost(data).then(() => {
      resetForm();
      this.context.router.push("/");

    });
  }


//handleSubmit(this.props.createPost) -> this calls action creator with the form as it parameter.
//i.e, it will have i/p field Title as title, field categories as categories and content as content.
  render() {
    //console.log(this);
    const { fields: { title, categories, content }, handleSubmit, pristine, submitting } = this.props;
    return(
          <form onSubmit={handleSubmit(this.submitMyForm.bind(this))}>
          <Link to="/" className="pull-xs-right font-weight-bold">&lt;Return to list of posts</Link>
          <h3>Create A New Post</h3>
          <div className={`form-group ${title.invalid && title.touched ? "has-danger" : ''}`} >
            <label>Title</label>
            <input type="text" className="form-control" id="title" {...title} />
            <div className="form-control-feedback">
              {title.touched ? title.error : ''}
            </div>
          </div>
          <div className={`form-group ${categories.invalid && categories.touched ? "has-danger" : ''}`} >
            <label>Category</label>
            <input type="text" className="form-control" id="categories" {...categories} />
            <div className="form-control-feedback">
              {categories.touched ? categories.error : ''}
            </div>
          </div>
          <div className={`form-group ${content.invalid && content.touched ? "has-danger" : ''}`} >
            <label>Content</label>
            <textarea className="form-control" id="content" {...content} />
            <div className="form-control-feedback">
              {content.touched ? content.error : ''}
            </div>
          </div>
          <button type="submit" className="btn btn-primary" disabled={ pristine || submitting }>Submit</button>
          <Link to="/" className="btn btn-danger">Cancel</Link>
        </form>
    );
  }
}

function validate(values){
  const errors = {};
  if (!values.title) {
    errors.title = '*Enter a Title';
  }
  if (!values.categories) {
    errors.categories = '*Enter a Category'
  }
  if (!values.content) {
    errors.content = '*Enter Post Content'
  }

  return errors;
}

//reduxForm is similar to connect.
//connect 1st arg is mapStateToProps, 2nd is mapDispatchToProps
//reduxForm 1st is form config, 2nd is mapStateToProps, 3rd is mapDispatchToProps
export default reduxForm({
  form: 'PostsNewForm',  // a unique identifier for this form
  fields: [ 'title', 'categories', 'content'], validate : validate
}, null, { createPost })(PostsNew);
