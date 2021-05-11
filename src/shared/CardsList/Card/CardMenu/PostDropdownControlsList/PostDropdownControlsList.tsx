import styles from './postdropdowncontrolslist.less';
import {POST_CONTROLS} from '@utils/constants';
import {PostDropdownControlsItem} from './PostDropdownControlsItem/PostDropdownControlsItem';

export function PostDropdownControlsList() {
    return (
        <ul className={styles.postDropdownControls}>
            {POST_CONTROLS.map((postControl) => (
                <PostDropdownControlsItem 
                    key={postControl.id}
                    content={postControl.content}
                    icon={postControl.icon}
                />
            ))}
        </ul>
    );
}