import styles from './cardmenu.less';
import {Dropdown} from '@components/AbstractDropdown/AbstractDropdown';
import {PostDropdownControlsList} from './PostDropdownControlsList/PostDropdownControlsList';
import {CardMenuButton} from './CardMenuButton/CardMenuButton';

interface ICardMenuProps {
    postId: string;
};

export function CardMenu(props: ICardMenuProps) {
    const {postId} = props;
    const [zIndex, setzIndex] = React.useState(1);

    const handleZIndexSwitch = () => {
        if (zIndex === 1) {
            setzIndex(zIndex + 1);
        }
        if (zIndex > 1) {
            setzIndex(1);
        }
    };

    return (
        <div className={styles.cardMenu} style={{zIndex: zIndex}} onClick={handleZIndexSwitch}>
            <Dropdown isOpen={false} button={<CardMenuButton />}>
                <div className={styles.dropdown}>
                    <PostDropdownControlsList postId={postId} />
                </div>
            </Dropdown>
        </div>
    );
}