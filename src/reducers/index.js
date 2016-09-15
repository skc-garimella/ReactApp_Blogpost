import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import PostsReducer from './reducer-posts';


const rootReducer = combineReducers({
  blogPosts : PostsReducer,
  form: formReducer
});

export default rootReducer;
