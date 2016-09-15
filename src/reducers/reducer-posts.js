
import React from 'react';
import { FETCH_POSTS, GET_POST } from '../actions/index';

const INITIAL_STATE = { all: [], post: null } ;

export default function PostsReducer(state = INITIAL_STATE, action) {

  switch(action.type){
    case FETCH_POSTS:
      //console.log(state);
      //console.log(action );
      return { all: action.payload.data, post: null };

    case GET_POST:
      console.log(action);
      return { all: [], post : action.payload.data };

    default:
      return state;
  }
}
