import {IPostsData} from '@utils/react/hooks/usePostsData';

interface IUserData {
    name?: string;
    iconImg?: string;
};

const enum ActionType {
    UPDATE_TOKEN = 'UPDATE_TOKEN',
    UPDATE_USER = 'UPDATE_USER',
    UPDATE_POSTS = 'UPDATE_POSTS',
};

const ActionCreator = {
    updateToken: (token: string) => ({
        type: ActionType.UPDATE_TOKEN,
        token,
    }),
    updateUserData: (data: IUserData) => ({
        type: ActionType.UPDATE_USER,
        data,
    }),
    updatePosts: (posts: IPostsData[]) => ({
        type: ActionType.UPDATE_POSTS,
        posts,
    }),
};

export {ActionType, ActionCreator};