import {ActionType, TActions} from '@store/actions';
import { Reducer } from 'redux';
import {IPostsData} from '@utils/react/hooks/usePostsData';

interface IPostsInitialState {
    posts: IPostsData[],
};

const initialState: IPostsInitialState = {
    posts: [],
};

const posts: Reducer<IPostsInitialState, TActions> = (state: IPostsInitialState = initialState, action) => {
    switch (action.type) {
        case ActionType.UPDATE_POSTS: {
            return {
                ...state,
                posts: action.posts,
            }
        };
        default:
            return state;
    };
};

export {posts, IPostsInitialState};