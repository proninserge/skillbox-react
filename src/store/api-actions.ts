import {ActionCreator} from '@store/actions';
import axios from 'axios';
import { Action } from 'redux';
import { ThunkAction } from 'redux-thunk';
import { RootState } from '@store/reducers/root-reducer';


const ApiActionCreator = {
    saveToken: (): ThunkAction<void, RootState, unknown, Action<string>> => (dispatch) => {
        if (window.__token__) {
            dispatch(ActionCreator.updateToken(window.__token__));
        }
    },
    saveUserData: (): ThunkAction<void, RootState, unknown, Action<string>> => (dispatch, getState) => {
        dispatch(ActionCreator.requestUserData());

        axios.get('https://oauth.reddit.com/api/v1/me',
            {headers: {Authorization: `bearer ${getState().USER.token}`}
        })
        .then((resp) => {
            const userData = resp.data;
            const data = {name: userData.name, iconImg: userData.icon_img};

            dispatch(ActionCreator.updateUserData(data));

            dispatch(ActionCreator.requestUserDataSuccess());
        })
        .catch((error) => {
            console.error(error);

            dispatch(ActionCreator.requestUserDataError());
        });
    },
    savePosts: (): ThunkAction<void, RootState, unknown, Action<string>> => (dispatch, getState) => {
        axios.get('https://oauth.reddit.com/best',
            {headers: {Authorization: `bearer ${getState().USER.token}`, 'Content-Type': 'application/json; charset=UTF-8'}
        })
        .then((resp) => {
            const firstFivePosts = resp.data.data.children.slice(0, 5);
            dispatch(ActionCreator.updatePosts(firstFivePosts));
        })
        .catch(console.log);
    },
};

export {ApiActionCreator};
