import styles from './searchblock.less';
import UserBlock from './UserBlock/UserBlock';
import { RootState } from '@store/reducer/root-reducer';
import { useSelector } from 'react-redux';

export function SearchBlock() {
    const name = useSelector<RootState, string>(state => state.name);
    const picture = useSelector<RootState, string>(state => state.iconImg);

    return (
        <div className={styles.searchBlock}>
            <UserBlock avatarSrc={picture} userName={name} />
        </div>
    );
}