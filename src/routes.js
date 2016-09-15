
//this is where we provide the mapping between paths and the component we want to show.

import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/app';
import PostsIndex from './components/posts_index';
import PostsNew from './components/posts_new';
import ViewPost from './components/post_view';

//IndexRoute is used when the path matches the parent and NOT any of the child
//paths. Index route is rendered along with the parent component.(PostsIndex and APP)
//post/:id -> id is passed in the params as this.props.params.id in ViewPost
export default (
  <Route path="/" component={App}>
    <IndexRoute component={PostsIndex} />
    <Route path="/posts/new" component={PostsNew} />
    <Route path="/posts/:id" component={ViewPost} />

  </Route>
);
