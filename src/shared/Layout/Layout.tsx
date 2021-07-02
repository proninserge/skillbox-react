import useUserData from '@utils/react/hooks/useUserData';
import useToken from '@utils/react/hooks/useToken';
import { useDispatch } from 'react-redux';
import styles from './layout.less';
import { usePostsData } from '@utils/react/hooks/usePostsData';
import {ActionCreator} from '@store/actions';
interface ILayoutProps {
    children?: React.ReactNode;
};

export function Layout({children}: ILayoutProps) {
    const dispatch = useDispatch();

    const [data] = useUserData();
    const [token] = useToken();
    const [posts] = usePostsData();

    React.useEffect(() => {
        if(data.name) {
            dispatch(ActionCreator.updateUserData(data));
        }

        if(token !== 'undefined') {
            dispatch(ActionCreator.updateToken(token));
        }

        if(posts[0]) {
            dispatch(ActionCreator.updatePosts(posts));
        }
    }, [data, token, posts]);

        
    return (
        <div className={styles.layout}>
            {children}
        </div>
    );
}