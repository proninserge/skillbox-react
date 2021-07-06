import {ActionType, TActions} from '@store/actions';
import { Reducer } from 'redux';

interface IUserInitialState {
    name: string;
    iconImg: string;
    token: string;
    userDataRequested: boolean;
    loading: boolean;
    userDataRequestSuccess: boolean;
    userDataRequestError: boolean;
};

const initialState: IUserInitialState = {
    name: '',
    iconImg: '',
    token: '',
    userDataRequested: false,
    loading: false,
    userDataRequestSuccess: false,
    userDataRequestError: false,
};

const user: Reducer<IUserInitialState, TActions> = (state: IUserInitialState = initialState, action) => {
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
        case ActionType.ME_REQUEST: {
            return {
                ...state,
                userDataRequested: true,
                loading: true,
            }
        };
        case ActionType.ME_REQUEST_SUCCESS: {
            return {
                ...state,
                userDataRequestSuccess: true,
                loading: false,
            }
        };
        case ActionType.ME_REQUEST_ERROR: {
            return {
                ...state,
                userDataRequestError: true,
                loading: false,
            }
        };
        default:
            return state;
    };
};

export {user, IUserInitialState};