import styles from './postdropdowncontrolsitem.less';
import {renderSvgDirectly} from '@utils/utils';

interface IDropdownControlsItemProps {
    content: string;
    icon?: string;
}

export function PostDropdownControlsItem(props: IDropdownControlsItemProps) {
    const {icon, content} = props;
    return (
        <li className={styles.postDropdownItem}>{icon && renderSvgDirectly(icon)} {content}</li>
    );
}