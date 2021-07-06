import {IPostsInitialState, posts} from '@store/reducers/posts/posts';
import {IUserInitialState, user} from '@store/reducers/user/user';
import { combineReducers } from 'redux';
import { TActions } from '../actions';

interface RootState {
    USER: IUserInitialState,
    POSTS: IPostsInitialState,
};

const rootReducer = combineReducers<RootState, TActions>({
    USER: user,
    POSTS: posts,
  });

export {rootReducer, RootState};