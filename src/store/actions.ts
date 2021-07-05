import {IPostsData} from '@utils/react/hooks/usePostsData';

interface IUserData {
    name: string;
    iconImg: string;
};

interface IActions {
    UPDATE_TOKEN: {type: ActionType.UPDATE_TOKEN, token: string};
    UPDATE_USER: {type: ActionType.UPDATE_USER, data: IUserData};
    ME_REQUEST: {type: ActionType.ME_REQUEST};
    ME_REQUEST_SUCCESS: {type: ActionType.ME_REQUEST_SUCCESS};
    ME_REQUEST_ERROR: {type: ActionType.ME_REQUEST_ERROR};
    UPDATE_POSTS: {type: ActionType.UPDATE_POSTS, posts: IPostsData[]};
}

type TActions = IActions[keyof IActions];

const enum ActionType {
    UPDATE_TOKEN = 'UPDATE_TOKEN',
    UPDATE_USER = 'UPDATE_USER',
    ME_REQUEST = 'ME_REQUEST',
    ME_REQUEST_SUCCESS = 'ME_REQUEST_SUCCESS',
    ME_REQUEST_ERROR = 'ME_REQUEST_ERROR',

    UPDATE_POSTS = 'UPDATE_POSTS',
};

const ActionCreator = {
    updateToken: (token: string): IActions["UPDATE_TOKEN"] => ({
        type: ActionType.UPDATE_TOKEN,
        token,
    }),
    updateUserData: (data: IUserData): IActions["UPDATE_USER"] => ({
        type: ActionType.UPDATE_USER,
        data,
    }),
    updatePosts: (posts: IPostsData[]): IActions["UPDATE_POSTS"] => ({
        type: ActionType.UPDATE_POSTS,
        posts,
    }),
    requestUserData: (): IActions["ME_REQUEST"] => ({
        type: ActionType.ME_REQUEST,
    }),
    requestUserDataSuccess: (): IActions["ME_REQUEST_SUCCESS"] => ({
        type: ActionType.ME_REQUEST_SUCCESS,
    }),
    requestUserDataError: (): IActions["ME_REQUEST_ERROR"] => ({
        type: ActionType.ME_REQUEST_ERROR,
    }),
};

export {ActionType, ActionCreator, TActions};