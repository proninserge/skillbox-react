import styles from './postdropdowncontrolslist.less';
import {POST_CONTROLS} from '@utils/constants';
import {PostDropdownControlsItem} from './PostDropdownControlsItem/PostDropdownControlsItem';
import withKey from '@utils/react/withKey';
import withExtraProps from '@utils/react/withExtraProp';

interface IPostDropdownControlsListProps {
    postId: string;
};

export function PostDropdownControlsList(props: IPostDropdownControlsListProps) {

    return (
        <ul className={styles.postDropdownControls}>
            {POST_CONTROLS.map(withKey('id')(withExtraProps(props, PostDropdownControlsItem)))}
        </ul>
    );
}