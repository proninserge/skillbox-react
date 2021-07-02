import {ActionType} from '@store/actions';
import {IPostsData} from '@utils/react/hooks/usePostsData';
import { Reducer } from 'redux';

interface RootState {
    name: string;
    iconImg: string;
    token: string;
    posts: IPostsData[],
};

const ititialState: RootState = {
    name: '',
    iconImg: '',
    token: '',
    posts: [],
};

const rootReducer: Reducer = (state: RootState = ititialState, action) => {
    switch (action.type) {
        case ActionType.UPDATE_TOKEN: {
            return {
                ...state,
                token: action.token,
            }
        };
        case ActionType.UPDATE_USER: {
            return {
                ...state,
                name: action.data.name,
                iconImg: action.data.iconImg,
            }
        };
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

export {rootReducer, RootState};