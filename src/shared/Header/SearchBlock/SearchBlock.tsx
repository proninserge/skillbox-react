import styles from './searchblock.less';
import UserBlock from './UserBlock/UserBlock';

export function SearchBlock() {
    return (
        <div className={styles.searchBlock}>
            <UserBlock />
        </div>
    );
}