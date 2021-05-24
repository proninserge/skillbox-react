import styles from './postdropdowncontrolsitem.less';
import {clickOnPostControl} from '@utils/utils';
import {PostDropdownIconsSprite} from '@components/Icons/PostDropdownIconsSprite';
import TPostControl from '@utils/react/types/TPostControl';

interface IPostDropdownControlsItemProps {
    content: string;
    id: TPostControl;
    postId?: string;
};

export function PostDropdownControlsItem(props:  IPostDropdownControlsItemProps) {
    const {content, id, postId} = props;

    return (
        <li 
            className={styles.postDropdownItem}
            data-control={id}
            onClick={() => clickOnPostControl(id, postId)}
        >

            <PostDropdownIconsSprite id={id}/> {content}

        </li>
    );
}