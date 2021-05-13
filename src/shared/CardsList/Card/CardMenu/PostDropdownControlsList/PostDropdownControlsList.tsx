import styles from './postdropdowncontrolslist.less';
import {POST_CONTROLS} from '@utils/constants';
import {PostDropdownControlsItem} from './PostDropdownControlsItem/PostDropdownControlsItem';
import withKey from '@utils/react/withKey';

export function PostDropdownControlsList() {
    return (
        <ul className={styles.postDropdownControls}>
            {POST_CONTROLS.map(withKey('id')(PostDropdownControlsItem))}
        </ul>
    );
}