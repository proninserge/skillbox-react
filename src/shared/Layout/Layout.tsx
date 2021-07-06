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

    const [token] = useToken();
    const [data] = useUserData();
    const [posts] = usePostsData();
        
    return (
        <div className={styles.layout}>
            {children}
        </div>
    );
}