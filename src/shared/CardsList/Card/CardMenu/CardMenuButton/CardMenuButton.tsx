import {MenuIcon} from '@components/Icons/MenuIcon';
import styles from './cardmenubutton.less';

export function CardMenuButton() {
    return (
        <button className={styles.menuBtn}>
            <MenuIcon />
        </button>
    );
}