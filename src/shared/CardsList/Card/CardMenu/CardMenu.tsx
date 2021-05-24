import styles from './cardmenu.less';
import {Dropdown} from '@components/AbstractDropdown/AbstractDropdown';
import {PostDropdownControlsList} from './PostDropdownControlsList/PostDropdownControlsList';
import {CardMenuButton} from './CardMenuButton/CardMenuButton';

interface ICardMenuProps {
    postId: string;
};

export function CardMenu(props: ICardMenuProps) {
    const {postId} = props;

    return (
        <div className={styles.cardMenu}>
            <Dropdown isOpen={false} button={<CardMenuButton />}>
                <div className={styles.dropdown}>
                    <PostDropdownControlsList postId={postId} />
                </div>
            </Dropdown>
        </div>
    );
}