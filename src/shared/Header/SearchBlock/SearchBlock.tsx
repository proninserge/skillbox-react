import styles from './searchblock.less';
import UserBlock from './UserBlock/UserBlock';
import {userContext} from '@components/context/userContext';

export function SearchBlock() {
    const userData = React.useContext(userContext);

    return (
        <div className={styles.searchBlock}>
            <UserBlock avatarSrc={userData.iconImg} userName={userData.name} />
        </div>
    );
}