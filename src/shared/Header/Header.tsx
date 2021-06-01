import styles from './header.less';
import { SearchBlock } from './SearchBlock/SearchBlock';
import { SortBlock } from './SortBlock/SortBlock';
import { ThreadTitle } from './ThreadTitle/TreadTitle';

export function Header() {
    return (
        <header className={styles.header}>
            <SearchBlock />
            <ThreadTitle />
            <SortBlock />
        </header>
    );
}
