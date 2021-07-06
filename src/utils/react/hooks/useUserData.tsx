import { ApiActionCreator } from '@store/api-actions';
import { useDispatch, useStore } from 'react-redux';

interface IUserData {
    name: string;
    iconImg: string;
};

const useUserData = () => {   
    const store = useStore();
    const token = store.getState().USER.token;

    const data: IUserData = store.getState().USER;

    const dispatch = useDispatch();

    React.useEffect(() => {
        if(token) {
            dispatch(ApiActionCreator.saveUserData());
        }
    }, [token]);

    return [data];
};

export default useUserData;