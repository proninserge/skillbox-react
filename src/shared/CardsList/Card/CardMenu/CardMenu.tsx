import styles from './cardmenu.less';
import {Dropdown} from '@components/AbstractDropdown/AbstractDropdown';
import {PostDropdownControlsList} from './PostDropdownControlsList/PostDropdownControlsList';

export function CardMenu() {
    return (
        <div className={styles.cardMenu}>
            <Dropdown isOpen={false} button={<button className={styles.menuBtn}>M</button>}>
                <PostDropdownControlsList />
            </Dropdown>
        </div>
    );
}