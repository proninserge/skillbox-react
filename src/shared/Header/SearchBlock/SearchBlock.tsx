import styles from './searchblock.less';
import UserBlock from './UserBlock/UserBlock';
import { RootState } from '@store/reducers/root-reducer';
import { useSelector } from 'react-redux';

export function SearchBlock() {
    const name = useSelector<RootState, string>(state => state.USER.name);
    const picture = useSelector<RootState, string>(state => state.USER.iconImg);

    return (
        <div className={styles.searchBlock}>
            <UserBlock avatarSrc={picture} userName={name} />
        </div>
    );
}